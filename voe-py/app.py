from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup
import re
import json
import base64
import random

app = Flask(__name__)

# URL to fetch the list of User-Agent strings
USER_AGENT_URL = 'https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt'

# Define Tor proxy settings
TOR_PROXY = 'socks5h://localhost:9050'

def fetch_user_agents():
    """Fetch the list of User-Agent strings from the external URL."""
    response = requests.get(USER_AGENT_URL, proxies={'http': TOR_PROXY, 'https': TOR_PROXY})
    if response.status_code == 200:
        return response.text.splitlines()
    else:
        return []

USER_AGENTS = fetch_user_agents()

def get_random_user_agent():
    """Return a random user-agent from the fetched list."""
    if USER_AGENTS:
        return random.choice(USER_AGENTS)
    else:
        # Fallback to a default User-Agent if fetching failed
        return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

def get_redirected_url(url):
    """Handle redirection based on JavaScript logic."""
    headers = {
        'User-Agent': get_random_user_agent(),
        'Referer': 'https://voe.sx/',
        'Origin': 'https://voe.sx'
    }
    response = requests.get(url, headers=headers, proxies={'http': TOR_PROXY, 'https': TOR_PROXY})
    if 'window.location.href' in response.text:
        match = re.search(r"window\.location\.href\s*=\s*'([^']*)'", response.text)
        if match:
            return match.group(1)
    return url

def extract_link_from_json(json_str):
    """Clean and decode JSON string to extract 'hls' link."""
    json_str = json_str.replace("'", '"').replace("\\n", "").replace("\\", "")
    json_str = re.sub(r',\s*}', '}', json_str)
    json_str = re.sub(r',\s*]', ']', json_str)
    if not json_str.startswith('{'):
        json_str = '{' + json_str
    if not json_str.endswith('}'):
        json_str = json_str + '}'
    try:
        source_json = json.loads(json_str)
        link = source_json.get("hls")
        if link:
            return base64.b64decode(link).decode("utf-8")
    except json.JSONDecodeError:
        pass
    return None

@app.route('/favicon.ico')
def favicon():
    """Serve a blank favicon or return 204 No Content."""
    return '', 204

@app.route('/<path:url>', methods=['GET'])
def get_link(url):
    # Construct the full URL with 'http://' or 'https://'
    if not url.startswith(('http://', 'https://')):
        url = 'http://' + url

    # Extract link
    final_url = get_redirected_url(url)
    headers = {
        'User-Agent': get_random_user_agent(),
        'Referer': 'https://voe.sx/',
        'Origin': 'https://voe.sx'
    }
    response = requests.get(final_url, headers=headers, proxies={'http': TOR_PROXY, 'https': TOR_PROXY})
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract script containing sources
    script_tag = soup.find('script', string=re.compile(r"var sources"))
    if script_tag:
        script_content = script_tag.string
        slice_start = script_content.index("var sources = ") + len("var sources = ")
        slice_end = script_content.index(";", slice_start)
        source_json_str = script_content[slice_start:slice_end].strip()
        
        link = extract_link_from_json(source_json_str)
        if link:
            return jsonify({"streamlink": link})
        else:
            return jsonify({"error": "Failed to extract the link."}), 500
    else:
        return jsonify({"error": "Could not find the script containing sources."}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)

(function () {
    function disableCopyPaste(element) {
        if (element) {
            ["mousedown", "selectstart", "copy", "cut", "paste", "dragstart", "drop"].forEach(function (event) {
                element.addEventListener(event, function (e) {
                    e.preventDefault();
                    return false;
                });
            });
        }
    }

    function disableRightClick(event) {
        event.preventDefault();
    }

    function disableShortcuts(event) {
        const forbiddenKeys = [16, 67, 86, 85, 117, 123, 73, 82]; // Shift, C, V, U, F5, F12, I, R
        // Allow spacebar (keyCode 32) to function normally
        if (forbiddenKeys.includes(event.keyCode) && event.keyCode !== 32) {
            event.preventDefault();
        }
        // Optional: log keyCode for debugging
        console.log(event.keyCode);
    }

    function detectDevTool() {
        const threshold = 100; // milliseconds
        const start = performance.now();
        eval("debugger");
        const end = performance.now();
        if (end - start > threshold) {
            window.location.replace("https://ply4.com/hello.html");
        }
    }

    function attachHandlers() {
        window.addEventListener('resize', detectDevTool);
        window.addEventListener('mousemove', detectDevTool);
        window.addEventListener('focus', detectDevTool);
        window.addEventListener('blur', detectDevTool);
        window.addEventListener('contextmenu', disableRightClick);
        window.addEventListener('keydown', disableShortcuts);
        disableCopyPaste(document.body);
        disableCopyPaste(document.querySelector("input[type='text']"));
    }

    if (document.readyState === "complete" || document.readyState === "interactive") {
        detectDevTool();
        attachHandlers();
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            detectDevTool();
            attachHandlers();
        });
    }
})();

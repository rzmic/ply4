$(document).ready((function(){function a(e,t){const n=`https://db.ply4.com/postsporn?page=${e}&pageSize=10`,i=t?`${n}&title=${encodeURIComponent(t)}`:n;$.ajax({url:i,type:"GET",success:function(t){var n;n=t.posts,$("#postsList").empty(),n.forEach((a=>{const e=`<div class="card mb-2">\n                                    <div class="card-body">\n                                    <small>${a.porn_id}</small> - ${a.title}\n                                    </div>\n                                  </div>`;$("#postsList").append(e)})),function(e,t){$("#pagination").empty();const n=5,i=Math.max(1,t-Math.floor(n/2)),l=Math.min(e,i+n-1);t>1&&$("#pagination").append(`<li class="page-item"><a class="page-link" href="#" data-page="${t-1}">&lt;&lt;</a></li>`);for(let a=i;a<=l;a++){const e=a===t?"active":"";$("#pagination").append(`<li class="page-item ${e}"><a class="page-link" href="#" data-page="${a}">${a}</a></li>`)}t<e&&$("#pagination").append(`<li class="page-item"><a class="page-link" href="#" data-page="${t+1}">&gt;&gt;</a></li>`);$("#pagination").off("click","a.page-link").on("click","a.page-link",(function(e){e.preventDefault();a($(this).data("page"),$("#searchTitle").val())}))}(t.totalPages,e)},error:function(a){alert("Failed to fetch posts. Please try again.")}})}$("#searchForm").submit((function(e){e.preventDefault();a(1,$("#searchTitle").val())})),$("#resetSearch").click((function(){$("#searchTitle").val(""),a(1,"")})),$("#jumpToPageForm").submit((function(e){e.preventDefault();const t=parseInt($("#jumpToPage").val(),10);if(isNaN(t)||t<=0)return void alert("Please enter a valid page number.");a(t,$("#searchTitle").val())})),a(1,"")}));

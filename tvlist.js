$(document).ready((function(){function a(t,e){const i=`https://db.ply4.com/poststv?page=${t}&pageSize=10`,n=e?`${i}&title=${encodeURIComponent(e)}`:i;$.ajax({url:n,type:"GET",success:function(e){var i;i=e.posts,$("#postsList").empty(),i.forEach((a=>{const t=`<div class="card mb-2">\n                                    <div class="card-body">\n                                    <small>${a.tmdbtv_id2}</small> - ${a.titletv}\n                                    </div>\n                                  </div>`;$("#postsList").append(t)})),function(t,e){$("#pagination").empty();const i=5,n=Math.max(1,e-Math.floor(i/2)),l=Math.min(t,n+i-1);e>1&&$("#pagination").append(`<li class="page-item"><a class="page-link" href="#" data-page="${e-1}">&lt;&lt;</a></li>`);for(let a=n;a<=l;a++){const t=a===e?"active":"";$("#pagination").append(`<li class="page-item ${t}"><a class="page-link" href="#" data-page="${a}">${a}</a></li>`)}e<t&&$("#pagination").append(`<li class="page-item"><a class="page-link" href="#" data-page="${e+1}">&gt;&gt;</a></li>`);$("#pagination").off("click","a.page-link").on("click","a.page-link",(function(t){t.preventDefault();a($(this).data("page"),$("#searchTitle").val())}))}(e.totalPages,t)},error:function(a){alert("Failed to fetch posts. Please try again.")}})}$("#searchForm").submit((function(t){t.preventDefault();a(1,$("#searchTitle").val())})),$("#resetSearch").click((function(){$("#searchTitle").val(""),a(1,"")})),$("#jumpToPageForm").submit((function(t){t.preventDefault();const e=parseInt($("#jumpToPage").val(),10);if(isNaN(e)||e<=0)return void alert("Please enter a valid page number.");a(e,$("#searchTitle").val())})),a(1,"")}));

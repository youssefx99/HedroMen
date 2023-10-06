// Assuming the URL is stored in a variable url
const url = window.location.href;
const searchParams = new URLSearchParams(url.split('?')[1]);
const id = searchParams.get('id');
const articleId = searchParams.get('article_id');
fetch('../Data/courses_data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(box =>{
            if(box.id == id){
                const container = document.querySelector('.content');
                let turget = null;
                box.article.forEach(article => {
                    if(article.id == articleId){
                        turget = article;
                    }
                });
                if(!turget)alert("Error!");
                // box.article.forEach(article => {
                //     const content = `
                //      <div class="article-container">
                //       <div class="article-title">${article.title}</div>
                //       <div class="articel-content">
                //         <div>
                //           <img
                //             class="articel-img1"
                //             src="${article.image}"
                //             alt="Longtail boat in Thailand"
                //           />
                //         </div>
                //         <div class="article-text">
                //         ${article.body}
                //         </div>
                //       </div>
                //       <div class="TopicControls">
                //         <div class="doneBtn"><button>Done</button></div>
                //         <div class="starBtn">
                //           <button><i class="fa-regular fa-star"></i></button>
                //         </div>
                //       </div>
                //     </div>`;
                //     container.innerHTML += content;
                // });
                const content = `
                 <div class="article-container">
                  <div class="article-title">${turget.title}</div>
                  <div class="articel-content">
                    <div>
                      <img
                        class="articel-img1"
                        src="${turget.image}"
                        alt="Longtail boat in Thailand"
                      />
                    </div>
                    <div class="article-text">
                    ${turget.body}
                    </div>
                  </div>
                  <div class="TopicControls">
                    <div class="doneBtn"><button>Done</button></div>
                    <div class="starBtn">
                      <button><i class="fa-regular fa-star"></i></button>
                    </div>
                  </div>
                </div>
                `;
                container.innerHTML += content;
            }

        });
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });


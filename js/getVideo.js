// Assuming the URL is stored in a variable url
const url = window.location.href;
const searchParams = new URLSearchParams(url.split("?")[1]);
const id = searchParams.get("id");
const videoId = searchParams.get("video_id");
fetch("../Data/courses_data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((box) => {
      if (box.id == id) {
        const container = document.querySelector(".courseTemp--Container");
        let turget = null;
        box.videos.forEach((video) => {
          if (video.id == videoId) {
            turget = video;
          }
        });
        if (!turget) alert("Error!");
        const content = `
                 <div class="videoControlSection">
                    <div class="topicTitle">${turget.title}</div>
                    <div class="theVideo">
                        <iframe class="iframeVideoYoutube" width="560" height="315" src="${turget.videoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   
                     </div>
                    <div class="TopicControls">
                        <div class="doneBtn"><button class ='doneBtnReal'>Done</button></div>
                        <div class="starBtn"><button class="star-fav fav-selected"><i class="fa-regular fa-star"></i></button></div>
                    </div>
                 </div>
                <div class="verticalLine"></div>
                <div class="infoSection">
                    <div class="infoTitle">
                        Just Want to read
                    </div>
                    <div class="VideoSubtitles">${turget.transcript}</div>
                </div>
                `;
        container.innerHTML = content;
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

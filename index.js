import posts from "./data.js";

let postEl = document.getElementById("post-el");

console.log(postEl);

function renderPosts() {
  postEl.innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    postEl.innerHTML += `<section>
                <div class="post-header" >
                  <img class="user-avatar" src="${posts[i].avatar}" />
                  <div class="post-header-text">
                    <h2 class="user-name">${posts[i].name}</h2>
                    <h3 class="user-location">${posts[i].location}</h3>
                  </div>
                </div>
                <img id="${i}" class="post-image" src="${posts[i].post}" />
                <div class="user-interaction">
                  <img id="${i}" src="images/icon-heart.png" />
                  <img src="./images/icon-comment.png" />
                  <img src="./images/icon-dm.png" />
                </div>
                <div class="post-description">
                  <h2 class="likes">${posts[i].likes.toLocaleString(
                    "en"
                  )} likes</h2>
                  <h2 class="user-id">${posts[i].username}</h2>
                  <p class="description">${posts[i].comment}</p>
                </div>
              </section>`;
  }
}

renderPosts();

document.body.addEventListener("dblclick", function (event) {
  for (let j = 0; j < posts.length; j++) {
    if (event.target.id === `${j}`) {
      if (!posts[j].isLiked) {
        posts[j].likes += 1;
        posts[j].isLiked = !posts[j].isLiked;
        renderPosts();
      } else {
        posts[j].likes -= 1;
        posts[j].isLiked = !posts[j].isLiked;
        renderPosts();
      }
    }
  }
});

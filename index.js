const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

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
      posts[j].likes += 1;
      renderPosts();
    }
  }
});

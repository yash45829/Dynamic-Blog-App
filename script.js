const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
// localStorage.clear()

const add = document.getElementById("add"); //add button
const popup = document.getElementById("popup"); //post making modal
const close = document.getElementById("close"); //close
const submit = document.getElementById("submit"); //uplooad post
const blogs = document.getElementById("blogs"); //blog container
const section = document.getElementsByTagName("section"); //blur background

// form inputs
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let url = document.getElementById("url");
let content = document.getElementById("content");
let read = document.getElementsByClassName("read");

// blog card classes
let titleclass = document.getElementsByClassName("title");
let descclass = document.getElementsByClassName("desc");
let posterclass = document.getElementsByClassName("poster");

// card
let card = `<div class="card">
            <div class="poster" ></div>
            <h2 class="title"></h2>
            <p class="desc">desc</p>
            <button class="read" >Read</button>
            </div>`;

function showPost(index) {
  const postContent = blogPosts[index];

  localStorage.setItem("currentPost", JSON.stringify(postContent));
  window.location.href = "post.html";
}

const reviewpost = () => {
  blogs.innerHTML = "";
  // console.log(blogPosts.length);

  if (blogPosts.length == 0) {
    const postItem = document.createElement("div");
    postItem.textContent = `no blogs `;
    blogs.appendChild(postItem);
  } else {
    // console.log(blogPosts);
    blogPosts.forEach((postContent, i) => {
      blogs.insertAdjacentHTML("afterbegin", card);

      // console.log(postContent.url);
      posterclass[0].innerHTML = `<img src="${postContent.url}" alt = "" >`;
      console.log(postContent.title);
      titleclass[0].innerHTML = postContent.title;
      descclass[0].innerHTML = postContent.desc;
      read[0].addEventListener("click", () => showPost(i));
    });
  }
};

const uploadPost = () => {
  // console.log(url.value);
  // console.log(title.value);
  // console.log(desc.value);
  // console.log(content.value);
  let newPost = {
    url: url.value,
    title: title.value,
    desc: desc.value,
    content: content.value,
  };

  if (newPost) {
    blogPosts.push(newPost);
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
    reviewpost();
  }

  popup.style.display = "none";
  section[0].style.display = "none";

  url.value = "";
  title.value = "";
  desc.value = "";
  content.value = "";
};

// closing popup
const closeModal = () => {
  popup.style.display = "none";
  section[0].style.display = "none";

  url.value = "";
  title.value = "";
  desc.value = "";
  content.value = "";
};

// add post
const createPost = () => {
  popup.style.display = "flex";
  section[0].style.display = "block";
};
reviewpost();

close.addEventListener("click", closeModal);
add.addEventListener("click", createPost);
submit.addEventListener("click", uploadPost);

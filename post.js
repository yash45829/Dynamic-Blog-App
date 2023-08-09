const content = document.getElementById("content");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const desc = document.getElementById("desc");

function showPost() {
  const blogPost = JSON.parse(localStorage.getItem("currentPost"));

  if (blogPost) {
    // console.log(blogPost)
    // console.log(JSON.stringify(blogPost))

    cover.innerHTML = `<img src="${blogPost.url}" alt = "" >`;
    title.innerHTML = blogPost.title;
    desc.innerHTML = blogPost.desc;
    content.innerHTML = blogPost.content;
  } else {
    window.location.href = "index.html";
  }
}

showPost();

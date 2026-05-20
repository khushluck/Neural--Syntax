const BLOG_URL = "https://neuralsyntaxofficial.blogspot.com";

const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

// GLOBAL function (required for JSONP)
function renderPost(data) {
  const post = data.feed.entry.find((p) => p.id.$t === postId);

  if (!post) {
    document.getElementById("content").innerHTML = "Post not found.";
    return;
  }

  document.getElementById("title").innerText = post.title.$t;

  let content = post.content.$t;

  // 🔥 Clean Blogger styles
  content = content
    .replace(/style="[^"]*"/g, "")
    .replace(/class="[^"]*"/g, "")
    .replace(/<font[^>]*>/g, "")
    .replace(/<\/font>/g, "");

  document.getElementById("content").innerHTML = content;
}

// LOAD BLOG DATA USING JSONP
const script = document.createElement("script");
script.src = `${BLOG_URL}/feeds/posts/default?alt=json-in-script&callback=renderPost`;
document.body.appendChild(script);

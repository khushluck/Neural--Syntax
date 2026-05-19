const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

fetch(`/api/note?slug=${slug}`)
  .then(res => res.json())
  .then(data => {

    const title = data.page.properties.Title.title[0].plain_text;
    document.getElementById("title").innerText = title;

    const container = document.getElementById("content");

    data.blocks.forEach(block => {

      let html = "";

      if (block.type === "paragraph") {
        const text = block.paragraph.rich_text.map(t => t.plain_text).join("");
        html = `<p class="text-gray-300">${text}</p>`;
      }

      if (block.type === "heading_1") {
        const text = block.heading_1.rich_text.map(t => t.plain_text).join("");
        html = `<h1 class="text-2xl font-bold mt-6">${text}</h1>`;
      }

      if (block.type === "heading_2") {
        const text = block.heading_2.rich_text.map(t => t.plain_text).join("");
        html = `<h2 class="text-xl font-semibold mt-4">${text}</h2>`;
      }

      if (block.type === "bulleted_list_item") {
        const text = block.bulleted_list_item.rich_text.map(t => t.plain_text).join("");
        html = `<li class="ml-6 list-disc">${text}</li>`;
      }

      container.innerHTML += html;
    });

  });

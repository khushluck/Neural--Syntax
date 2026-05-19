fetch("/api/notes")
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("notes");

    data.forEach(note => {
      const title = note.properties.Title.title[0]?.plain_text;

      container.innerHTML += `
        <div class="bg-[#111827] p-4 rounded-xl border border-[#1f2937] hover:border-[#22c1f1] transition">

          <h2 class="text-lg font-semibold">${title}</h2>

          <a href="#" class="text-[#22c1f1] text-sm mt-2 inline-block">
            Read Notes →
          </a>

        </div>
      `;
    });

  });

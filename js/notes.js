fetch('data/notes.json')
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("notes");

    data.forEach(note => {
      container.innerHTML += `
        <div class="bg-[#111827] p-4 rounded-xl border border-[#1f2937] hover:border-[#22c1f1] transition">

          <h2 class="text-lg font-semibold">${note.title}</h2>
          <p class="text-sm text-gray-400">${note.course}</p>

          <a href="${note.file}" 
             class="text-[#22c1f1] text-sm mt-2 inline-block">
            Read Notes →
          </a>

        </div>
      `;
    });

  });

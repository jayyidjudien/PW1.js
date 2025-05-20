document.getElementById("newsForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const date = document.getElementById("date").value.trim();
    const author = document.getElementById("author").value.trim();
    const summary = document.getElementById("summary").value.trim();
    const image = document.getElementById("image").files.length; 
    const content = document.getElementById("content").value.trim();

    if (!title || !date || !author || !summary || !image || !content) {
        alert("Form harus diisi semua");
        return;
    }

    document.getElementById("newsPreview").innerHTML = `
        <div class="card">
            <h3>${title}</h3>
            <p><strong>Tanggal:</strong> ${date}</p>
            <p><strong>Penulis:</strong> ${author}</p>
            <p><strong>Cuplikan:</strong> ${summary}</p>
            <img src="${event.target.result}" alt = "Gambar Berita" class="preview-image"> 
            <p>${content}</p>
        </div>
    `;
});
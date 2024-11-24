// Arama Fonksiyonu
function searchBlog(event) {
    event.preventDefault(); // Formun yeniden yüklenmesini engelle

    const searchInput = document.getElementById("searchInput").value.toLowerCase(); // Kullanıcının girdiği arama terimi
    const postsContainer = document.getElementById("postsContainer");

    // Tüm blog yazılarını al
    const posts = postsContainer.querySelectorAll(".post");
    
    posts.forEach(post => {
        const title = post.querySelector("h3").textContent.toLowerCase();
        
        // Başlık arama terimiyle eşleşiyorsa, göster
        if (title.includes(searchInput)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}

// Resmi büyütmek için fonksiyon
function openModal(imageSrc) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Modal'ı kapatmak için fonksiyon
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}


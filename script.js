// PROJECT DATA
const projects = [
  { title: "Instagram Carousel", type: "gif", src: "media/social1.gif", thumb: "media/social1-thumb.jpg", description: "Animated social media carousel." },
  { title: "TikTok Promo", type: "video", src: "Media/Post 4_V3.mp4", thumb: "media/social2-thumb.jpg", description: "Short promo video for TikTok." },
  { title: "Facebook Post", type: "image", src: "media/social3.jpg", thumb: "media/social3-thumb.jpg", description: "High-res static post." },
  { title: "Instagram Story", type: "video", src: "Media/Post 4_V3.mp4", thumb: "media/social4-thumb.jpg", description: "Animated story content." }
];

// POPULATE GALLERY
const galleryGrid = document.getElementById("galleryGrid");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function displayProjects(filter = "all") {
  galleryGrid.innerHTML = "";
  projects.filter(p => filter === "all" || p.type === filter).forEach(p => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");
    if (p.type === "video") {
      item.innerHTML = `<video src="${p.src}" muted loop preload="metadata" class="thumb-video"></video>`;
    } else {
      item.innerHTML = `<img src="${p.thumb}" alt="${p.title}">`;
    }
    item.addEventListener("click", () => openModal(p));
    galleryGrid.appendChild(item);
  });
}

// OPEN MODAL
function openModal(project) {
  modalBody.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
  if (project.type === "video") {
    modalBody.innerHTML += `<video src="${project.src}" controls autoplay style="width:100%;border-radius:12px"></video>`;
  } else if (project.type === "gif" || project.type === "image") {
    modalBody.innerHTML += `<img src="${project.src}" alt="${project.title}" style="width:100%;border-radius:12px">`;
  }
  modal.style.display = "flex";
}

// CLOSE MODAL
modalClose.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", e => { if(e.target === modal) modal.style.display = "none"; });

// FILTER BUTTONS
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    displayProjects(btn.dataset.type);
  });
});

// INITIAL DISPLAY
displayProjects();
document.getElementById("year").textContent = new Date().getFullYear();

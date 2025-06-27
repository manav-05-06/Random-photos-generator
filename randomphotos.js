const imgContainer = document.querySelector(".forimg");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const searchBar = document.querySelector(".search-bar");
const magnifier = document.querySelector(".magnifier");

// Load more images on button click
loadMoreBtn.addEventListener("click", () => {
  const count = 10;
  addImages(count);
});

// Add images dynamically
function addImages(count) {
  for (let i = 0; i < count; i++) {
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000 + Date.now())}`;
    newImg.alt = "Random Image";
    imgContainer.appendChild(newImg);
  }
}

// Toggle search bar animation
magnifier.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});

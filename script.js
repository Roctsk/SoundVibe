const modal = document.getElementById("musicModal");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close");
const musicImages = document.querySelectorAll(".top_hits");

let isDragging = false;
let offsetX, offsetY;

function openModal() {
    modal.style.display = "flex";
    modalContent.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

musicImages.forEach(image => {
    image.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

modalContent.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - modalContent.getBoundingClientRect().left;
    offsetY = e.clientY - modalContent.getBoundingClientRect().top;
    modalContent.style.cursor = "grabbing"; 
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    modalContent.style.position = "absolute";
    modalContent.style.left = `${e.clientX - offsetX}px`;
    modalContent.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    modalContent.style.cursor = "default";
});

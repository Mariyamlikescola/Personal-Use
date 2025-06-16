const reasons = [
  "THE WAY YOU CAN NEVER HIDE WHAT U FEEL CUZ OF UR FACIAL EXPRESSIONS🤣🙏 ",
  "Them majestic eyes",
  "How gangstaaa bro is",
  "the way u show ur one dimple like miguel from coco",
  "how u are so focused while playing games",
  "ur love for cats",
  "The way u get happy when u see fries",
  "Honorable mentions:"
];

const images = [
  "./media/WhatsApp Video 2025-06-16 at 23.21.27.mp4", // facial expressions
  "https://i.pinimg.com/564x/ae/67/34/ae6734f7d13c5a45f981fdf1f5a4b7d9.jpg", // eyes
  "./media/WhatsApp Image 2025-06-16 at 23.21.15.jpeg", // gangsta
  "https://i.pinimg.com/564x/3a/b3/63/3ab363f5b3e0a7fc32c3393c1c927ec1.jpg", // dimple
  "https://i.pinimg.com/564x/36/1f/90/361f9008e76085f4d89b252b5b91bb29.jpg", // gaming
  "https://i.pinimg.com/564x/5e/e0/28/5ee028f771e4bb14e16299fd8e56f106.jpg", // singing
  "https://i.pinimg.com/564x/b4/69/45/b469456fdce3ed0c3e8f4f5b8c3de6a1.jpg", // hype
  "./media/WhatsApp Image 2025-06-16 at 23.26.34.jpeg"  // YOU
];

const reasonGrid = document.getElementById("reasonGrid");

reasons.forEach((reason, i) => {
  const polaroid = document.createElement("div");
  polaroid.className = "polaroid";

  const isVideo = images[i].endsWith(".mp4");

  polaroid.innerHTML = `
    ${isVideo 
      ? `<video controls playsinline class="reason-media"><source src="${images[i]}" type="video/mp4">Your browser does not support the video tag.</video>`
      : `<img src="${images[i]}" alt="Memory ${i + 1}" class="reason-media">`
    }
    <p>${reason}</p>
  `;
  reasonGrid.appendChild(polaroid);
});


document.querySelectorAll('.letter').forEach(letter => {
  letter.addEventListener('click', () => {
    document.getElementById('letterMessage').innerText = letter.dataset.message;
  });
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(i) {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === i);
  });
}
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}
showSlide(slideIndex);
// Color swatch interactivity
document.querySelectorAll(".color-swatch").forEach(swatch => {
  swatch.addEventListener("click", () => {
    const desc = swatch.getAttribute("data-description");
    document.getElementById("colorDescription").textContent = desc;
  });
});

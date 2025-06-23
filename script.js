const reasons = [
  "THE WAY YOU CAN NEVER HIDE WHAT U FEEL CUZ OF UR FACIAL EXPRESSIONS🤣🙏 ",
  "Them majestic eyes",
  "How gangstaaa bro is",
  "the way u show ur one dimple like miguel from coco",
  "how when u lock in somth u make that cute focused face(❁´◡`❁)",
  "ur love for cats",
  "The way u love fries",
  "Honorable mentions:"
];

const images = [
  "./media/WhatsApp Video 2025-06-16 at 23.21.27.mp4", // facial expressions
  "./media/WhatsApp Image 2025-06-23 at 04.31.13.jpeg", // eyes
  "./media/WhatsApp Image 2025-06-16 at 23.21.15.jpeg", // gangsta
  "./media/WhatsApp Image 2025-06-23 at 04.30.56.jpeg", // dimple
  "./media/WhatsApp Image 2025-06-23 at 04.31.14.jpeg", // gaming
  "./media/WhatsApp Image 2025-06-23 at 04.31.13 (1).jpeg", // singing
  "./media/Screenshot 2025-06-23 043622.png", // hype
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

// Put your pairs of images here (make sure they exist in your media folder or use URLs)
const cardImages = [
  "./media/WhatsApp Image 2025-06-23 at 05.07.41.jpeg",
  "./media/WhatsApp Image 2025-06-23 at 05.07.41.jpeg",

  "./media/WhatsApp Image 2025-06-23 at 05.06.20.jpeg",
  "./media/WhatsApp Image 2025-06-23 at 05.06.20.jpeg",

  "./media/WhatsApp Image 2025-06-23 at 05.08.44.jpeg",
  "./media/WhatsApp Image 2025-06-23 at 05.08.44.jpeg",

  "./media/WhatsApp Image 2025-06-23 at 05.13.22.jpeg",
  "./media/WhatsApp Image 2025-06-23 at 05.13.22.jpeg",

  "./media/WhatsApp Image 2025-06-23 at 05.02.48.jpeg",
  "./media/WhatsApp Image 2025-06-23 at 05.02.48.jpeg",

  "./media/WhatsApp Image 2025-06-23 at 05.03.58.jpeg",
  "./media/WhatsApp Image 2025-06-23 at 05.03.58.jpeg",
];

let flippedCards = [];
let matched = 0;

const gameBoard = document.getElementById("gameBoard");
const winMessage = document.getElementById("winMessage");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createCard(imageSrc) {
  const card = document.createElement("div");
  card.className = "card";

  const inner = document.createElement("div");
  inner.className = "card-inner";

  const front = document.createElement("div");
  front.className = "card-front";

  const back = document.createElement("div");
  back.className = "card-back";

  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = "Memory pic";

  back.appendChild(img);

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);

  card.addEventListener("click", () => {
    if (card.classList.contains("flip") || flippedCards.length === 2) return;

    card.classList.add("flip");
    flippedCards.push({ card, imageSrc });

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 800);
    }
  });

  return card;
}

function checkMatch() {
  const [first, second] = flippedCards;
  if (first.imageSrc === second.imageSrc) {
    matched += 2;
    if (matched === cardImages.length) {
      showWinMessage();
      triggerConfetti();
    }
  } else {
    first.card.classList.remove("flip");
    second.card.classList.remove("flip");
  }
  flippedCards = [];
}

function showWinMessage() {
  winMessage.innerHTML = `
    🎉 You did it, you sneaky genius!<br>
    I love you more than fries. That says A LOT.<br><br>
    <button onclick="restartGame()" style="margin-top: 1rem; padding: 0.5rem 1rem; cursor: pointer; font-family: 'Schoolbell', cursive;">🔁 Play Again?</button>
  `;
  winMessage.classList.remove("hidden");
}

function restartGame() {
  gameBoard.innerHTML = "";
  winMessage.classList.add("hidden");
  matched = 0;
  flippedCards = [];
  initGame();
  document.querySelector("#secretSurprise").style.display = "none";
}

function initGame() {
  const shuffled = shuffle([...cardImages]);
  shuffled.forEach(image => {
    gameBoard.appendChild(createCard(image));
  });
}

function triggerConfetti() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
  }
}

// Smooth scroll to surprise message when link clicked
document.addEventListener("click", (e) => {
  if (e.target.matches("a[href='#secretSurprise']")) {
    e.preventDefault();
    const surprise = document.querySelector("#secretSurprise");
    surprise.style.display = "block";
    surprise.scrollIntoView({ behavior: "smooth" });
  }
});

initGame();


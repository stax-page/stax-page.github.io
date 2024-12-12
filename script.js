// Sticky Header Scroll Effect
const navbar = document.querySelector('header nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Scroll-to-Top Button
const scrollTopButton = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Carousel Functionality
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
function showCarouselItem(index) {
  carouselItems.forEach((item, i) => {
    item.style.display = i === index ? 'block' : 'none';
  });
}
function nextCarouselItem() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showCarouselItem(currentIndex);
}
setInterval(nextCarouselItem, 5000); // Auto-advance carousel every 5 seconds

// Form Validation
document.querySelector('form').addEventListener('submit', (e) => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    e.preventDefault();
    alert('All fields are required!');
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    e.preventDefault();
    alert('Please enter a valid email.');
  }
});

// Filter Leaderboard
const filterInput = document.getElementById("filter-input");

if (filterInput) {
  filterInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const rows = document.querySelectorAll(".leaderboard-table tbody tr");
    rows.forEach((row) => {
      const username = row.cells[1].textContent.toLowerCase();
      row.style.display = username.includes(query) ? "" : "none";
    });
  });
}

// Real-Time Prize Pool Update
const prizePoolElements = document.querySelectorAll(".prize-pool .highlight");

if (prizePoolElements.length) {
  setInterval(() => {
    prizePoolElements.forEach((element) => {
      const currentAmount = parseInt(element.textContent.replace(/[$,]/g, ""));
      const newAmount = currentAmount + Math.floor(Math.random() * 100);
      element.textContent = `$${newAmount.toLocaleString()}`;
    });
  }, 5000);
}

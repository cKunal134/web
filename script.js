const products = [
  { name: "3+1 Cable", image: "images/CCTV.jpg" },
  { name: "4K Network Video Recorder", image: "images/CPPLUS.jpg" },
  { name: "IP Camera", image: "images/CPUNP.jpg" },
  { name: "HD Camera", image: "images/CPGPC.jpg" },
  { name: "WiFi Camera", image: "images/CPV4.jpg" },
];

const sensors = [
  { name: "Metal Sensor", image: "images/Sensor1.jpg" },
  { name: "Smoke Detector", image: "images/Sensor4.jpg" },
  { name: "Gas Leak Sensor", image: "images/Sensor5.jpg" },
];

const biometrics = [
  { name: "Attendance Machine", image: "images/finger.jpg" },
  { name: "Video Door Phone", image: "images/face.jpg" },
  { name: "Fingerprint Door Lock", image: "images/gate.jpg" },
];



const entrance = [
  { name: "Boom Barrier", image: "images/boombarrier.jpg" },
  { name: "Ticket Dispensor", image: "images/ticket3.jpg" },
  { name: "Long Range Distance Reader", image: "images/distance2.jpg" },
];

const peripherals = [
  { name: "Keyboard", image: "images/keyboard.jpg" },
  { name: "Adapter", image: "images/adapter.jpg" },
  { name: "Monitor", image: "images/monitor.jpg" },
  { name: "Mouse", image: "images/mouse.jpg" },
  { name: "CPU", image: "images/cpu.jpg" },
];

// Carousel configuration: data + selector for each section
const carouselConfigs = [
  { items: products, selector: '.product-carousel-grid' },
  { items: sensors, selector: '.sensor-carousel-grid' },
  { items: biometrics, selector: '.biometrics-carousel-grid' },
  { items: entrance, selector: '.entrance-carousel-grid' },
  { items: peripherals, selector: '.peripheral-carousel-grid' },
];

// Render and animate each carousel
carouselConfigs.forEach(config => {
  const grid = document.querySelector(config.selector);
  if (!grid) return; // Skip if container not found

  grid.innerHTML = '';

  const carouselWrapper = document.createElement('div');
  carouselWrapper.className = 'product-carousel-wrapper';

  const carousel = document.createElement('div');
  carousel.className = 'product-carousel';

  // Add images and names to carousel (twice for seamless looping)
  [...config.items, ...config.items].forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;

    const name = document.createElement('div');
    name.className = 'product-name';
    name.textContent = item.name;

    card.appendChild(img);
    card.appendChild(name);
    carousel.appendChild(card);
  });

  carouselWrapper.appendChild(carousel);
  grid.appendChild(carouselWrapper);

  // Carousel logic (continuous loop)
  let position = 0;
  // Wait for images to load to get correct width
  setTimeout(() => {
    const card = carousel.querySelector('.product-card');
    if (!card) return;
    const cardWidth = card.offsetWidth + 24; // 24px margin (12px each side)
    const total = config.items.length;
    const totalWidth = cardWidth * total;

    function animateCarousel() {
      position -= 1; // Move 1px per frame
      if (Math.abs(position) >= totalWidth) {
        position = 0; // Reset to start for seamless loop
      }
      carousel.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animateCarousel);
    }

    animateCarousel();
  }, 100); // Delay to ensure images are loaded
});

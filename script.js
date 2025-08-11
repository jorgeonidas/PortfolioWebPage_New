const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
const toggle = document.querySelector('.nav__toggle'); const menu = document.getElementById('menu');
if (toggle && menu){
  toggle.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
// Ejemplo: tracking opcional (puedes añadir Google Analytics aquí)

/* --- Lógica del Modal de Proyectos --- */

// 1. Datos de los proyectos
// Guardamos la información detallada de cada proyecto en un objeto para tenerla organizada.
const projectData = {
  'idle-sushi': {
    title: 'Idle Sushi 24/7 (2024)',
    screenshots: [
      'assets/IdleSushi.png',
      'assets/IdleSushi.png',
      'assets/IdleSushi.png'
    ],
    description: `
      <p>Idle mobile game where players manage a sushi restaurant and automate income.</p>
      <p><strong>Platform(s):</strong> Android, iOS</p>
      <p><strong>My Role:</strong> Gameplay & UI Programmer</p>
      <strong>Contributions:</strong>
      <ul>
        <li>Developed core gameplay systems, including income loops, upgrade mechanics, and player progression balancing.</li>
        <li>Implemented bot AI behaviors to simulate customer actions and queue management.</li>
        <li>Integrated UI/UX based on Figma designs, using Unity uGUI and DOTween to deliver smooth user interactions and transitions.</li>
        <li>Set up rewarded ads and in-app purchase systems using Unity Ads and Unity IAP to support monetization strategies.</li>
        <li>Designed and implemented the interactive restaurant layout system using a grid-based structure, allowing players to place and upgrade purchasable tiles.</li>
        <li>Imported and configured 3D character models and animations, ensuring proper integration with game logic and events.</li>
      </ul>
    `,
    actionsHTML: `
      <a class="btn btn--sm" href="#" target="_blank" rel="noopener">Google Play</a>
      <a class="btn btn--sm btn--ghost" href="#" target="_blank" rel="noopener">Video</a>
      <a class="btn btn--sm btn--ghost" href="#" target="_blank" rel="noopener">GitHub</a>
    `
  },
  'era-of-war': {
    title: 'Era of War (2024)',
    screenshots: [
      'assets/EraOfWar.png',
      'assets/EraOfWar.png',
      'assets/EraOfWar.png'
    ],
    description: `
      <p>Strategy auto-battler where players build armies and progress through historical eras.</p>
      <p><strong>Platform(s):</strong> Android, iOS</p>
      <p><strong>My Role:</strong> Gameplay Programmer</p>
      <strong>Contributions:</strong>
      <ul>
        <li>Developed the core combat system, including unit stats, abilities, and targeting logic.</li>
        <li>Implemented the era progression system, unlocking new units and technologies.</li>
        <li>Integrated rewarded ads and an in-app purchase store for monetization.</li>
        <li>Worked on performance optimization to ensure smooth battles with many units on screen.</li>
      </ul>
    `,
    actionsHTML: `
      <a class="btn btn--sm" href="#" target="_blank" rel="noopener">Google Play</a>
      <a class="btn btn--sm btn--ghost" href="#" target="_blank" rel="noopener">Video</a>
      <a class="btn btn--sm btn--ghost" href="#" target="_blank" rel="noopener">GitHub</a>
    `
  },
  'forward-assault': {
    title: 'Forward Assault (2023)',
    screenshots: [
      'assets/ForwardAssault.png',
      'assets/ForwardAssault.png',
      'assets/ForwardAssault.png'
    ],
    description: `
      <p>Competitive first-person shooter with a focus on tactical gameplay.</p>
      <p><strong>Platform(s):</strong> Android, iOS</p>
      <p><strong>My Role:</strong> Systems & UI Programmer</p>
      <strong>Contributions:</strong>
      <ul>
        <li>Implemented a complete Battle Pass system with free and premium reward tracks.</li>
        <li>Developed the weapon integration pipeline for adding new firearms and skins.</li>
        <li>Integrated FMOD for dynamic and immersive audio experiences.</li>
        <li>Refactored UI screens for better performance and user experience.</li>
        <li>Assisted in debugging networking issues related to player synchronization.</li>
      </ul>
    `,
    actionsHTML: `
      <a class="btn btn--sm" href="#" target="_blank" rel="noopener">App Store</a>
      <a class="btn btn--sm btn--ghost" href="#" target="_blank" rel="noopener">Video</a>
    `
  },
  'firefront': {
    title: 'Firefront (Alpha, 2022)',
    screenshots: [
      'assets/Firefront.jpg',
      'assets/Firefront.jpg',
      'assets/Firefront.jpg'
    ],
    description: `
      <p>Large-scale multiplayer FPS built with Photon PUN 2, supporting up to 40 players on mobile devices.</p>
      <p><strong>Platform(s):</strong> Mobile (Android/iOS)</p>
      <p><strong>My Role:</strong> Lead Gameplay & Network Programmer</p>
      <strong>Contributions:</strong>
      <ul>
        <li>Designed and implemented the core networking architecture using Photon PUN 2.</li>
        <li>Developed vehicle physics and synchronized vehicle states across the network.</li>
        <li>Created systems for weapon handling, ballistics, and player abilities.</li>
        <li>Worked on optimizing performance for large maps and high player counts on mobile.</li>
      </ul>
    `,
    actionsHTML: `
      <a class="btn btn--sm btn--ghost" href="#" target="_blank" rel="noopener">Video</a>
    `
  },
  'darkzone': {
    title: 'Darkzone: Idle RPG (2021)',
    screenshots: [
      'assets/Darkzone.jpeg',
      'assets/Darkzone.jpeg',
      'assets/Darkzone.jpeg'
    ],
    description: `
      <p>A 2D idle RPG with deep progression and asynchronous multiplayer features.</p>
      <p><strong>Platform(s):</strong> Android, iOS</p>
      <p><strong>My Role:</strong> Full-Stack Unity Developer</p>
      <strong>Contributions:</strong>
      <ul>
        <li>Developed AI systems for party members and enemy behaviors.</li>
        <li>Implemented complex progression systems, including skill trees, gear, and crafting.</li>
        <li>Built the UI for inventory, character stats, and social features.</li>
        <li>Integrated a backend service for player accounts and asynchronous PvP battles.</li>
      </ul>
    `,
    actionsHTML: `
      <a class="btn btn--sm btn--ghost" href="#" target="_blank" rel="noopener">Video</a>
    `
  },
};

// 2. Seleccionar elementos del DOM
const projectCards = document.querySelectorAll('.card[data-project]');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalGallery = document.getElementById('modal-gallery');
const modalContent = document.getElementById('modal-content');
const modalFooter = document.getElementById('modal-footer');
const closeModalBtn = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.modal__overlay');

// 3. Función para abrir el modal
function openModal(projectKey) {
  const project = projectData[projectKey];
  const card = document.querySelector(`.card[data-project="${projectKey}"]`);
  if (!project || !card) return;

  // Limpiar contenido anterior
  modalGallery.innerHTML = '';

  // Poblar la galería de screenshots
  if (project.screenshots && project.screenshots.length > 0) {
    project.screenshots.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${project.title} screenshot`;
      img.loading = 'lazy';
      modalGallery.appendChild(img);
    });
  }

  modalTitle.textContent = project.title;
  modalContent.innerHTML = project.description;
  modalFooter.innerHTML = project.actionsHTML || ''; // Usamos los datos del objeto
  
  modal.classList.add('is-open');
  document.body.classList.add('modal-open'); // Evita el scroll del fondo
}

// 4. Función para cerrar el modal
function closeModal() {
  modal.classList.remove('is-open');
  document.body.classList.remove('modal-open');
}

// 5. Añadir Event Listeners
projectCards.forEach(card => card.addEventListener('click', () => openModal(card.dataset.project)));
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

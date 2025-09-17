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
      'assets/IdleSushi1.jpg',
      'assets/IdleSushi2.jpg',
      'assets/IdleSushi3.jpg'
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
      <a class="btn btn--sm" href="https://play.google.com/store/apps/details?id=com.blayzegames.idlesushi" target="_blank" rel="noopener">Google Play</a>
    `/*
          <a class="btn btn--sm btn--ghost" href="#" target="_blank" rel="noopener">Video</a>
      <a class="btn btn--sm btn--ghost" href="#" target="_blank" rel="noopener">GitHub</a>
     */
  },
  'era-of-war': {
    title: 'Era of War (2024)',
    screenshots: [
      'assets/EraOfWar1.png',
      'assets/EraOfWar2.jpg',
      'assets/EraOfWar3.png'
    ],
    description: `
      <p>Auto-battler strategy game where players face off against AI-controlled armies across iconic historical eras.</p>
      <p><strong>Platform(s):</strong> Android, iOS</p>
      <p><strong>My Role:</strong> Gameplay & UI Programmer</p>
      <strong>Contributions:</strong>
      <ul>
        <li>Developed combat systems including player abilities, skill activation logic, cooldown handling, and animation syncing.</li>
        <li>Implemented dynamic unit spawning based on unit type, battle stage, and historical theme.</li>
        <li>Designed and programmed the game’s progression system, allowing players to advance through multiple eras.</li>
        <li>Built upgrade and unlock systems for units and player abilities, supporting stat scaling and tactical depth.</li>
        <li>Integrated rewarded ads into core gameplay, enabling players to access free upgrades and extra resources.</li>
        <li>Created an in-game store using Unity IAP where players can purchase in-game currency.</li>
        <li>Contributed to UI and gameplay flows, enhancing clarity and feedback within the auto-battler loop.</li>
      </ul>
    `,
    actionsHTML: `
      <a class="btn btn--sm" href="https://play.google.com/store/apps/details?id=com.blayzegames.defendyourcastle" target="_blank" rel="noopener">Google Play</a>
    `
  },
  'forward-assault': {
    title: 'Forward Assault (2023)',
    screenshots: [
      'assets/FASC1.jpg',
      'assets/FACS2.jpg',
      'assets/FASC3.jpg'
    ],
    description: `
      <p>Competitive first-person shooter featuring multiple game modes, including bomb defusal and team deathmatch.</p>
      <p><strong>Platform(s):</strong> Android, iOS, Web (CrazyGames)</p>
      <p><strong>My Role:</strong> UI/Systems Programmer</p>
      <strong>Contributions:</strong>
      <ul>
        <li>Implemented key components of the battle pass system, including UI, backend integration, and monetization logic for premium tier purchases.</li>
        <li>Helped troubleshoot and resolve gameplay-related bugs across different game modes to improve stability and player experience.</li>
      </ul>
    `,
    actionsHTML: `
      <a class="btn btn--sm" href="https://play.google.com/store/apps/details?id=com.blayzegames.newfps" target="_blank" rel="noopener">Google Play</a>
    `
  },
  'firefront': {
    title: 'Firefront (Closed Alpha, 2022)',
    screenshots: [
      'assets/Firefront1.jpg',
      'assets/Firefront2.jpg',
      'assets/Firefront3.jpg'
    ],
    description: `
      <p>Multiplayer FPS where two teams compete for control over strategic objectives across large-scale maps featuring vehicles and a diverse arsenal of weapons.</p>
      <p><strong>Platform(s):</strong> Android (Closed Alpha)</p>
      <p><strong>My Role:</strong> Gameplay & UI Programmer</p>
      <strong>Contributions:</strong>
      <ul>
        <li>Implemented first and third-person character animation systems using blend trees and inverse kinematics to support fluid transitions and responsive controls.</li>
        <li>Integrated new weapons by assembling 3D models, sound effects, and animations through the studio’s proprietary pipeline.</li>
        <li>Crafted spatial and adaptive audio systems using FMOD to deliver immersive and reactive combat feedback.</li>
        <li>Developed and optimized UI components for menus and in-game HUD, ensuring clarity and responsiveness on mobile devices.</li>
        <li>Contributed to multiplayer systems including team logic, objective zone control, and networked object synchronization.</li>
        <li>Assisted in vehicle mechanics and bot AI behavior across both online and offline gameplay modes.</li>
      </ul>
    `,
    actionsHTML: `
      <a class="btn btn--sm btn--ghost" href="https://www.youtube.com/watch?v=lcwsBb1azbs" target="_blank" rel="noopener">Video</a>
    `
  },
  'darkzone': {
    title: 'Darkzone (2021)',
    screenshots: [
      'assets/Darkzone1.jpg',
      'assets/Darkzone2.jpg',
      'assets/Darkzone3.jpg'
    ],
    description: `
      <p>Idle RPG where players assemble a team of heroes to complete missions and progress through a story-driven campaign, featuring social features and asynchronous multiplayer elements.</p>
      <p><strong>Platform(s):</strong> Android, iOS (Delisted)</p>
      <p><strong>My Role:</strong> Full Stack Unity Developer</p>
      <strong>Contributions:</strong>
      <ul>
        <li>Integrated character models and animations, and implemented AI behaviors for both player-controlled heroes and enemy units.</li>
        <li>Developed core gameplay systems including abilities, character leveling, inventory management, and stat-based item upgrades.</li>
        <li>Built user interfaces for the main menu and in-game HUD, focusing on usability and clean layout for idle progression tracking.</li>
        <li>Implemented asynchronous multiplayer via socket-based communication, including matchmaking and a real-time chat system.</li>
        <li>Developed backend integration for user accounts, enabling login, data persistence, and cross-session progress syncing.</li>
      </ul>
    `,
    actionsHTML: `
      <a class="btn btn--sm btn--ghost" href="https://www.youtube.com/watch?v=DG6gnsJbAXI" target="_blank" rel="noopener">Video</a>
    `
  },
  // --- Ejemplo de Proyecto Personal ---
  'cyber-rider': {
    title: 'Cyber Rider (2025)',
    screenshots: [
      'assets/CyberRiderCollision.jpg',
      'assets/CyberRiderPaintShop.jpg'
    ],
    description: `
      <p>Endless runner game set in a cyberpunk world, where the player rides a motorcycle, dodging obstacles, collecting coins, and activating power-ups to reach the longest possible distance.</p>
      <p><strong>Genre:</strong> Endless Runner</p>
      <p><strong>Platform(s):</strong> WebGL (CrazyGames)</p>
      <strong>Key Features:</strong>
      <ul>
        <li>Vehicle controls with collision detection.</li>
        <li>Progression and scoring system.</li>
        <li>Procedural obstacle and environment spawning using Object Pooling for optimized performance.</li>
        <li>In-game coin shop where players can purchase cosmetic items.</li>
      </ul>
    `,
    actionsHTML: `
      <a class="btn btn--sm" href="https://play.unity.com/en/games/b04564f5-e804-47d6-be58-1bd9a1677037/cyber-rider" target="_blank" rel="noopener">Unity Play</a>
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

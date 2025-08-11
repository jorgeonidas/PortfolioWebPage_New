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
    `
  },
  'era-of-war': {
    title: 'Era of War (2024)',
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
    `
  },
  'forward-assault': {
    title: 'Forward Assault (2023)',
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
    `
  },
  'firefront': {
    title: 'Forward Assault (2023)',
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
    `
  },
  'darkzone': {
    title: 'Forward Assault (2023)',
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
    `
  },
  // ... puedes añadir los datos de 'firefront' y 'darkzone' aquí si quieres.
};

// 2. Seleccionar elementos del DOM
const projectCards = document.querySelectorAll('.card[data-project]');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const modalFooter = document.getElementById('modal-footer');
const closeModalBtn = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.modal__overlay');

// 3. Función para abrir el modal
function openModal(projectKey) {
  const project = projectData[projectKey];
  const card = document.querySelector(`.card[data-project="${projectKey}"]`);
  if (!project || !card) return;

  modalTitle.textContent = project.title;
  modalContent.innerHTML = project.description;
  modalFooter.innerHTML = card.querySelector('.card__actions').innerHTML;
  
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

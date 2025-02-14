import { teamMembers } from "./team-members.js";


AOS.init();

function updateFavicon() {
    const favicon = document.getElementById('favicon');
    
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (isDarkMode) {
      favicon.href = '../assets/icons/desk-icon-white.png';
    } else {
      favicon.href = '../assets/icons/desk-icon-dark.png';
    }
  }


window.addEventListener('load', updateFavicon);

const membersContainer = document.getElementById("members");

teamMembers.forEach(member => {
  const card = `
    <div class="card aos-init" data-aos="fade-right" data-aos-duration=3000 style="width: 18rem;">
      <img src="${member.img}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${member.name}</h5>
        <p class="card-text">${member.role}</p>
      </div>
    </div>`;
  membersContainer.innerHTML += card;
});
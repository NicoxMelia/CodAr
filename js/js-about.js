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
    <br>
    <div id="${member.nick}-box" class="row bg-white row-sombr" data-aos="fade-right" data-aos-duration="3000">
        <div class="col-sm-auto">
            <img src="${member.img}" class="person-pic">
        </div>
        <div class="col m-4 align-content-center">
            <p class="lead">${member.name + ": " + member.role}</p>
        </div>
    </div>
    <br>`;
  membersContainer.innerHTML += card;
});
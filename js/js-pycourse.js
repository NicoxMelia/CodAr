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
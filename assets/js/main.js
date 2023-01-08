// check for saved 'theme' in localStorage
let theme = localStorage.getItem('theme'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const setTheme = (theme) => {
  if (theme !== 'light') {
      document.body.classList.add('darkmode');
      localStorage.setItem('theme', 'dark');
  } else {  
      document.body.classList.remove('darkmode');
      localStorage.setItem('theme', 'light');
  }
}

// When someone clicks the darkModeToggle button
darkModeToggle.addEventListener('click', () => {
  // get theme from localStorage
  theme = localStorage.getItem('theme'); 

  if (theme !== 'dark') {
    setTheme('dark');
  } else {  
    setTheme('light'); 
  }
});

window.addEventListener('scroll', handleScroll);

const navBar = document.querySelector('.green');

function handleScroll() {
  if (window.scrollY === 0) {
    navBar.classList.remove('aqua');
  } else if (window.scrollY !== 0) {
    navBar.classList.add('aqua');
  }
}
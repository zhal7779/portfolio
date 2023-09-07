//Header에 페이지 스크롤시 다크 스타일로 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > headerHeight) {
    header.classList.add('header-dark');
  } else {
    header.classList.remove('header-dark');
  }
});

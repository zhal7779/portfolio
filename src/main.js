//Header 스크롤시 다크 스타일로 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header-dark');
  } else {
    header.classList.remove('header-dark');
  }
});

//Home 섹션 스크롤시 투명도 적용
const homeContainer = document.querySelector('.home-container');
const homeContainerHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeContainerHeight;
});

//home 화면일 경우 화살표 아이콘 숨기기
const arrowBtn = document.querySelector('.arrow-btn');

document.addEventListener('scroll', () => {
  if (homeContainerHeight / 2 < window.scrollY) {
    arrowBtn.style.opacity = 1;
  } else {
    arrowBtn.style.opacity = 0;
  }
});

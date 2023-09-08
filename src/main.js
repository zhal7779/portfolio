//Header 스크롤시 다크 스타일로 적용
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

//Home 섹션 스크롤시 투명도 적용
const homeContainer = document.querySelector('.home-container');
const homeContainerHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  console.log(1 - scrollY / homeContainerHeight);
  homeContainer.style.opacity = 1 - scrollY / homeContainerHeight;
});

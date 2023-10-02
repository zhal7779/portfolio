'use strict';

//Header 스크롤시 다크 스타일로 적용
const header = document.querySelector('.header');
const menuItems = document.querySelectorAll('.header-menu-item');

const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header-dark');
    menuItems.forEach((menuItem) => {
      menuItem.classList.add('header-dark');
    });
  } else {
    header.classList.remove('header-dark');
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove('header-dark');
    });
  }
});

// Navbar 토글 버튼 클릭시 메뉴 보임 처리
const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.header-menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

//모바일 Navbar 메뉴 클릭시 닫힘 처리
menu.addEventListener('click', () => {
  menu.classList.remove('open');
});

//Home 섹션 스크롤시 투명도 적용
const homeContainer = document.querySelector('.home-container');
const homeContainerHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeContainerHeight;
});

//Home 섹션의 1/2 길이보다 적을 경우 화살표 숨기기
const arrowBtn = document.querySelector('.arrow-btn');

document.addEventListener('scroll', () => {
  if (homeContainerHeight / 2 < window.scrollY) {
    arrowBtn.style.opacity = 1;
  } else {
    arrowBtn.style.opacity = 0;
  }
});

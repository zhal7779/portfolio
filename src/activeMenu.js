'use strict';
// 스크롤시 섹션id와 동일한 메뉴 활성화
const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#projects',
  '#otherExperience',
  '#contact',
];
const MenuItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);

const menuIndexes = new Array(sectionIds.length).fill(false);

const observerOptions = {
  threshold: [0, 0.98],
  rootMargin: '-30% 0px 0px 0px',
};
const observerCallback = (entries) => {
  let lastMenu;

  entries.forEach((entry) => {
    const currentId = entry.target.id;
    const currentIndexes = sectionIds.indexOf(`#${currentId}`);
    menuIndexes[currentIndexes] = entry.isIntersecting;
    lastMenu =
      currentIndexes === sectionIds.length - 1 && entry.intersectionRatio > 0.9;
  });

  const currentIndex = lastMenu
    ? sectionIds.length - 1
    : menuIndexes.indexOf(true);

  selectedMenu(MenuItems, currentIndex);
};

function selectedMenu(MenuItems, currentIndex) {
  MenuItems.forEach((menuItem, index) => {
    if (index !== currentIndex) {
      menuItem.classList.remove('active');
    }
  });
  MenuItems[currentIndex].classList.add('active');
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sectionIds.forEach((id) => observer.observe(document.querySelector(id)));

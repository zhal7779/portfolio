'use strict';
// slide 화면 너비 구하기
const slideContent = document.querySelector('.slide-items');
let slideContentWidth = slideContent.clientWidth;

// 브라우저 화면이 변경될때 마다 slide 화면의 너비를 변경 해줌
window.addEventListener('resize', () => {
  slideContentWidth = slideContent.clientWidth;
});

// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector('.slide-prev-btn');
const nextBtn = document.querySelector('.slide-next-btn');

//슬라이드할 아이템들의 갯수 구하기
const slideItems = document.querySelectorAll('.slide-item');
const maxSlideLength = slideItems.length;

// 버튼을 클릭할때 마다 현재의 슬라이드 위치를 알려주는 변수
let currentSlideItem = 1;

//페이지네이션 생성 함수
function createPagination() {
  const pagination = document.querySelector('.slide-pagination');
  pagination.innerHTML = '';
  for (let i = 0; i < maxSlideLength; i++) {
    pagination.innerHTML += `<li${i === 0 ? ' class="active"' : ''}>•</li>`;
  }
  //생성한 페이지네이션을 선택
  const paginationItems = document.querySelectorAll('.slide-pagination > li');
  return paginationItems;
}

//무한 슬라이드에 필요한 아이템을 복사하고 초기화하는 함수
function initializeSlideItems() {
  const firstCloneItem = slideContent.firstElementChild.cloneNode(true);
  const lastCloneItem = slideContent.lastElementChild.cloneNode(true);
  slideContent.appendChild(firstCloneItem);
  slideContent.prepend(lastCloneItem);

  //추가한 슬라이드 아이템들 다시 전체 선택
  const newSlideItems = document.querySelectorAll('.slide-item');
  const newMaxSideCount = newSlideItems.length;
  return { newSlideItems, newMaxSideCount };
}

const paginationItems = createPagination();

const { newSlideItems, newMaxSideCount } = initializeSlideItems();

//첫번째, 마지막 슬라이드 아이템을 추가해주었기 때문에 슬라이드 초기페이지를 설정해줌
let offset = slideContentWidth * currentSlideItem;
newSlideItems.forEach((slideItem) => {
  slideItem.setAttribute('style', `left: ${-offset}px`);
});

// 다음 버튼 누를 경우 다음 슬라이드로 이동
nextBtn.addEventListener('click', () => {
  currentSlideItem++;
  if (currentSlideItem <= maxSlideLength) {
    const offset = slideContentWidth * currentSlideItem;
    moveSlideItem(400, offset);
    activePagination('arrow');
  } else {
    currentSlideItem = 0;
    let offset = slideContentWidth * currentSlideItem;
    moveSlideItem(0, offset);
    currentSlideItem++;
    offset = slideContentWidth * currentSlideItem;
    setTimeout(() => {
      moveSlideItem(400, offset);
    }, 0);
    activePagination('arrow');
  }
});

// 이전 버튼 누를 경우 이전 슬라이드를 이동
prevBtn.addEventListener('click', () => {
  currentSlideItem--;
  if (currentSlideItem > 0) {
    const offset = slideContentWidth * currentSlideItem;
    moveSlideItem(400, offset);
    activePagination('arrow');
  } else {
    currentSlideItem = newMaxSideCount - 1;
    let offset = slideContentWidth * currentSlideItem;
    moveSlideItem(0, offset);
    currentSlideItem--;
    offset = slideContentWidth * currentSlideItem;
    setTimeout(() => {
      moveSlideItem(400, offset);
    }, 0);
    activePagination('arrow');
  }
});

// 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
for (let i = 0; i < maxSlideLength; i++) {
  paginationItems[i].addEventListener('click', () => {
    currentSlideItem = i;
    let offset = slideContentWidth * (currentSlideItem + 1);
    moveSlideItem(400, offset);
    activePagination('circle');
  });
}

//슬라이드 화면 이동 함수
function moveSlideItem(time, offset) {
  newSlideItems.forEach((slideItem) => {
    slideItem.setAttribute(
      'style',
      `transition: ${time}ms ease-out; left: ${-offset}px`
    );
  });
}

//페이지네이션 활성화 함수
function activePagination(type) {
  paginationItems.forEach((page) => page.classList.remove('active'));
  paginationItems[
    type === 'arrow' ? currentSlideItem - 1 : currentSlideItem
  ].classList.add('active');
}

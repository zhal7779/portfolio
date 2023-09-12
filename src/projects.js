'use strict!';
//Projects 카테고리 필터링 기능
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (e) => {
  const category = e.target.dataset.key;

  if (category === null) return;

  //카테고리 클릭시 해당 카테고리 활성화
  ActivateClickedCategory(e.target);

  //카테고리별 필터링
  projectsContainer.classList.add('animaition');
  filterByCategory(projects, category);
  setTimeout(() => {
    projectsContainer.classList.remove('animaition');
  }, 250);
});

function ActivateClickedCategory(target) {
  const selectedCategory = document.querySelector('.category-selected');
  selectedCategory.classList.remove('category-selected');
  target.classList.add('category-selected');
}

function filterByCategory(projects, category) {
  projects.forEach((project) => {
    if (category === 'all' || category === project.dataset.value) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// 프로젝트 클릭시 프로젝트 설명 보임
const descriptionItems = document.querySelectorAll('.description-item');

projects.forEach((project) => {
  project.addEventListener('click', (e) => {
    const selectedKey = project.dataset.projectKey;
    showDescription(selectedKey);
  });
});

function showDescription(selectedKey) {
  descriptionItems.forEach((item) => {
    if (selectedKey === item.dataset.projectValue) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

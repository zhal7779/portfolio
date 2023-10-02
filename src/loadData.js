function loadData(url, element) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const container = document.getElementById(element);
      container.innerHTML = data;
    })
    .catch((error) => {
      console.error('Error loading template:', error);
    });
}

//about
loadData('html/about.html', 'about');

//skills
loadData('html/skills.html', 'skills');

//otherExperience
loadData('html/otherExperience.html', 'otherExperience');

//footer
loadData('html/footer.html', 'contact');

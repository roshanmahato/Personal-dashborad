fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    const educationList = document.getElementById('education-list');
    data.education.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      educationList.appendChild(li);
    });

    const skillsList = document.getElementById('skills-list');
    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  })
  .catch(error => console.error('Error loading data:', error));
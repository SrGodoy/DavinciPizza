const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.section');



menuItems.forEach(function(menuItem) {
  menuItem.addEventListener('click', function() {
 const sectionId = menuItem.dataset.section;
    sections.forEach(function(section) {
section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
  });
});
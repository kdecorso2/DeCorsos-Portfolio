// JavaScript to toggle the pop-out menu visibility
document.getElementById('menuTrigger').addEventListener('click', function() {
    const menu = document.getElementById('popoutMenu');
    
    // Toggle the menu by changing display and sliding in/out
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
      menu.style.right = '-33.33%'; // Slide it out
    } else {
      menu.style.display = 'block';
      menu.style.right = '0'; // Slide it in
    }
  });
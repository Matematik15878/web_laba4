let isSidebarVisible = false;

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  
  if (isMobileDevice()) {
    if (isSidebarVisible) {
      sidebar.style.right = '-50vw';
      overlay.style.display = 'none';
      document.body.style.overflowY = 'auto';
    } else {
      sidebar.style.right = '0';
      overlay.style.display = 'block';
      document.body.style.overflowY = 'hidden';
    }
  } else {
    if (isSidebarVisible) {
      sidebar.style.right = '-15vw';
      overlay.style.display = 'none';
      document.body.style.overflowY = 'auto';
    } else {
      sidebar.style.right = '0';
      overlay.style.display = 'block';
      document.body.style.overflowY = 'hidden';
    }

  }
  
  isSidebarVisible = !isSidebarVisible;
}

function isMobileDevice() {
  return window.matchMedia('(max-width: 1200px)').matches;
}

function toggleMenu() {
    const menu = document.getElementById("menu-links");
    const title = document.getElementById("title");
    
    // Toggle the menu
    menu.classList.toggle("show");
    
    // Change title text
    if (menu.classList.contains("show")) {
        title.textContent = "MPW"; // Short form when menu is shown
    } else {
        title.textContent = "My Personal Webpage"; // Full title when menu is hidden
    }
}
    

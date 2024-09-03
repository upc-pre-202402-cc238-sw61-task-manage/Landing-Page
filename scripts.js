const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

function openThemeDropdown(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('theme-dropdown-selector');
    if (dropdown.classList.contains('show')) {
        closeDropdown(dropdown);
    } else {
        openDropdown(dropdown);
    }
}

function openDropdown(dropdown) {
    setTimeout(() => {
        dropdown.classList.add('show');
    }, 0);
    dropdown.style.display = 'inline-flex';
    document.addEventListener('click', closeDropdownOnClickOutside);
}

function closeDropdown(dropdown) {
    dropdown.classList.remove('show');
    setTimeout(() => {
        dropdown.style.display = 'none';
    }, 500);
    document.removeEventListener('click', closeDropdownOnClickOutside);
}

function closeDropdownOnClickOutside(event) {
    const dropdown = document.getElementById('theme-dropdown-selector');
    if (!dropdown.contains(event.target) && dropdown.classList.contains('show')) {
        closeDropdown(dropdown);
    }
}


document.getElementById('theme-dropdown-selector').addEventListener('click', (event) => {
    event.stopPropagation();
});

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    const elements = document.querySelectorAll(".background-primary-gradient");
    elements.forEach(element => {
        element.style.backgroundPosition = 'right';
    });
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    const elements = document.querySelectorAll(".background-primary-gradient");
    elements.forEach(element => {
        element.style.backgroundPosition = 'left';
    });
};

function openSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function closeSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}
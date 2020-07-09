// Change nav at X pixels
window.onscroll = function() { scrollFunction() };

const scrollFunction = () => {
    let nav = document.getElementById("nav");
    let navLinks = document.getElementById("nav-links");
    let logo = document.getElementById("logo");

    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        navLinks.classList.add("nav-visible");
        logo.classList.add("nav-visible");
        nav.classList.add("nav-visible");
    } else {        
        nav.classList.remove("nav-visible");
        navLinks.classList.remove("nav-visible");
        logo.classList.remove("nav-visible");
        if (navLinks.style.transform === "translateY(0%)") {
            navLinks.classList.add("nav-visible");
            nav.classList.add("nav-visible");
        }
    }
}

// Open registration/login tabs on main page
const openTab = (e, tabName) => {
    let i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tab-content");
    tabLinks = document.getElementsByClassName("tab-links");
    registerTab = document.getElementById("register-tab");
    toReg = document.getElementById("toReg");

    // Set tab contents to display none
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    // Remove active class from tab links
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";

    if(e.currentTarget === toReg) {
        registerTab.classList.add("active");
    }
}

// Toggle nav bar to slide down/up
const toggleNav = () => {
    const nav = document.getElementById("nav");
    const navLinks = document.getElementById("nav-links");

    if (navLinks.style.transform === "translateY(0%)") {
        navLinks.style.transform = "translateY(-200%)";
        nav.classList.add("nav-visible");
        
    } else {
        navLinks.style.transform = "translateY(0%)";
        nav.classList.add("nav-visible");
    }
}

document.getElementById('hamburger').addEventListener('click', toggleNav)


// Change nav at X pixels
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    let i;
    let nav = document.getElementById("nav");
    let logo = document.getElementById("logo");
    let fas = document.getElementsByClassName("fas");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        for (i = 0; i < fas.length; i++) {
            fas[i].classList.add("scrolled");
        }
        nav.classList.add("scrolled");
        logo.classList.add("scrolled");
    } else {
        for (i = 0; i < fas.length; i++) {
            fas[i].classList.remove("scrolled");
        }
        nav.classList.remove("scrolled");
        logo.classList.remove("scrolled");
    }
} 


// Open registration/login tabs on main page
function openTab(e, tabName) {
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

// Open nav
function openNav() {
    var navLinks = document.getElementById("nav-links");

    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}



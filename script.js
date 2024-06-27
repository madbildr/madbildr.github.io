function LyricsFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read Lyrics";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide Lyrics";
        moreText.style.display = "inline";
    }
}

function myFunction() {
    console.log("myFunction called"); // Debugging statement
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read Lyrics";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide Lyrics";
        moreText.style.display = "inline";
    }
}

// Menu functionality
document.getElementById('menuIcon').addEventListener('click', function () {
    document.body.classList.toggle('menu-open');
});

document.addEventListener('click', function (event) {
    var isClickInsideMenu = document.getElementById('sideMenu').contains(event.target);
    var isClickInsideIcon = document.getElementById('menuIcon').contains(event.target);

    if (!isClickInsideMenu && !isClickInsideIcon) {
        document.body.classList.remove('menu-open');
    }
});

// Lazy loading for iframes
document.addEventListener("DOMContentLoaded", function () {
    let lazyIframes = document.querySelectorAll('iframe[data-src]');

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let iframe = entry.target;
                iframe.src = iframe.getAttribute('data-src');
                iframe.removeAttribute('data-src');
                observer.unobserve(iframe);
            }
        });
    });

    lazyIframes.forEach(iframe => {
        observer.observe(iframe);
    });
});


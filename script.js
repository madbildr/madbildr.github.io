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

    if (dots.style.display === "...") {
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
// Update JavaScript to target each song section within a year
const yearSections = document.querySelectorAll('.timeline-event');
const yearLinks = document.querySelectorAll('.year-link');

function highlightYearOnScroll() {
    let currentYear = null;

    yearSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
            // Extract year from ID (e.g., "year-2015-event-1" -> "2015")
            const year = section.id.split('-')[1];
            currentYear = year;
        }
    });

    yearLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentYear)) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightYearOnScroll);



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


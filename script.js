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


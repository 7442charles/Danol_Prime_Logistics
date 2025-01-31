document.addEventListener("DOMContentLoaded", function () {
    let lazyBgs = document.querySelectorAll(".lazy-bg");

    lazyBgs.forEach(lazyBg => {
        let fullImage = lazyBg.getAttribute("data-bg");

        // Preload the full image
        let img = new Image();
        img.src = fullImage;
        img.onload = () => {
            lazyBg.style.backgroundImage = `url('${fullImage}')`;
        };
    });
});
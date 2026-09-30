// Images used in the gallery

const images = [
    "https://images.unsplash.com/11/sky-rose.jpg",
    "https://images.unsplash.com/photo-1779781238799-7194caec2b28",
    "https://images.unsplash.com/photo-1789947998062-393d05531f04",
    "https://images.unsplash.com/photo-1790520850895-526d429f1093",
    "https://images.unsplash.com/photo-1787651501976-1692e5973ba3",
    "https://images.unsplash.com/photo-1789948731559-5d113d8744b6",
    "https://images.unsplash.com/photo-1789745261316-58a6192bae0f",
    "https://images.unsplash.com/photo-1787099812023-c9636ca620dc"
];

let currentImage = 0;

const popbox = document.getElementById("popbox");
const popupboxImage = document.getElementById("popupboxImage");


// Open Lightbox

function openPopbox(index) {

    currentImage = index;

    popupboxImage.src = images[currentImage];

    popbox.classList.add("active");
}


// Close Lightbox

function closeLPopbox() {

    popbox.classList.remove("active");
}


// Next Image

function nextImage() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    popupboxImage.src = images[currentImage];
}


// Previous Image

function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    popupboxImage.src = images[currentImage];
}


// Close popbox when clicking outside image

popbox.addEventListener("click", function(event) {

    if (event.target === popbox) {
        closepopbox();
    }

});


// Keyboard Navigation

document.addEventListener("keydown", function(event) {

    if (!popbox.classList.contains("active")) {
        return;
    }

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        previousImage();
    }

    if (event.key === "Escape") {
        closepopbox();
    }

});
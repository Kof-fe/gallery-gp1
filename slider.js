const images = ["pic.jpg", "pic1.jpg", "pic2.jpg"];
let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const background = document.createElement("div");
background.classList.add("background-container");
document.body.appendChild(background);

function changeImage(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    }
    sliderImage.style.opacity = 0;
    background.style.opacity = 0;
    
    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        background.style.backgroundImage = `url(${images[currentIndex]})`;
        
        // Add a fade-in effect
        setTimeout(() => {
            sliderImage.style.opacity = 1;
            background.style.opacity = 0.3;
        }, 100);
    }, 500);
}

prevBtn.addEventListener("click", () => {
    currentIndex--;
    changeImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex++;
    changeImage(currentIndex);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        currentIndex--;
        changeImage(currentIndex);
    } else if (event.key === "ArrowRight") {
        currentIndex++;
        changeImage(currentIndex);
    }
});

const addImageBtn = document.getElementById("addImageBtn");
const imageInput = document.getElementById("imageInput");

addImageBtn.addEventListener("click", () => {
    imageInput.click();
});

imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    // Create a new image element
    const newImage = document.createElement("img");
    newImage.src = URL.createObjectURL(file);
    newImage.alt = "New Image";

    // Add the new image to the slider
    images.push(newImage.src);
    currentIndex = images.length - 1;
    changeImage(currentIndex);
       
});


changeImage(currentIndex);


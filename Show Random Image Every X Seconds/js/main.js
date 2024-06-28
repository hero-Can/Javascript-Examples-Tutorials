let image = document.getElementById("image");
let i = 1;
// get order images
setInterval(() => {
    let value = `images/img${i}.jpg`;
    image.setAttribute("src", value);
    i++;
    if (i == 6) {
        i = 1;
    }
}, 3000);

// get random image
let image1 = document.getElementById("image1");
let images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg", "images/img6.jpg"];
setInterval(() => {
    let randomValue = Math.floor(Math.random() * images.length);
    image1.src = images[randomValue];
}, 3000);
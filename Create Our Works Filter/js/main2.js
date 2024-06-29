let switcherList = document.querySelectorAll(".switcher div");
let imgs1 = document.images;
let imgs = Array.from(document.images);

switcherList.forEach((li)=>{
    li.addEventListener("click",removeActiveClass);
    li.addEventListener("click",manageImages);
})

// remove active class from all div list
function removeActiveClass(){
    switcherList.forEach((li)=>{
        li.classList.remove("active");
    });
    //add active class
    li.classList.add("active");
}

// manage images
function manageImages(){
    imgs.forEach((img)=>{
        img.style.display= "none";
    });
    // get images by category
    // document.querySelectorAll(".gfx");
    document.querySelectorAll(this.dataset.cat).forEach((img)=>{
        img.style.display= "block";
    })

}
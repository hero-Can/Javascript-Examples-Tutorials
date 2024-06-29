let switcherList = document.querySelectorAll(".switcher div");
let imgs = document.querySelectorAll(".gallery div");
// let imgs = Array.from(document.images);
// console.log(imgs1);
// console.log(imgs);

// switcherList.forEach((li)=>{
//     li.addEventListener("click",(e)=>{
//         // remove active class from all div list
//         switcherList.forEach((li)=>{
//             li.classList.remove("active");
//         });
//         // add active class to the current
//         li.classList.add("active");
//     });
//     li.addEventListener("click",(e)=>{
//          // manage images
//          imgs.forEach((img)=>{
//             img.style.display= "none";
//         });
//          // get images by category
//         // document.querySelectorAll(".gfx");
//         document.querySelectorAll(li.dataset.cat).forEach((el)=>{
//             el.style.display= "block";
//         });
//     });
// });



switcherList.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        // remove active class from all div list
        switcherList.forEach((li)=>{
            li.classList.remove("active");
        });
        // add active class to the current
        li.classList.add("active");
        // manage images
        imgs.forEach((img)=>{
            img.style.display= "none";
        });
         // get images by category
        // document.querySelectorAll(".gfx");
        document.querySelectorAll(li.dataset.cat).forEach((el)=>{
            el.style.display= "block";
        });
    });
   
});





// switcherList.forEach((li)=>{
//     li.addEventListener("click",removeActiveClass);
//     li.addEventListener("click",manageImages);
// })

// // remove active class from all div list
// function removeActiveClass(){
//     switcherList.forEach((li)=>{
//         li.classList.remove("active");
//     });
//     //add active class
//     li.classList.add("active");
// }

// // manage images
// function manageImages(){
//     imgs.forEach((img)=>{
//         img.style.display= "none";
//     });
//     // get images by category
//     // document.querySelectorAll(".gfx");
//     document.querySelectorAll(this.dataset.cat).forEach((img)=>{
//         img.style.display= "block";
//     })

// }
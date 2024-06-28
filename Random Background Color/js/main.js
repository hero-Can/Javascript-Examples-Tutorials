let landing = document.getElementById("landing");

let arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let colorParts = [];

for (let i = 0; i < 6; i++) {
    colorParts.push(arr[Math.floor(Math.random() * arr.length)]);
}

// console.log(colorParts);

//  console.log(`#${colorParts.join("")}`);
let finalColor = `#${colorParts.join("")}`;
landing.style.backgroundColor = finalColor ;
// document.body.style.backgroundColor = finalColor ;
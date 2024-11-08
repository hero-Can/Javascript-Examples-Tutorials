let nums = [0,1,2,3,4,5,6,7,8,9];
let arr = [];
let serial = document.getElementById("serial");
let generate = document.getElementById("generate");

generate.onclick = function(){
    arr = [];
    for (let i = 0; i < 8; i++) {
        arr.push(nums[Math.floor(Math.random() * nums.length)]); 
    }
    serial.textContent = arr.join("");

};
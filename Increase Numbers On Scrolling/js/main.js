let nums = document.querySelectorAll(".nums .num");

// ::::::::::::::::::::::: First method :::::::::::::::::::::::::::

// function startCounter(el) {
//     let goal = el.dataset.goal;
//     let count = setInterval(() => {
//         el.textContent++;
//         if (el.textContent == goal) {
//             clearInterval(count);
//         }
//     }, 10);
// }
// startCounter(nums[0]);
// startCounter(nums[1]);
// startCounter(nums[2]);

// ::::::::::::::::::::::: Second method :::::::::::::::::::::::::::

// nums.forEach(function startCounter(el) {
//     let goal = el.dataset.goal;
//     let count = setInterval(() => {
//         el.textContent++;
//         if (el.textContent == goal) {
//             clearInterval(count);
//         }
//     }, 10);
// });

// ::::::::::::::::::::::: Thirt method :::::::::::::::::::::::::::

nums.forEach((num)=> startCounter(num));

function startCounter(el) {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(count);
            }
        }, 2000 / goal); // count in same time
}

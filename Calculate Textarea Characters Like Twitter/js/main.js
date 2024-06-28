let textarea = document.getElementById("text");
let count = document.getElementById("count");
let maxLenght = textarea.getAttribute("maxlength");
let rest = document.getElementById("rest");



textarea.oninput = function () {
   
    count.innerHTML =  `${this.value.length} / ${maxLenght} characters` ;
    rest.innerHTML = `characters left : ${maxLenght- this.value.length}`;
    if (this.value.length == maxLenght ) {
        textarea.style.borderColor = "red";
        this.style.outline = 'none';
    }else{
        textarea.style.borderColor = "green";
        this.style.outline = 'none';
    }
}


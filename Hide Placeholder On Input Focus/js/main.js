let text = document.getElementById("text");
console.log(text.getAttribute("placeholder"));
text.onfocus = function(){
    this.setAttribute("placeholder","");
}

text.onblur = function() {
    this.setAttribute("placeholder","username");
}


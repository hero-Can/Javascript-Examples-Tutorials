let myTitle = document.getElementById("title"),
    myContent = document.getElementById("content"),
    myTitleLive = document.getElementById("title-live"),
    myContentLive = document.getElementById("content-live");

// myTitle.onkeyup = function(){
//     myTitleLive.textContent = this.value ;
// }
// myContent.onkeyup = function(){
//     myContentLive.textContent = this.value ;
// }



// solution with function
function EditText(element,elementLive) {
    document.getElementById(element).onkeyup = function(){
        document.getElementById(elementLive).textContent = this.value ;
    };
   
};
EditText("title","title-live");

// solution with function and variables alredy declared
function EditText1(element,elementLive) {
        element.onkeyup = function(){
           elementLive.textContent = this.value ;
    };
};
EditText1(myContent,myContentLive);
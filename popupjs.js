

//Function To Display Popup
function div_show() {
    //document.getElementById('abc').style.display = "block";
    $("#abc").css("display", "block")
}
//Function to Hide Popup
function div_hide(){
    document.getElementById('abc').style.display = "none";
}
$(document.body).on("click", ".show", function(){
    div_show()
});

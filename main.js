$(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000
    });
  


/*// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";

}
*/
$("#form").click(function(){
    
    $("#golfevent").modal('hide'); //hide popup
    });


$('#watch-me').change(function(){
        if(this.checked)
            $('#show-me').show();
        else
            $('#show-me').hide();

});

$(document).ready(function () {
    var target = document.location.hash.replace("#", "");
    if (target.length) {
        if(target=="pokerForm"){
          $('#pokerForm').modal("show");
          $("<h4></h4>").text("Thank your for your submission. Please click the Payment button below to pre-pay for the tournament.").appendTo("#pokerThankYou");
        }
        else if(target=="golfForm"){
          $("#golfForm").modal("show");
          $("<h4></h4>").text("Thank your for your submission. Please click the Payment button below to pre-pay for the tournament.").appendTo("#golfThankYou");
        }
        else if(target=="TVgolfForm"){
          $("#TVgolfForm").modal("show");
          $("<h4></h4>").text("Thank your for your submission. Please click the Payment button below to pre-pay for the tournament.").appendTo("#golfThankYou");
        }
    else{}    
   
	};
});

});
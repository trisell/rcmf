$(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000
    });
  //$("#top").parallaxify();


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

$("#TVform").click(function(){
    $("#tvgolfevent").modal('hide'); //hide popup
});
$("#TVpokerform").click(function(){
    $("#tvgolfevent").modal('hide'); //hide popup
});
$('#watch-me').change(function(){
        if(this.checked)
            $('#show-me').show();
        else
            $('#show-me').hide();

});
$('#tvwatch-me').change(function(){
        if(this.checked)
            $('#tvshow-me').show();
        else
            $('#tvshow-me').hide();

});


$(document).ready(function () {
    var target = document.location.hash.replace("#", "");
    if (target.length) {
        if(target=="pokerForm"){
          $('#pokerForm').modal("show");
          $("<h4></h4>").text("Thank you for your registration. Payment will be accepted on the day of the tournament.").appendTo("#pokerThankYou");
          $("#pokersignup").hide();
          $("#pokerbutton").show();
        }

        else if(target=="golfForm"){
          $("#golfForm").modal("show");
          $("<h4></h4>").text("Thank you for your registration. Payment will be accepted on the day of the tournament.").appendTo("#golfThankYou");
          $("#golfsignup").hide();
          $("#golfbtn").show();
        }
        else if(target=="TVgolfForm"){
          $("#TVgolfForm").modal("show");
          $("<h4></h4>").text("Thank you for your registration. Payment will be accepted on the day of the tournament.").appendTo("#TVgolfThankYou");
          $("#tvgolfform").hide();
          $("#tvgolfsignup").hide();
          $("#tvgolfbtn").show();
        }
        else if(target=="TVpokerForm"){
          $('#TVpokerForm').modal("show");
          $("<h4></h4>").text("Thank you for your registration. Payment will be accepted on the day of the tournament.").appendTo("#TVpokerThankYou");
          $("#tvpokerform").hide();
          $("#tvpokersignup").hide();
          $("#tvpokerbtn").show();        
        }
    else{}    
   
	};
});

});

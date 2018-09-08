$(document).foundation();

//  Datepicker 
$(document).ready(function(){
    
    // Test if this is a mobile device
    if (typeof $.browser == 'undefined') {
        $.browser = {};
    }
    $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));    
    if ($.browser.device) {
        $('#date').attr('type', 'date');
    } else {
        var date_input=$('input[name="date"]'); //our date input has the name "date"
        var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
        date_input.datepicker({
            format: 'dd/mm/yyyy',
            container: container,
            todayHighlight: true,
            autoclose: true,
        });
     }    
 });

// Form submission

$(document).ready(function () {

  
    $("#sendform").on("click", function (event) {
    
      event.preventDefault();
      $.ajax({
        url: "https://www.enformed.io/qilsfyez",
        method: "post",
        dataType: "json",
        accepts: "application/json",
        data: $("#contact-form").serialize(),
        success: function () {
          console.log("Your form was successfully received!");
          // Show a success message here...
          
        },
        error: function () {
          console.log("Failure. Try again.");
          // Show an error message here...
          $('#contact-form').css("visibility", "hidden");
          $('#messageSent').show();
          setTimeout(function() { $('#bookingModal').foundation('close'); }, 2500);
          $('#bookingModal').on('closed.zf.reveal', function () { // this is to refresh content if resending booking
            $('#contact-form').css("visibility", "visible"); 
            $('#messageSent').hide();
          });
          
       
        }
      });
    });

  });







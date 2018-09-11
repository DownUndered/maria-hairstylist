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
        $('#date').fdatepicker({
          format: 'dd/mm/yyyy',
          disableDblClickSelection: true,
          leftArrow:'<<',
          rightArrow:'>>',
          closeIcon:'X',
          closeButton: true
        });
     }    
 });

// Form submission

$(document).ready(function () {
   
    $("#contact-form").submit("formvalid.zf.abide", function (event) {       
      
      var name = $("#name").val(); //additional validation to prevent form submission if invalid
      var phone = $("#phone").val();
      if (!(name == '' || phone == '')) { //check if required filled
        $.ajax({
          url: "https://www.enformed.io/qilsfyez",
          method: "post",
          dataType: "json",
          accepts: "application/json",
          data: $("#contact-form").serialize(),
        }); 
      
        $('#contact-form').css("visibility", "hidden");
        $('#messageSent').show();
        setTimeout(function() { $('#bookingModal').foundation('close'); }, 2500);
        $('#bookingModal').on('closed.zf.reveal', function () { // this is to refresh content if resending booking
          $('#contact-form').css("visibility", "visible"); 
          $('#messageSent').hide();
        });
        event.preventDefault();              
      }      
    });    

});







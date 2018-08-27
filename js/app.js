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


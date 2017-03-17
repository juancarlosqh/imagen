(function($){
  $(function(){

    //$('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); 
})(jQuery); 

$(document).ready(function(){
	function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
    
            reader.onload = function (e) {
                $("#fondo").attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }

	$("#fotografia").change(function(){
		readURL(this);
		$("#icono").hide();
		$("#fondo").show();
	});

	function downloadURI(uri, name) {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        link.click();
    }

	$("#descargar").click(function(){
		html2canvas($("#imagen"), {
			onrendered: function(canvas){
				var save = canvas.toDataURL("image/png");
				downloadURI("data:" + save, "Fotografia.png");
			}
		});
	});	
});
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	
}

function eventos(){

    $("#btnadd").click(function(){
        $("#div-nova-tarefa").fadeIn('slow');
    });

    $("#btncancelar").click(function(){
        $("#div-nova-tarefa").fadeOut();
    });


}


$(document).ready(function(){
    $(".sidenav").sidenav();


    eventos(); 


});

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    carregueTarefas();
}


function carregueTarefas(){

    window.banco.listar(function(registros){
        var lista = $("#lista-tarefas");
        for (var i=0;i<registros.length;i++){
            
            var item = '<li class="collection-item avatar">'
            +'<i class="material-icons circle red">insert_chart</i>'
            +'<span class="title">Tarefa</span>'
            +'<p>'+registros[i].descricao+'</p>'
            +'<a href="#!" class="secondary-content"><i class="material-icons">delete</i></a>'
            +'</li>';
        
            lista.append(item);

        }


    });

}




function eventos(){

    $("#btnadd").click(function(){
        $("#div-nova-tarefa").fadeIn('slow');
    });

    $("#btnincluir").click(function(){
        var descricao = $("#descricao").val();
        window.banco.salvar(descricao, function(resultados){
           console.log(resultados);
        });
    });


    $("#btncancelar").click(function(){
        $("#div-nova-tarefa").fadeOut();
    });


}





$(document).ready(function(){
    $(".sidenav").sidenav();


    eventos(); 
    

});

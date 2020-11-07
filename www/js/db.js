window.banco = null;


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    window.banco = new bancoDados();
    window.banco.preparar(function(db){
        console.log("Banco de dados local inicializado!");
        
    },function(erro){
        console.log("Erro inicializando o banco de dados:\n"+JSON.stringify(erro)   );
    });
}

function erroDB(){
  //  console.log('Erro inserindo no banco de dados');
}

function bancoDados() {
    return {
         bancoNome : 'tarefas.db',
         versao: '1.0', 
         db: null,
         preparar : function (ready, error) {
             if (device.platform=="browser") {
                    this.db = openDatabase(this.bancoNome, this.versao, 'App Tarefas', 5*1024*1024);
                    this.db.transaction( function (tx) { 
                        tx.executeSql('CREATE TABLE IF NOT EXISTS tarefas (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, descricao TEXT)'); 
                    });  
                } else {
                        return null; //TODO - Criar banco SQLite
                };
            },
         salvar : function(tarefa,sucesso) {
            
            this.db.transaction( function(tx){

                    tx.executeSql("INSERT INTO tarefas (descricao) values (?)",[tarefa],
                    function(tx,results){

                        sucesso(results);

                    },erroDB());

            }  );




            
         },
         excluir : function(){

         },
         consultar: function(){

         },
         listar: function(sucesso) {

             this.db.transaction( function(tx){
                tx.executeSql("SELECT * FROM tarefas",[],function(tx,registros){
                     
                    sucesso(registros.rows);

                },erroDB());


             } );


         }

         };
}


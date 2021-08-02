//Leitura de todo o meu documento HTML
$(document).ready(function(){ //Executou a leitura do nosso documento e o preparou para executar uma função
  
  //Monitorar todos os clicks em nosso elemento link "a" do HTML
  $('a').click(function(e){
    e.preventDefault()

    $('#modal-info').modal('show')

  })
})
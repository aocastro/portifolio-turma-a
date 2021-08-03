//Leitura de todo o meu documento HTML
$(document).ready(function(){ //Executou a leitura do nosso documento e o preparou para executar uma função
  
  //Monitorar todos os clicks em nosso elemento link "a" do HTML
  $('a').click(function(e){
    e.preventDefault()

    let pagina = $(this).attr('href')

    $('.modal-title').empty() 
    $('.modal-body').empty() 

    switch(pagina){
      case 'projetos': 
        $('.modal-title').append('Meus Projetos') 
        $('.modal-body').append('<p>Projetos ...........</p>') 
        break
      case 'parceiros':
        $('.modal-title').append('Meus Clientes/Parceiros') 
        $('.modal-body').append('<p>Clientes ...........</p>') 
        break
      case 'contatos':
        $('.modal-title').append('Meus Contatos') 
        $('.modal-body').append('<p>Contatos ...........</p>') 
        break
      default: alert('Página não encontrada')
    }

    $('#modal-info').modal('show')

  })
})
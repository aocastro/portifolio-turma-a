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
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-4 col-md-4">
                <img src="img/projetos.jpeg" alt="Projetos" class="img-fluid">
              </div>
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-danger">Meus Projetos</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, eos asperiores ipsam et, natus quod nihil, iusto animi saepe hic adipisci beatae deleniti. Recusandae, quo. Deserunt ratione corrupti et recusandae!</p>
              </div>
            </div>
          </div>
        `) 
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
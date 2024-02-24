const key = 'cebcd482eda57fa9a6714c1c2ba91885'





function colocarDadosnatela(dados){
    document.querySelector('.titulo-principal').innerHTML = 'Tem em ' + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('.descrição').innerHTML = dados.weather[0].description
    document.querySelector('.icone').src =  "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector('.max').innerHTML = Math.floor (dados.main.temp_max , )  +  'max: para hoje'
    document.querySelector('.min').innerHTML = Math.floor (dados.main.temp_min , )  +  'min: para hoje'
    document.querySelector('.umidade').innerHTML = dados.main.humidity + '% a Umidade'
    
    
}
cidade.value = ''

 async function buscarCidade(cidade){
   let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
   cidade + 
   "&appid=" + 
   key + 
   "&lang=pt_br" +
   "&units=metric"
   )
   .then(resposta => resposta.json()) 

    colocarDadosnatela(dados)
}

function clicarBotao(){
    const cidade = document.querySelector('.input-cidade').value

    
    buscarCidade(cidade)
   
}




const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaocurtir){
    let curtiu =false;
    botaoCurtir.addEvenListener("click", curtir);
    function curtir(){
        const contador = botaoCurtir.querySelector ("span");
        if (curtiu===false){
            contador.textContent++;
            curtiu= true;
        
        } else{
            contador.textContent--;
            curtiu= false;
    }
}
});


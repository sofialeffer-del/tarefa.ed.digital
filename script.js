const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function(botaoCurtir) {

    let curtiu = false;

    botaoCurtir.addEventListener("click", function() {

        const contador = botaoCurtir.querySelector("span");

        if (curtiu === false) {

            contador.textContent = Number(contador.textContent) + 1;
            curtiu = true;
            botaoCurtir.setAttribute("aria-pressed", "true");

        } else {

            contador.textContent = Number(contador.textContent) - 1;
            curtiu = false;
            botaoCurtir.setAttribute("aria-pressed", "false");

        }

    });

});

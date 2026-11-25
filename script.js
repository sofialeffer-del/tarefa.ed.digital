const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function (botaoCurtir) {
    let curtiu = false;

    botaoCurtir.addEventListener("click", function () {
        const contador = botaoCurtir.querySelector("span");

        if (!curtiu) {
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

const btnTema = document.querySelector(".btn-tema");

// Verifica se o usuário já tinha ativado o tema escuro anteriormente
if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("tema-escuro");
}

btnTema.addEventListener("click", mudarTema);

function mudarTema() {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
}
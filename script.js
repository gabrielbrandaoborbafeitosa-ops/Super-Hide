function explicar() {
    alert('Esconda sua bola azul, depois de esconder, outra pessoa deve clicar DO LADO do lugar que acha. Quando achar, aparecerá um aviso falando que você achou. Você pode se esconder em qualquer lugar, não é obrigatório ser nas bolas. (BETA E ALFA)')
}
//mover a bola
const player = document.getElementById("player");

let x = 0;
let y = 0;
const velocidade = 5;

player.style.position = "absolute";

const teclas = {};

document.addEventListener("keydown", (e) => {
    teclas[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (e) => {
    teclas[e.key.toLowerCase()] = false;
});

function mover() {
    if (teclas["arrowup"] || teclas["w"]) {
        y -= velocidade;
    }

    if (teclas["arrowdown"] || teclas["s"]) {
        y += velocidade;
    }

    if (teclas["arrowleft"] || teclas["a"]) {
        x -= velocidade;
    }

    if (teclas["arrowright"] || teclas["d"]) {
        x += velocidade;
    }

    player.style.left = x + "px";
    player.style.top = y + "px";

    requestAnimationFrame(mover);
}

mover();




function achar() {
    alert('Você achou!')
}
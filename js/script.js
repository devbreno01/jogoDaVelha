let x = document.querySelector(".x")
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let massageContainer = document.querySelector("#massage");
let massageText = document.querySelector("#massage p");
let secondPlayer;

// contador de jogadas 
let player1 = 0;
let player2 = 0;

function verificarElemento(player1,player2){
let elemento;
if(player1 === player2){ // Sabendo se player vai ser igual ao player 2 para começar 
    // x
    elemento = x;
}else {
    // o
    elemento = o;
}
return elemento;
}

function checarVitoria(){
    let bloco1 = document.getElementById("block-1");
    let bloco2 = document.getElementById("block-2");
    let bloco3 = document.getElementById("block-3");
    let bloco4 = document.getElementById("block-4");
    let bloco5 = document.getElementById("block-5");
    let bloco6 = document.getElementById("block-6");
    let bloco7 = document.getElementById("block-7");
    let bloco8 = document.getElementById("block-8");
    let bloco9 = document.getElementById("block-9");

    // formas horizontais

    if(bloco1.childNodes.length > 0 && bloco2.childNodes.length > 0 && bloco3.childNodes.length > 0){ // 1,2,3
        let bloco1Child = bloco1.childNodes[0].className;
        let bloco2Child = bloco2.childNodes[0].className;
        let bloco3Child = bloco3.childNodes[0].className;

        if(bloco1Child == 'x' && bloco2Child == 'x' && bloco3Child == 'x' ){
            // x
            console.log("x venceu ");
            declaraVencedor('x');
        } else if(bloco1Child == 'o' && bloco2Child == 'o' && bloco3Child == 'o' ){
            // o
            console.log("o venceu ");
            declaraVencedor('o')
        }
    }
    if(bloco4.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco6.childNodes.length > 0){ // 4,5,6
            let bloco4Child = bloco4.childNodes[0].className;
            let bloco5Child = bloco5.childNodes[0].className;
            let bloco6Child = bloco6.childNodes[0].className;

            if(bloco4Child == 'x' && bloco5Child == 'x' && bloco6Child == 'x' ){
                // x
                console.log("x venceu ");
                declaraVencedor('x');
            } else if(bloco4Child == 'o' && bloco5Child == 'o' && bloco6Child == 'o'){
                // o
                console.log("o venceu ");
                declaraVencedor('o');
            }
        }
        if(bloco7.childNodes.length > 0 && bloco8.childNodes.length > 0 && bloco9.childNodes.length > 0){ // 7,8,9
            let bloco7Child = bloco7.childNodes[0].className;
            let bloco8Child = bloco8.childNodes[0].className;
            let bloco9Child = bloco9.childNodes[0].className;

            if(bloco7Child == 'x' && bloco8Child == 'x' && bloco9Child == 'x' ){
                // x
                console.log("x venceu ");
                declaraVencedor('x')
            } else if(bloco7Child == 'o' && bloco8Child == 'o' && bloco9Child == 'o'){
                // o
                console.log("o venceu ");
                declaraVencedor('o')
            }
        }

        // CHECAGEM VERTICAL 
        if(bloco1.childNodes.length > 0 && bloco4.childNodes.length > 0 && bloco7.childNodes.length > 0){ // 1,4,7
            let bloco1Child = bloco1.childNodes[0].className;
            let bloco4Child = bloco4.childNodes[0].className;
            let bloco7Child = bloco7.childNodes[0].className;
    
            if(bloco1Child == 'x' && bloco4Child == 'x' && bloco7Child == 'x' ){
                // x
                console.log("x venceu ");
                declaraVencedor('x');
            } else if(bloco1Child == 'o' && bloco4Child == 'o' && bloco7Child == 'o' ){
                // o
                console.log("o venceu ");
                declaraVencedor('o');
            }
        }

        if(bloco2.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco8.childNodes.length > 0){ // 2,5,8
            let bloco2Child = bloco2.childNodes[0].className;
            let bloco5Child = bloco5.childNodes[0].className;
            let bloco8Child = bloco8.childNodes[0].className;
    
            if(bloco2Child == 'x' && bloco5Child == 'x' && bloco8Child == 'x' ){
                // x
                console.log("x venceu ");
                declaraVencedor('x');
            } else if(bloco2Child == 'o' && bloco5Child == 'o' && bloco8Child == 'o' ){
                // o
                console.log("o venceu ");
                declaraVencedor('o');
            }
        }

        if(bloco3.childNodes.length > 0 && bloco6.childNodes.length > 0 && bloco9.childNodes.length > 0){ // 3,6,9
            let bloco3Child = bloco3.childNodes[0].className;
            let bloco6Child = bloco6.childNodes[0].className;
            let bloco9Child = bloco9.childNodes[0].className;
    
            if(bloco3Child == 'x' && bloco6Child == 'x' && bloco9Child == 'x' ){
                // x
                console.log("x venceu ");
                declaraVencedor('x')
            } else if(bloco3Child == 'o' && bloco6Child == 'o' && bloco9Child == 'o' ){
                // o
                console.log("o venceu ");
                declaraVencedor('o')
            }
        } 
        // CHEKAGEM DAS DIAGONAIS
        if(bloco1.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco9.childNodes.length > 0){ // 1,5,9
            let bloco1Child = bloco1.childNodes[0].className;
            let bloco5Child = bloco5.childNodes[0].className;
            let bloco9Child = bloco9.childNodes[0].className;
    
            if(bloco1Child == 'x' && bloco5Child == 'x' && bloco9Child == 'x' ){
                // x
                console.log("x venceu ");
                declaraVencedor('x')
            } else if(bloco1Child == 'o' && bloco5Child == 'o' && bloco9Child == 'o' ){
                // o
                console.log("o venceu ");
                declaraVencedor('o')
            }
        }

            if(bloco3.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco7.childNodes.length > 0){ // 3,5,7
                let bloco3Child = bloco3.childNodes[0].className;
                let bloco5Child = bloco5.childNodes[0].className;
                let bloco7Child = bloco7.childNodes[0].className;
        
                if(bloco3Child == 'x' && bloco5Child == 'x' && bloco7Child == 'x' ){
                    // x
                    console.log("x venceu ");
                    declaraVencedor('x');
                } else if(bloco3Child == 'o' && bloco5Child == 'o' && bloco7Child == 'o' ){
                    // o
                    console.log("o venceu ");
                    declaraVencedor('o');
                }
            }
            // DEU VELHA 
            let contador = 0;
            for(let i=0;i<boxes.length;i++){
                if(boxes[i].childNodes[0] != undefined){
                    contador++;
                }
            }
            if(contador === 9){
                console.log("deu velha");
                declaraVencedor('Deu velha');
            }

}

        // Limpa o jogo, declara vencedor e atualiza o placar 
    function declaraVencedor(vencedor){
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2");
    let mensagem = ``;
        if(vencedor  == 'x'){
            mensagem = "O jogador 1 venceu";
            scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        }else if(vencedor == 'o'){
            mensagem = "O jogador 2 venceu";
            scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        } else {
            mensagem = "Deu Velha";
        }
        // EXIBINDO MENSAGEM

        massageText.innerHTML = mensagem; //metodo utilizado para definir o conteudo HTML desse elemento
        massageContainer.classList.remove("hide");

        // esconde mensagem 
        setTimeout(function() {
            massageContainer.classList.add("hide");
            
        },1000);
        

        //ZERANDO AS JOGADAS
            player1  = 0;
            player2 = 0;

            let boxesToRemove = document.querySelectorAll(".box div");

            for(let i =0;i< boxesToRemove.length;i++){
                boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]); // remove child is a function
            }
    }
//Evento para saber se é 2 players ou IA
        for(let i=0;i< buttons.length;i++){
            buttons[i].addEventListener("click", function (){
                secondPlayer = this.getAttribute("id");
                    for(let j =0; j<buttons.length;j++){
                        buttons[j].style.display = 'none';
                    }
                    setTimeout(function(){
                        let container = document.querySelector("#container");
                        container.classList.remove("hide");
                    },500)
            });
    }

// adicionando evento de click aos boxes 

for(let i =0; i < boxes.length;i++){
    // quando alguem clica na caixa 
    boxes[i].addEventListener("click", function(){ //Adição do evento

    let elemento =  verificarElemento(player1,player2);

    
        
    // Verifica se ja tem elemento dentro do box
        if(this.childNodes.length == 0 ){

                let cloneElemento = elemento.cloneNode(true);
                boxes[i].appendChild(cloneElemento);

                // computar a jogada 
                if(player1 == player2){ 
                    // x
                    player1++;
                    if(secondPlayer === 'ai-player' ){
                        //funcao para executar jogada iA
                        player2++;
                        computerplay();
                    }
                }else {
                        player2++;
                }
                // Checando a codição de vitoria 
                checarVitoria();


        }


    });
}

function computerplay(){
    let cloneO = o.cloneNode(true);
    let counter = 0 
    let filled = 0;

    for(let i=0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random() * 5); // número aleatório de 0 a 5

        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            } else {
                filled++;
            }
        }
    }
    
    


}

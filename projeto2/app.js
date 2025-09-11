function criaCartao (categoria, pergunta, resposta) {

    let container =document.getElementById('container') 
    let cartao = document.createElement ('article')
    cartao.className = 'cartao' 
    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>Futebol</h3>
        <div class="cartao__conteudo__pergunta">
            <p>O que é Penalti</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>O Penalti e uma falta dentro da Grande Área</p>
        </div>
    </div>
    `
    container.appendChild(cartao)

}
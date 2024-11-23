let expressao = "";

// Adiciona o valor ao display
function adicionarValor(valor) {
    expressao += valor;
    document.getElementById("display").value = expressao;
}

// Limpa o display
function limpar() {
    expressao = "";
    document.getElementById("display").value = "";
}

// Calcula a expressão
function calcular() {
    try {
        expressao = eval(expressao); // Avalia a expressão
        document.getElementById("display").value = expressao;
    } catch {
        document.getElementById("display").value = "Erro";
    }
}

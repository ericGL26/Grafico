var barra_esquerda_grafico = document.getElementById('barra_esquerda_grafico')
var barra_direita_grafico = document.getElementById('barra_direita_do_grafico')
var primeiro_input = document.getElementById('primeiro_input_grafico')
var segundo_input = document.getElementById('segundo_input_grafico')
var indicador_media = document.getElementById('indicador_media_id')
var butao_enviar_dados = document.getElementById('butao_enviar_dados')
var indicador_teste = document.getElementById('indicador_teste')
var indicador_0 = document.getElementById('indice_0')
var indicador_1 = document.getElementById('indice_1')
var indicador_2 = document.getElementById('indice_2')
var indicador_3 = document.getElementById('indice_3')
var indicador_4 = document.getElementById('indice_4')
var indicador_5 = document.getElementById('indice_5')


var valorprimeiroinput = null;
var valorsegundoinput = null;

var valorprimeiroinputnum = parseFloat(valorprimeiroinput)
var valorsegundoinputnum = parseFloat(valorsegundoinput)
var MediaValores = (valorprimeiroinputnum + valorsegundoinputnum) / 2

var valor_da_porcentagem_barra_esquerda = (400 * valorprimeiroinput) / 100;
var valor_da_porcentagem_barra_direita = (400 * valorsegundoinput) / 100;

var valorprimeiroinputnum = parseFloat(valorprimeiroinput)
var valorsegundoinputnum = parseFloat(valorsegundoinput)
var CalculoEValoresDosDoisInputs = (valorprimeiroinputnum + valorsegundoinputnum) / 6


function TamanhoEspacamentoDosIndicadores(){
    indicador_teste.innerText = CalculoEValoresDosDoisInputs
    indicador_teste.style.height = CalculoEValoresDosDoisInputs + '%'
}


function ButaoEnviarDados(){
    var maiornumero = 0;
    var MenorNumero = 0

    valorprimeiroinput = primeiro_input.value;
    valorsegundoinput = segundo_input.value;

    valorprimeiroinput = parseFloat(valorprimeiroinput)
    valorsegundoinput = parseFloat(valorsegundoinput)

    if(valorprimeiroinput > valorsegundoinput){
        maiornumero = valorprimeiroinput
        MenorNumero = valorsegundoinput
    }else{
        maiornumero = valorsegundoinput;
        MenorNumero = valorprimeiroinput;
    }
   

    barra_esquerda_grafico.style.height =  100 + '%'
    MenorNumero = parseFloat(MenorNumero)
    maiornumero = parseFloat(maiornumero)
    var CalculoTamanhoBarrraDireita = (MenorNumero / maiornumero) * 100
    barra_direita_grafico.style.height = CalculoTamanhoBarrraDireita + '%';


    function ValoresDosIndicadores(){
        var calculo = maiornumero / 6
        indicador_0.innerText = Math.round(calculo)
        indicador_1.innerText = Math.round(calculo + calculo)
        indicador_2.innerText = Math.round(calculo + calculo + calculo)
        indicador_3.innerText = Math.round(calculo + calculo + calculo + calculo)
        indicador_4.innerText = Math.round(calculo + calculo + calculo + calculo + calculo)
        indicador_5.innerText = Math.round(calculo + calculo + calculo + calculo + calculo + calculo)
    }
    ValoresDosIndicadores()
}

TamanhoEspacamentoDosIndicadores()
tamanhoGrafico()
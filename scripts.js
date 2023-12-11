const trocaimg = document.querySelector(".gif-sorteio");
const trocaText = document.querySelector(".digite-aqui");
const result = document.querySelector(".result");
const button = document.querySelector(".start");




function sorteio() {
    const min = Math.floor(document.querySelector(".input-de").value);
    const max = Math.ceil(document.querySelector(".input-para").value);
    const final = Math.floor(Math.random() * (max - min + 1)) + min;

   
    const inputDe = document.querySelector("#i1").value;
    const inputPara = document.querySelector("#i2").value;

    if (inputDe === "" || inputPara === "" || min >= max ) {
        alert ("Favor preencher a numeração corretamente!")
        return;
    }
    
   
   
    trocaimg.src = "https://blog.udemy.com/wp-content/uploads/2013/12/shutterstock_36123484-300x300.jpg"
    button.style.visibility = "visible"
    trocaText.innerHTML = "Resultado"
    result.innerHTML = final
    result.style.fontFamily = "Oswald, sans-serif;"
    result.style.fontSize = "70px"
    result.style.cursor = "auto"
    result.style.color = "white"
    result.disabled = true;
     
 };

function start() {
    trocaimg.src = "https://gifs.eco.br/wp-content/uploads/2022/11/gifs-de-sorteio-0.gif"
    trocaText.innerHTML = "Digite aqui os números"
    result.innerHTML = "Clique <br> Aqui"
    result.stylefontFamily = "'Oswald', sans-serif;"
    result.style.fontSize = "20px"
    button.style.visibility = "hidden"
    result.style.cursor = "pointer"
    result.disabled = false;
    document.querySelector("#i1").value = "";
    document.querySelector("#i2").value = "";


}

let pressaoDeSuccao = 46.88
let pressaoDeDescarga = 54.31
let diferencialDePressao = pressaoDeDescarga - pressaoDeSuccao
let pressaoMaxSegura = 56

if (pressaoDeDescarga>=pressaoMaxSegura){
    console.log("ALERTA CRITICO")
}

console.log ("A diferença de pressão é igual a " + diferencialDePressao)

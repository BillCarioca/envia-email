const findAll = require("./dados")
const enviarEmail = require("./envia-email");
const listaDeClientes = findAll()
function bodyEmail(name,text){
    // define a saudação a ser usada no corpo do Email dependo da hora do dia.
    const date = new Date
    const greeting = "Bom dia!"
    if(date.getHours()>11){
        if(date.getHours()<18) greeting = "Boa Tarde"
        else greeting = "Boa Noite"
    }
    // retorna o corpo do email ja formatado.
    return `    ${greeting} ${name}

          ${text}`
}

function text(){
    // gera o texto automatico que incorpora o corpo do email
    return `Gostariamos de Apresentar uma novidade inportante pra vc
      chegou em nossa empresa novos carros com preços incríveis.`
}
function defineDia(dia){
    // pega o dia em texto e retorna o equivalente em numero
    dia = dia.toLowerCase()
    switch(dia){
        case "domingo": return 0
        case "segunda": return 1
        case "terça": return 2
        case "quarta": return 3
        case "quinta": return 4
        case "sexta": return 5
        case "sabado": return 6
        default:{
           console.log("dia inválido será atribuido automaticamente domingo")
           return 0
        }
    }
}

function disparoEmail(dia){
    const date = new Date
    const day = defineDia(dia)
    // dispara os email dependendo do dia .
    if (date.getDay()==day){
        listaDeClientes.forEach(cliente=>{
            if (cliente.isNotified){
               const resposta = enviarEmail(cliente.email,"Novidades", bodyEmail(cliente.name,text()))
               if(resposta.status == "Error"){
                console.error(`O email para cliente ${cliente.name} apresenta o seguinte error: ${resposta.message}`)
               }
            }
        })
    }
}

disparoEmail("Segunda")
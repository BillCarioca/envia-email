class Client {
    static idAuto = 0

    constructor(name, email, isNotified) {
        this.id = Client.idAuto
        this.name = name;
        this.email = email;
        this.isNotified = isNotified;
        Client.idAuto++
    }
}

const listaDeClientes = []

function addClient(nome, email,ehNotificada){
    return listaDeClientes.push(new Client(nome,email,ehNotificada))
}

addClient("Ana","ana@ada.com",true)
addClient("Bruno","bruno@ada.com",true)
addClient("Carlos","carlos@ada.com",false)
addClient("Daniel","daniel@ada.com",true)
addClient("Eva","eva@ada.com",true)
addClient("Fábio","fabio@ada.com",true)
addClient("Gabriela","gabriea@ada.com",false)
addClient("Hiro","hiro@ada.com",false)
addClient("Inês","ines@ada.com",true)
addClient("João","joao@ada.com",true)

function findAll(){
    return listaDeClientes
}

module.exports = addClient
module.exports = findAll
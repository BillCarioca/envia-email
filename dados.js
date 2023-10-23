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

function addClient(client){
    listaDeClientes.push(client)
}

addClient(new Client("Ana","ana@ada.com",true))
addClient(new Client("Bruno","bruno@ada.com",true))
addClient(new Client("Carlos","carlos@ada.com",false))
addClient(new Client("Daniel","daniel@ada.com",true))
addClient(new Client("Eva","eva@ada.com",true))
addClient(new Client("Fábio","fabio@ada.com",true))
addClient(new Client("Gabriela","gabriea@ada.com",false))
addClient(new Client("Hiro","hiro@ada.com",false))
addClient(new Client("Inês","ines@ada.com",true))
addClient(new Client("João","joao@ada.com",true))

function findAll(){
    return listaDeClientes
}


module.exports = findAll
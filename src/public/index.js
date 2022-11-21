var url = "/sessions"

function clicar(){
    let somar = 1
    console.log(somar+1)
}



async function login(){   
    let Usuario = document.getElementById("Usuario").value
    let Senha = document.getElementById("Senha").value

    console.log( Usuario + ' ' + Senha)
    await axios.post(url, {
        usuario:Usuario,
        senha:Senha
    })
    .then(response =>{
        window.location.href ="/logado"
    })
    .catch(error =>console.log(error))

}
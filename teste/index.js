var url = "localhost:3000/sessions"

function clicar(){
    let somar = 1
    console.log(somar+1)
}

function login(){   
    let Usuario = document.getElementById("Usuario").value
    let Senha = document.getElementById("Senha").value

    console.log(Usuario)

    teste = JSON.stringify({
        "usuario":Usuario,
        "senha":Senha
    })

    console.log(teste)

    axios.post(url, teste )
    .then(response =>{
        alert("Logado")
    })
    .catch(error =>console.log(error))
}
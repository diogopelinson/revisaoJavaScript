// const usuario={
//     senha:"12345"
// }

// const usuarioJson=JSON.stringify(usuario)
// localStorage.setItem("usuario", usuarioJson)
// console.log(usuarioJson)



const usuario = localStorage.getItem("usuario")

const dados ={
    nome:"Diogo",
    senha:"12345"
}

const convertUsuario = JSON.stringify(dados)
localStorage.setItem("dados", convertUsuario)

// localStorage.removeItem("dados")
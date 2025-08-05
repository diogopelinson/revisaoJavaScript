function adicionarItem(){
    const ul = document.querySelector("#item-lista");
    const li = document.createElement("li");

    li.textContent = `Novo Item ${ul.children.length +1}`;
    ul.appendChild(li);

}

function removerItem(){
    const ul = document.querySelector("#item-lista");
    if(ul.lastElementChild){
        ul.removeChild(ul.lastElementChild)
    }

}
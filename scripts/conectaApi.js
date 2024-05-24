async function listaApi() {
    const response = await fetch("http://localhost:3000/Produtos");
    const data = await response.json();
    
    return data;
}

async function criaItem(nome, preco, imagem) {
    const response =  await fetch("http://localhost:3000/Produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem,
        }),
    });
    return response;
}

async function deletaItem(id) {
    console.log(id)
    const response = await fetch(`http://localhost:3000/Produtos/${id}`, {
        method: "DELETE",
    });
    return response
}

export const lista= { 
    listaApi,
    deletaItem,
    criaItem
}
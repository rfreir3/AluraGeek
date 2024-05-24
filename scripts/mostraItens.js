import { lista } from "./conectaApi.js";

const localLista = document.querySelector(".main__adicionados__lista");

function criaItem(imagem, nome, preco, id) {
    var item = document.createElement("div");
    item.classList.add("main__adicionados__lista__card");
    item.setAttribute("data-id", id);
    item.innerHTML = `
    <img src="${imagem}" alt="Imagen del producto" class="main__adicionados__lista__card__imagem">
    <div class="main__adicionados__card__info">

        <p>${nome}</p>

        <div class="main__adicionados__card__info__valor">

            <p>$${preco}</p>
            <button class="trash" type="button"><img src="/assets/icon _trash 2_.png" alt="Ícono de eliminación"></button>
            
        </div>
    </div>
   `
   const trash = item.querySelector(".trash");
   trash.addEventListener("click", async () => {
        const id = item.getAttribute('data-id');
        item.remove()
        await lista.deletaItem(id);
    });

    return item;
}

async function listaItens() {
    const listaItem = await lista.listaApi();
    listaItem.forEach((item) => localLista.appendChild(criaItem(item.imagem, item.nome, item.valor, item.id)));
    
}

listaItens();
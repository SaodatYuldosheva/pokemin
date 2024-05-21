let big = document.querySelector(`.big`);
for(let i = 0; i < pokemons.length; i++){
    let box = document.createElement(`div`);
    box.classList.add(`box`);

    let img = document.createElement(`img`)
    img.classList.add(`img`)
    img.src = pokemons [i].img;
    img.href=`https://www.serebii.net/pokemongo/pokemon`+ pokemons [i].num;

    let title = document.createElement(`h4`);
    title.classList.add(`title`)
    title.textContent= pokemons [i].name;

    let txt = document.createElement(`li`);
    txt.classList.add(`txt`)
     
    let nuqta = pokemons [i].weaknesses;

    for(let j = 0; j < nuqta.length; j++ ){
        let item = document.createElement(`li`);
        item.classList.add(`item`);
        item.textContent = nuqta[j];
        txt.appendChild(item)

    }
    box.appendChild(img)
    box.appendChild(title)
    box.appendChild(txt)
    big.appendChild(box)

}
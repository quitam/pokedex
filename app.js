let pokedex = document.getElementById('pokedex')
console.log(pokedex)

let promises = []
let loadPokemon = () => {
    for (let i = 1; i <= 50; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then(res => res.json()))
    }
    Promise.all(promises).then((result) => {
        let pokemon = result.map((data) => ({
            id: data.id,
            name: data.name,
            image: data.sprites['front_default'],
            types: data.types.map((param) => param.type.name).join(', ')
        }))
        showPokemon(pokemon)
    })
};
let showPokemon = (id) => {
    console.log(id)
    let value = id.map((poke) =>
        `
    <div class="card">
        <img src="${poke.image}">
        <div class="container">
            <h2>${poke.id}. ${poke.name}</h2>
            <p>Types: ${poke.types}</p>
        </div>
        
        
    </div>
    `).join('')
    pokedex.innerHTML = value
}
loadPokemon()
const pokeball = document.getElementById("img")

var selecPoke = document.getElementById("selected")

var selecName = document.getElementById('name')

var audio = document.getElementById("audio");

pokeball.addEventListener(("click"), () =>{
    animation()
})
function animation(){
    pokeball.style.rotate = "45deg"
    setTimeout(() =>{
        pokeball.style.rotate = "0deg"
        setTimeout(() =>{
            pokeball.style.rotate = "-45deg"
            setTimeout(() =>{
                pokeball.style.rotate = "0deg"
                setTimeout(() =>{
                    pokeball.style.rotate = "45deg"
                    setTimeout(() =>{
                        pokeball.style.rotate = "0deg"
                        setTimeout(() =>{
                            getPokemon()
                            audio.play();
                        }, 300)
                    }, 300)
                }, 300)
            }, 300)
        }, 300)
    }, 300)
}
function getPokemon(){
    var randPok = Math.floor(Math.random() * 915) + 1;
    selecPoke.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randPok}.png`
    fetch(`https://pokeapi.co/api/v2/pokemon/${randPok}`)
        .then(response => response.json())
        .then(data => {
            var dataName = data.species.name
            selecName.innerHTML = dataName.toUpperCase();
            console.log(data)
        })
        .catch(error => {
            // faça algo com o erro
        });
}
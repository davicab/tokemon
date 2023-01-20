const pokeball = document.getElementById("img")

var selecPoke = document.getElementById("selected")

var selecName = document.getElementById('name')
var selecType = document.getElementById('type');

var audio = document.getElementById("audio");

var times = 6;


let listPokemon = JSON.parse(localStorage.getItem('listaPokemon') || '[]')

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
    times--
    if(times >= 0 && times <= 6){    
        console.log(times)
        var randPok = Math.floor(Math.random() * 151) + 1;
        var dataName;
        fetch(`https://pokeapi.co/api/v2/pokemon/${randPok}`)
            .then(response => response.json())
            .then(data => {
                selecPoke.src = data.sprites.front_default
                dataName = data.species.name
                selecName.innerHTML = dataName.toUpperCase();
                
                listPokemon.push(
                {
                    "nome" : [dataName],
                    "data" : [data]
                }
                )
                localStorage.setItem("listaPokemo", JSON.stringify(listPokemon))
            })
            .catch(error => {
                window.alert("pokemon nao disponivel")
            });
    }
}
function storePoke(){

    let listPokemon = JSON.parse(localStorage.getItem('listaPokemon') || '[]')

    listPokemon.push(
    {
        "nome" : [dataName],
        "id" : [randPok]
    }
    )
    localStorage.setItem("listaPokemo", JSON.stringify(listPokemon))
}
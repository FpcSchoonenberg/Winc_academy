async function getPokemon(apiUrl) {
    try {
        let response = await fetch("https://api.pokemontcg.io/v1/cards");
        let data = await response.json();
        for (i = 1; i <= 3; i++) {
            let newImage = document.createElement("IMG");
            newImage.setAttribute("src", data.cards[i].imageUrl);
            newImage.setAttribute("width", "250px");
            newImage.setAttribute("height", "300px");
            document.getElementById("imagecontainer").appendChild(newImage);
            let para = document.createElement("P");                       
            let textNode = document.createTextNode(data.cards[i].types);      
            para.appendChild(textNode);                                          
            document.getElementById("imagecontainer").appendChild(para);
        }
    }
    catch { console.log("not ok") }
}

const knop = document.getElementById("somePokes");
knop.addEventListener("click", getPokemon)

// getPokemon("https://api.pokemontcg.io/v1/cards")




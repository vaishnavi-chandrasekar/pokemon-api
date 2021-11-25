var board=document.createElement("div")
    board.style.backgroundColor="grey"
    board.style.width="100%"
    board.style.height="100%"
    board.style.display="flex"
    board.style.flexDirection="row"
    board.style.flexWrap="wrap"

   
    document.body.appendChild(board)


    for (i=50;i<100;i++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(function(Array){
            return Array.json()
        
        })
        
        .then(function(beast){
            console.log(beast)
            console.log(beast.sprites.back_default)


            var div1=document.createElement("div")
            div1.style.height="320px"
            div1.style.margin="5px"
            div1.style.borderRadius="20px"
            div1.style.width="200px"
            div1.style.backgroundColor="black"
            div1.style.border="2px solid black"
            div1.style.boxShadow="10px 10px black"
             

            var img1 =document.createElement("img")
            img1.src= beast.sprites.back_default
            img1.style.width="200px"
            img1.style.height="100px"
            div1.appendChild(img1)
            

            var Name=document.createElement("p")
            Name.innerText="Name"+":"+ beast.name
            Name.style.height="30px"
            Name.style.width="200px"
            Name.style.color="white"
            div1.appendChild(Name)

            var ability1=document.createElement("p")
            ability1.innerText="ability"+":"+beast.abilities[0].ability.name
            ability1.style.height="30px"
            ability1.style.width="200px"
            ability1.style.color="white"
            div1.appendChild(ability1)

            var ability2=document.createElement("p")
            ability2.innerText="Moves"+":"+beast.moves[0].move.name
            ability2.style.height="30px"
            ability2.style.width="200px"
            ability2.style.color="white"
            div1.appendChild(ability2)

            var ability3=document.createElement("p")
            ability3.innerText="weight"+":"+beast.weight
            ability3.style.height="30px"
            ability3.style.width="200px"
            ability3.style.color="white"
            div1.appendChild(ability3)  
    
    board.appendChild(div1)
    


})
}
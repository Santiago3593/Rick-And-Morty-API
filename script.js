const url = "https://rickandmortyapi.com/api/character"

fetch(url)
  .then(data => data.json())
  .then(data => {
    const characters = data.results
    console.log(characters)
    characters.forEach(character => {
      const newArticle = document.createElement("article")
      const newImg = document.createElement("img")
      const newH2 = document.createElement("h2")
      const status = document.createElement("p")
      const locationH = document.createElement("p")
      const location = document.createElement("p")
      const originH = document.createElement("p")
      const origin = document.createElement("p")

      newImg.src = character.image
      newH2.append(character.name)
      status.append(`${character.status} - ${character.species}`)
      locationH.append("Last location know:")
      location.append(character.location.name)
      originH.append("Origin:")
      origin.append(character.origin.name)

      newArticle.appendChild(newImg)
      newArticle.appendChild(newH2)
      newArticle.appendChild(status)
      newArticle.appendChild(locationH)
      newArticle.appendChild(location)
      newArticle.appendChild(originH)
      newArticle.appendChild(origin)


      document.getElementById("container").appendChild(newArticle)
    });
  })
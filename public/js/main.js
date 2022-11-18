console.log('"Impossible is just a word quitters use to feel good about themselves!" - Vyse')

document.querySelector('button').addEventListener('click', getCharacter)

async function getCharacter() {
    const character = document.querySelector('input').value 
    try {
        const res = await fetch(`http://skies-of-arcadia.cyclic.app/api/characters/${character}`)
        const data = await res.json()
        console.log(data)
        document.querySelector('h3').innerText = 'data.characters.name'
        document.querySelector('#jp').innerText = 'data.characters.nameJP'
    } catch(error) {
        console.log(error)
    }
}

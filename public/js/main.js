console.log('"Impossible is just a word quitters use to feel good about themselves!" - Vyse')

document.querySelector('button').addEventListener('click', getCharacter)

async function getCharacter() {
    const character = document.querySelector('input').value 
    try {
        const res = await fetch(`/api/characters/${character}`)
        const data = await res.json()
        console.log(data)
        document.querySelector('#name').innerText = data.name
        document.querySelector('#nameJP').innerText = data.nameJP
        document.querySelector('#type').innerText = data.type
        document.querySelector('#age').innerText = data.age
    } catch(error) {
        console.log(error)
    }
}

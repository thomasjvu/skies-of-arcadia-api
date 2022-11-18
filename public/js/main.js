console.log('"Impossible is just a word quitters use to feel good about themselves!" - Vyse')

document.querySelector('button').addEventListener('click', getSOA)

async function getSOA() {
    const query = document.querySelector('input').value 
    try {
        const res = await fetch(`https://https://skies-of-arcadia.cyclic.app/api/characters/${query}`)
        const data = await res.json()
        console.log(data)
        document.querySelector('h3').innerText = data.name
    } catch(error) {
        console.log('error')
    }
}

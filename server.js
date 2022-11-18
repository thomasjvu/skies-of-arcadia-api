const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000


const skiesOfArcadia = {
    'characters': {
        'vyse': {
            'name': `Vyse`,
            'nameJP': `ヴァイス`,
            'type': `Playable Character`, 
            'age': 17,
            'homeland': `Pirate's Isle`,
            'faction': `Blue Rogues`,
            'superMoves': [`Cutlass Fury`, `Counterstrike`, `Rain of Swords`, `Skull Shield`, `Pirates' Wrath`],
            'crewSpMoves': [`Prophecy`, `Blue Rogues`]
        },
        'aika': {
            'name': `Aika`,
            'nameJP': `アイカ`,
            'type': `Playable Character`,
            'age': 17,
            'homeland': `Pirate's Isle`,
            'faction': `Blue Rogues`,
            'superMoves': [`Alpha Storm`, `Delta Shield`, `Lambda Burst`, `Epsilon Mirror`, `Omega Psyclone`],
        },
        'fina': {
            'name': `Fina`,
            'nameJP': `ファイナ`,
            'type': `Playable Character`,
            'age': 17,
            'homeland': `Great Silver Shrine`,
            'faction': [`Silvites`, `Blue Rogues`],
            'superMoves': [`Lunar Blessing`, `Lunar Glyph`, `Lunar Cleansing`, `Lunar Winds`, `Lunar Light`],
        },
        'drachma': {
            'name': `Drachma`,
            'nameJP': `ドラクマ`,
            'type': `Playable Character`,
            'age': 55,
            'homeland': `The Little Jack`,
            'faction': [`Himself`, `Blue Rogues`],
            'superMoves': [`Tackle`, `Spirit Charge`, `Hand of Fate`]
        }, 
        'gilder': {
            'name': `Gilder`,
            'nameJP': `ギルダー`,
            'type': `Playable Character`,
            'age': 32,
            'homeland': `The Claudia`,
            'faction': `Blue Rogues`,
            'superMoves': [`Gunslinger`, `Aura of Denial`, `The Claudia`]
        },
        'enrique': {
            'name': `Enrique`,
            'nameJP': `エンリック`,
            'type': `Playable Character`,
            'age': 25,
            'homeland': `Valua`,
            'faction': `Blue Rogues`,
            'superMoves': [`Royal Blade`, `Justice Shield`, `The Judgement`]
        },
        'baltor the black bearded': {
            'name': `Baltor The Black Bearded`,
            'nameJP': `バルボア`,
            'type': `Wanted Enemy`,
            'bounty': 1000,
            'ship': `The Blackbeard`,
            'homeland': `Nasr`,
            'faction': [`Black Pirate`, `Blue Rogue`],
        },
        'unknown': {
            'name': `Unknown`,
            'nameJP': `わからない`,
            'type': `Unknown`,
            'ship': `Unknown`,
            'homeland': `Unknown`,
            'faction': `Unknown`,
        }
    },
}


app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/public/main.js', (req, res) => {
    res.sendFile(__dirname + '/public/main.js')
})

app.get('/public/style.css', (req, res) => {
    res.sendFile(__dirname + '/public/style.css')
})


app.get('/api', (req, res) => {
    res.json(skiesOfArcadia)
})

app.get('/api/characters/:character', (req, res) => {
    const character = req.params.character.toLowerCase()
    if (skiesOfArcadia[character]){
        res.json(skiesOfArcadia[character])
    } else {
        res.json(skiesOfArcadia['unknown'])
    }
})

app.listen(PORT, (req, res) => {
    console.log(`The server is now running at Port ${PORT}`)
})

let selectedPlant;

// Levels: 0=family 1=country 2=genus 
// score = 3 - level, 3 points for no clues and one point if both clues needed
let curLvl = 0 

function getRandomPlant() {
    let i = getRandomInt(plantList.length-1)
    console.log(plantList)
    return plantList[i]
}

function giveHint() {
    curLvl++
    if (curLvl==1) {
        hintButton.html('Show Genus')
    }
    if (curLvl==2) {
        hintButton.html('Reveal Species')
    }
    if (curLvl==3) {
        hintButton.html('New Plant')
    }
    if (curLvl>3) {
        hintButton.html('Show Country')
        curLvl = 0
        selectedPlant = getRandomPlant()
    }
}

function getDisplayText() {

    if (selectedPlant == undefined) {
        return
    }

    // Family is guaranteed

    let country = '?'
    if (curLvl >= 1) {country = selectedPlant.country}

    let genus = '?'
    if (curLvl >= 2) {genus = selectedPlant.genus}

    let species = '?'
    let sciname = '?'
    if (curLvl >= 3) {species = selectedPlant.species; sciname = selectedPlant.scientificName}

    return `Family: ${selectedPlant.family}\nCountry: ${country}\nGenus: ${genus}\nSpecies: ${species}\nScientific Name: ${sciname}`
}

let box = {
    w: 600, h: 300, margin: 150
}
function drawDisplay() {

    if (selectedPlant == undefined) {
        fill(0)
        text('Press Space to Begin', width/2, height/2)
        return
    }

    push()

    translate(width/2, height/2)
    fill(colours.secondary)
    strokeWeight(3)
    stroke(colours.main)
    rect(0,0, box.w, box.h)

    fill(colours.text)
    noStroke()
    textAlign(LEFT, TOP)
    textWrap(WORD)
    text(getDisplayText(), 0, -box.h/2.5, box.w - box.margin/3)

    pop()
}
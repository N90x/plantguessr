let cnv;
let margin = 20

let plantList;
let guessInput;
let hintButton;

let colours = {
  bg: '#5a8754',
  main: '#1d5f19',
  secondary: '#5ba237',
  text: '#000000'
}

async function setup() {
  plantList = await loadJSON('carnivplants.json') // assets\jsontrove\carnivplants.json
  console.log(plantList)
  cnv = createCanvas(windowWidth - margin, windowHeight - margin);
  cnv.position(margin/2, margin/2, 'fixed');
  textAlign(CENTER, CENTER)
  textSize(32)
  rectMode(CENTER)
  //loadPhysics()

  guessInput = createInput()
  let x = width/2 - margin - guessInput.width/2
  let y = height - 100
  guessInput.position(x, y)
  
  hintButton = createButton('Show Country')
  hintButton.position(x, y+25)
  hintButton.mousePressed(giveHint)

  guessInput.hide()
  hintButton.hide()

}

function keyPressed() {
  if (key == ' ') {
    if (selectedPlant == undefined) {
    plantList = Object.values(plantList)
    selectedPlant = getRandomPlant()
    guessInput.show()
    hintButton.show()
    } else {
      giveHint()
    }
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth - margin, windowHeight - margin);
}

function draw() {
  background(colours.bg);
  drawDisplay()
}


let uvColors = [
//uv colors//
{level: "Low (0-2)", color: "#28F529"},
{level: "Moderate (3-5)", color:"#F5E733"},
{level: "High (6-7)", color:"#F47400"},
{level: "Very High (8-10)", color:"#F50A00"},
{level: "Extreme (11+)", color:"#F50290"},
];

//connects to div//
let currentUV = 0;
function setup () {
    const canvas = createCanvas(500,200,);
    canvas.parent("uvinteraction"); //place where it's going in html//


//button//
updateUV(); //name of code that updates color//

document
.getElementById("uvbutton") //connects to id in html//

.addEventListener("click", changeUV); //when clicked colors change//

}


// colors dim //
function draw() {
let backgroundColor = color(uvColors[currentUV].color);
if (document.body.classList.contains("dark")) {  //connecting to dark mode//
    backgroundColor = lerpColor(backgroundColor, color(0), 0.35); //35 % of black goes into the uv color//
} //lerp color blends colors together//


background(backgroundColor); //paints the canvas the color//

//text//
textFont("Nunito Sans");
fill(0);
textAlign(CENTER, CENTER);
textSize(17);
text(uvColors[currentUV].level, width / 2, height / 2); //centers the text//
}


function changeUV () {
    currentUV = (currentUV + 1) % uvColors.length;
    updateUV()
}

function updateUV () {
    document.getElementById("UVtext").textContent =
    "Current UV Level : " + uvColors[currentUV].level;
}

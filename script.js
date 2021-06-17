const root = document.documentElement;

const colorDrawerContent =
    `<div class="eachButton" style="background-color: #00ff00;" onclick="changeColor('#00ff00')"></div>
<div class="eachButton" style="background-color: #0011ff;" onclick="changeColor('#0011ff')"></div>
<div class="eachButton" style="background-color: #eeff00;" onclick="changeColor('#eeff00')"></div>
<div class="eachButton" style="background-color: #ff00dd;" onclick="changeColor('#ff00dd')"></div>
<div class="eachButton" style="background-color: #ff0000;" onclick="changeColor('#ff0000')"></div>
<div class="eachButton" style="background-color: #000000;" onclick="changeColor('#000000')"></div>
<div class="eachButton" style="background-color: #00d9ff;" onclick="changeColor('#00d9ff')"></div>
<div id="randomColorButton" class="eachButton" style="background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);" onclick="generateRandomColor()"><span id="randomButtonText">random</span></div>`

function changeValue(id, value) {
    const sufix = (id == "radius") ? "%" : "px";
    root.style.setProperty(`--${id}`, value + sufix);
}

function openColorDrawer() {

    const colorDrawer = document.getElementById("buttons");

    console.log(colorDrawer);

    colorDrawer.textContent = "";
    colorDrawer.insertAdjacentHTML("afterbegin", colorDrawerContent)

    colorDrawer.style.setProperty("background-color", "#aaaaaa");
}

function changeColor(newColor) {
    const closedColorDrawer = document.getElementById("buttons");

    root.style.setProperty("--boxColor", newColor);

    closedColorDrawer.textContent = "";

    closedColorDrawer.insertAdjacentHTML
        ("afterbegin",
            `<div 
            class="eachButton" 
            style="background-color: ${newColor};" 
            onclick= 'openColorDrawer()'>
        </div>`)

    closedColorDrawer.style.setProperty("background-color", "");

}

function generateRandomColor() {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    changeColor(randomColor);
}
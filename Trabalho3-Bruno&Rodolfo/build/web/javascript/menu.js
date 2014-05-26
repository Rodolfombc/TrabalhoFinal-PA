
var menuCanvas;
var menuContext;

function init()
{
    menuCanvas = document.getElementById("gameCanvas"),
    menuContext = menuCanvas.getContext("2d");
    setInterval(drawMenu, 50); //Used to order the drawing
}

function drawMenu()
{
    loadBackgroundImage();
    loadBackgroundName();
}

function loadBackgroundImage()
{    
    var backgroundImg = new Image();
    backgroundImg.src = "images/menu.png";

    backgroundImg.onload = function()
    {
        menuContext.drawImage(backgroundImg, 0, 0);
    }; 
    
}

function loadBackgroundName()
{
    var backgroundImgText = new Image();
    backgroundImgText.src = "images/name.png";
    
    backgroundImgText.onload = function()
    {
        menuContext.drawImage(backgroundImgText, 0, 0);
    }; 
    
}




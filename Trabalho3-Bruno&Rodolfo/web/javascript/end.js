var gameCanvas;
var gameContext;

function init()
{
    gameCanvas = document.getElementById("gameCanvas"),
    gameContext = gameCanvas.getContext("2d");
    setInterval(drawScreen, 41);  //Used to order the drawing
}

function drawScreen()
{
    loadBackgroundImage();
}

function loadBackgroundImage()
{    
    var backgroundImg = new Image();
    backgroundImg.src = "images/fundo.png";

    backgroundImg.onload = function()
    {
        gameContext.drawImage(backgroundImg, 0, 0);
        gameContext.fillStyle = "white";
        gameContext.font = "bold 36px Arial";
        //gameContext.fillText("Player: "+playerName, 150, 40);
        //gameContext.fillText("Score: "+playerScore, 600, 40);
    }; 
}

document.onkeydown = function(event)
{
    var key_code = event.keyCode;
        if(key_code === 27)
    {
        window.open('', '_self', ''); 
        window.close(); //closing the tab with esc key
    }
    
}
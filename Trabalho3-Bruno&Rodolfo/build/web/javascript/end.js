var gameCanvas;
var gameContext;

var playerList = new Array();
var scoreList = new Array();

function setPlayerList(pl)
{
    playerList = pl;
}

function setScoreList(sl)
{
    scoreList = sl;
}

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
        
        for (var i = 0; i < scoreList.length-1; i++) 
        { 
            gameContext.fillText("Player: "+playerList[i], 150, 40+40*i);
            gameContext.fillText("Score: "+scoreList[i], 600, 40+40*i);
        }
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
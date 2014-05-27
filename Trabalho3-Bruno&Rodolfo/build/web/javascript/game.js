
var gameCanvas;
var gameContext;

var playerY = 0;
var playerSpeed = 0;

function init()
{
    gameCanvas = document.getElementById("gameCanvas"),
    gameContext = gameCanvas.getContext("2d");
    setInterval(drawScreen, 41); //Used to order the drawing
}

function drawScreen()
{
    loadBackgroundImage();
    loadPlayerImage();
}

function loadBackgroundImage()
{    
    var backgroundImg = new Image();
    backgroundImg.src = "images/fundo.png";

    backgroundImg.onload = function()
    {
        gameContext.drawImage(backgroundImg, 0, 0);
    }; 
}

function loadPlayerImage()
{    
    var playerImg = new Image();
    playerImg.src = "images/boneco.png";

    playerImg.onload = function()
    {
        gameContext.drawImage(playerImg, 0, playerY);
    }; 
}


//Player movement
window.setInterval(function() 
{
    if ((playerSpeed < 0 && playerY >= 0) || (playerSpeed > 0 && playerY <= 580)) 
    {   
        playerY += playerSpeed;  
    }
}, 41);

//Detecting input
document.onkeydown = function(event)
{
    var key_code = event.keyCode;
    KeyDownHandler(key_code);
}
function KeyDownHandler(key)
{
    //alert(key);
    //alert(String.fromCharCode(key));
    
    //console.log(playerY);
    
    //Moving UP or DOWN using either w/s or up/down arrow
    if(key === 38)
    {  
        //alert("UP");
        playerSpeed = -10;
    }
    if(key === 40)
    {  
        //alert("DOWN");     
        playerSpeed = 10;
    }    
}

document.onkeyup = function(event)
{
    var key_code = event.keyCode;
    KeyUpHandler(key_code);
}
function KeyUpHandler(key)
{
    if(key === 38 || key === 40)
    {    
        playerSpeed = 0;
    }
}

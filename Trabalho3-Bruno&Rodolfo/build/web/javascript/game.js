
var gameCanvas;
var gameContext;

var playerY = 0;
var playerSpeed = 0;

//Doges positions
var doge1X = 860;
var doge2X = 860;
var doge3X = 860;
var doge4X = 860;
var doge5X = 860;
var doge6X = 860;
var doge7X = 860;

var doge1Y = 0;
var doge2Y = 100;
var doge3Y = 200;
var doge4Y = 300;
var doge5Y = 400;
var doge6Y = 500;
var doge7Y = 600;

var dogeSpeed = -3;

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
    loadDogeImages();
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

function loadDogeImages()
{    
    var doge1Img = new Image();
    doge1Img.src = "images/doge1.png";
    
    doge1Img.onload = function()
    {
        gameContext.drawImage(doge1Img, doge1X, doge1Y);
        gameContext.drawImage(doge1Img, doge3X, doge3Y);
        gameContext.drawImage(doge1Img, doge5X, doge5Y);
        gameContext.drawImage(doge1Img, doge7X, doge7Y);
    }; 
    
    var doge2Img = new Image();
    doge2Img.src = "images/doge2.png";
    
    doge2Img.onload = function()
    {
        gameContext.drawImage(doge2Img, doge2X, doge2Y);
        gameContext.drawImage(doge2Img, doge4X, doge4Y);
        gameContext.drawImage(doge2Img, doge6X, doge6Y);
    }; 
}

//=============================Doge movement============================//
window.setInterval(function() 
{
    if ((doge1X > 0) && (doge2X > 0) && (doge3X > 0) && (doge4X > 0) && (doge5X > 0) && (doge6X > 0) && (doge7X > 0)) 
    {   
        doge1X += dogeSpeed;
        doge2X += dogeSpeed;
        doge3X += dogeSpeed;
        doge4X += dogeSpeed;
        doge5X += dogeSpeed;
        doge6X += dogeSpeed;
        doge7X += dogeSpeed;
    }
    else
    {
        alert("Game Over");
    }
}, 41); //24fps
//=============================Doge movement============================//

//====================================Player movement=====================================//
window.setInterval(function() 
{
    if ((playerSpeed < 0 && playerY >= 0) || (playerSpeed > 0 && playerY <= 580)) 
    {   
        playerY += playerSpeed;  
    }
}, 41); //24fps

//Detecting input
document.onkeydown = function(event)
{
    var key_code = event.keyCode;
    KeyDownHandler(key_code);
    
    //====================================Player shoot========================================//
    if(key_code === 17)
    {
        //console.log("shoot");
        var bulletImg = new Image();
        bulletImg.src = "images/tiro.png";
        bulletImg.onload = function()
        {
            gameContext.drawImage(bulletImg, 109, playerY+30);
        }; 
    } 
    //====================================Player shoot========================================//
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
        playerSpeed = -12;
    }
    if(key === 40)
    {  
        //alert("DOWN");     
        playerSpeed = 12; 
    }    
    
    if(key === 27)
    {
        window.open('', '_self', ''); 
        window.close(); //closing the tab with esc key
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
//====================================Player movement=====================================//


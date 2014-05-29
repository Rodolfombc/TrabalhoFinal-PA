
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


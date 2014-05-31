
var gameCanvas;
var gameContext;


//================================Player variables=============================//
var playerX = 0;
var playerY = 0;
var playerSpeed = 0;

var playerImg;
var playerWidth;
var playerHeight;

var playerScore = 0;
//================================Player variables=============================//


//================================Doges variables=============================//
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

var doge1Speed = -3;
var doge2Speed = -3;
var doge3Speed = -3;
var doge4Speed = -3;
var doge5Speed = -3;
var doge6Speed = -3;
var doge7Speed = -3;

var doge1Img;
var doge2Img;
var dogeWidth;
var dogeHeight;
//================================Doges variables=============================//

//================================Bullet variables=============================//
var bulletImg;
var bulletX = 109;
var bulletWidth;
var bulletHeight;
//================================Bullet variables=============================//

//================================Doges texts=============================//
var epic; var epicX; var epicY;

var muchGrafix; var muchGrafixX; var muchGrafixY;

var suchGame; var suchGameX; var suchGameY;

var wow; var wowX; var wowY;

var textsCounter = 0;
var canDrawTexts = false;
//================================Doges texts=============================//

function init()
{
    gameCanvas = document.getElementById("gameCanvas"),
    gameContext = gameCanvas.getContext("2d");
    setInterval(drawScreen, 41);  //Used to order the drawing
    setInterval(drawTexts, 41);
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
    playerImg = new Image();
    playerImg.src = "images/boneco.png";

    playerImg.onload = function()
    {
        gameContext.drawImage(playerImg, 0, playerY);
        playerWidth = this.width;
        playerHeight = this.height;
    }; 
}

function loadDogeImages()
{    
    doge1Img = new Image();
    doge1Img.src = "images/doge1.png";
    
    doge1Img.onload = function()
    {
        gameContext.drawImage(doge1Img, doge1X, doge1Y);
        gameContext.drawImage(doge1Img, doge3X, doge3Y);
        gameContext.drawImage(doge1Img, doge5X, doge5Y);
        gameContext.drawImage(doge1Img, doge7X, doge7Y);
        
        dogeWidth = this.width;
        dogeHeight = this.height;
    }; 
    
    doge2Img = new Image();
    doge2Img.src = "images/doge2.png";
    
    doge2Img.onload = function()
    {
        gameContext.drawImage(doge2Img, doge2X, doge2Y);
        gameContext.drawImage(doge2Img, doge4X, doge4Y);
        gameContext.drawImage(doge2Img, doge6X, doge6Y);
    }; 
}

function drawTexts()
{
    //=============================Texts positioning============================//
    if(textsCounter > 20)
    {
        epicX = Math.random() * 700;
        epicY = Math.random() * 500;
        
        muchGrafixX = Math.random() * 700;
        muchGrafixY = Math.random() * 500;
        
        suchGameX = Math.random() * 700;
        suchGameY = Math.random() * 500;
        
        wowX = Math.random() * 700;
        wowY = Math.random() * 500;
        
        if(canDrawTexts === false)
        {
            canDrawTexts = true;
        }
        else if(canDrawTexts === true)
        {
            canDrawTexts = false;
        }
        
        textsCounter = 0;
    }
    //console.log(canDrawTexts);
    
    if(canDrawTexts === true)
    {
        epic = new Image();
        epic.src = "images/EPIC.png";
        epic.onload = function()
        {
            gameContext.drawImage(epic, epicX, epicY);
        };

        muchGrafix = new Image();
        muchGrafix.src = "images/MUCHGRAFIX.png";
        muchGrafix.onload = function()
        {
            gameContext.drawImage(muchGrafix, muchGrafixX, muchGrafixY);
        };

        suchGame = new Image();
        suchGame.src = "images/SUCHGAME.png";
        suchGame.onload = function()
        {
            gameContext.drawImage(suchGame, suchGameX, suchGameY);
        };

        wow = new Image();
        wow.src = "images/WOW.png";
        wow.onload = function()
        {
            gameContext.drawImage(wow, wowX, wowY);
        };
    }
    
    //=============================Texts positioning============================//
}


//=============================Doge movement=====================================================//
window.setInterval(function() 
{    
//    if(playerScore > 1000)
//    {
//        alert("WOW");
//    }
    textsCounter += 1;
    //console.log(textsCounter);    
    
    //Doges collision with left side of the screen
    if ((doge1X > 0) && (doge2X > 0) && (doge3X > 0) && (doge4X > 0) && (doge5X > 0) && (doge6X > 0) && (doge7X > 0)) 
    {   
        doge1X += doge1Speed;
        doge2X += doge2Speed;
        doge3X += doge3Speed;
        doge4X += doge4Speed;
        doge5X += doge5Speed;
        doge6X += doge6Speed;
        doge7X += doge7Speed;
        playerScore += 1;
        document.getElementById("playerScore").value = playerScore;
        //console.log(document.getElementById("playerScore").value);
    }
    else
    {
        document.forms["game"].submit();
    }
    
    //====================Doges collision with player==============================//
    if((playerX < doge1X + dogeWidth) && (playerX + playerWidth  > doge1X) &&
            (playerY < doge1Y + dogeHeight) && (playerY + playerHeight > doge1Y))
    {
        //console.log("doge 1 collision");
        document.forms["game"].submit();
    }
    if((playerX < doge2X + dogeWidth) && (playerX + playerWidth  > doge2X) &&
            (playerY < doge2Y + dogeHeight) && (playerY + playerHeight > doge2Y))
    {
        //console.log("doge 2 collision");
        document.forms["game"].submit();
    }
    if((playerX < doge3X + dogeWidth) && (playerX + playerWidth  > doge3X) &&
            (playerY < doge3Y + dogeHeight) && (playerY + playerHeight > doge3Y))
    {
        //console.log("doge 3 collision");
        document.forms["game"].submit();
    }
    if((playerX < doge4X + dogeWidth) && (playerX + playerWidth  > doge4X) &&
            (playerY < doge4Y + dogeHeight) && (playerY + playerHeight > doge4Y))
    {
        //console.log("doge 4 collision");
        document.forms["game"].submit();
    }
    if((playerX < doge5X + dogeWidth) && (playerX + playerWidth  > doge5X) &&
            (playerY < doge5Y + dogeHeight) && (playerY + playerHeight > doge5Y))
    {
        //console.log("doge 5 collision");
        document.forms["game"].submit();
    }
    if((playerX < doge6X + dogeWidth) && (playerX + playerWidth  > doge6X) &&
            (playerY < doge6Y + dogeHeight) && (playerY + playerHeight > doge6Y))
    {
        //console.log("doge 6 collision");
        document.forms["game"].submit();
    }
    if((playerX < doge7X + dogeWidth) && (playerX + playerWidth  > doge7X) &&
            (playerY < doge7Y + dogeHeight) && (playerY + playerHeight > doge7Y))
    {
        //console.log("doge 7 collision");
        document.forms["game"].submit();
    }
    //====================Doges collision with player==============================//
    
    
    //====================Doges collision with bullet=============================//
    if((bulletX < doge1X + dogeWidth) && (bulletX + bulletWidth  > doge1X) &&
            (playerY+30 < doge1Y + dogeHeight) && (playerY+30 + bulletHeight > doge1Y))
    {
        //console.log("Morte doge 1 collision");
        playerScore += 10;
        doge1X += 100;
        doge1Speed -= 0.5;
        bulletWidth = 0;
    }
    if((bulletX < doge2X + dogeWidth) && (bulletX + bulletWidth  > doge2X) &&
            (playerY+30 < doge2Y + dogeHeight) && (playerY+30 + bulletHeight > doge2Y))
    {
        //console.log("Morte doge 2 collision");
        playerScore += 10;
        doge2X += 100;
        doge2Speed -= 0.5;
        bulletWidth = 0;
    }
    if((bulletX < doge3X + dogeWidth) && (bulletX + bulletWidth  > doge3X) &&
            (playerY+30 < doge3Y + dogeHeight) && (playerY+30 + bulletHeight > doge3Y))
    {
        //console.log("Morte doge 3 collision");
        playerScore += 10;
        doge3X += 100;
        doge3Speed -= 0.5;
        bulletWidth = 0;
    }
    if((bulletX < doge4X + dogeWidth) && (bulletX + bulletWidth  > doge4X) &&
            (playerY+30 < doge4Y + dogeHeight) && (playerY+30 + bulletHeight > doge4Y))
    {
        //console.log("Morte doge 4 collision");
        playerScore += 10;
        doge4X += 100;
        doge4Speed -= 0.5;
        bulletWidth = 0;
    }
    if((bulletX < doge5X + dogeWidth) && (bulletX + bulletWidth  > doge5X) &&
            (playerY+30 < doge5Y + dogeHeight) && (playerY+30 + bulletHeight > doge5Y))
    {
        //console.log("Morte doge 5 collision");
        playerScore += 10;
        doge5X += 100;
        doge5Speed -= 0.5;
        bulletWidth = 0;
    }
    if((bulletX < doge6X + dogeWidth) && (bulletX + bulletWidth  > doge6X) &&
            (playerY+30 < doge6Y + dogeHeight) && (playerY+30 + bulletHeight > doge6Y))
    {
        //console.log("Morte doge 6 collision");
        playerScore += 10;
        doge6X += 100;
        doge6Speed -= 0.5;
        bulletWidth = 0;
    }
    if((bulletX < doge7X + dogeWidth) && (bulletX + bulletWidth  > doge7X) &&
            (playerY+30 < doge7Y + dogeHeight) && (playerY+30 + bulletHeight > doge7Y))
    {
        //console.log("Morte doge 7 collision");
        playerScore += 10;
        doge7X += 100;
        doge7Speed -= 0.5;
        bulletWidth = 0;
    }
    //====================Doges collision with bullet=============================//
    
}, 41); //24fps
//=============================Doge movement=====================================================//


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
        bulletImg = new Image();
        bulletImg.src = "images/tiro.png";
        
        bulletImg.onload = function()
        {
            gameContext.drawImage(bulletImg, bulletX, playerY+30);
            bulletWidth = this.width;
            bulletHeight = this.height;
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


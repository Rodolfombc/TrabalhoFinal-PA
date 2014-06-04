<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Trabalho 3 Programacao Avancada</title>
        
        <!-- Adding .css files -->
        <link rel="stylesheet" type="text/css" href="css/canvas.css">
        <link rel="stylesheet" type="text/css" href="css/buttons.css">
        
        <!-- Adding .css files -->
        <script type="text/javascript" src="javascript/menu.js"></script>
    </head>
    <body>
        <form name="menu" action="GameManager" method="get">
            <div class ="mainCanvas">
                <canvas id="gameCanvas" width="960px" height="720px" >
                    <script type="text/javascript">
                        init();
                    </script>
                </canvas>
                <input type="text" name="playername" size="50" maxlength='10' style="position: absolute; left: 31%; top: 630px"/>
                
                <input type="submit" name="playButton" value="Jogar" id="playButton" />
                <input type="button" name="quitButton" value="Quit" id="quitButton" onclick="Javascript:window.close();"/>
            </div>
        </form>
    </body>
</html>

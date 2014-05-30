<%-- 
    Document   : game
    Created on : 25/05/2014, 16:38:32
    Author     : Rodolfo
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Trabalho 3 Programacao Avancada</title>
        
        <!-- Adding .css files -->
        <link rel="stylesheet" type="text/css" href="css/canvas.css">
        <!-- Adding .css files -->
        <script type="text/javascript" src="javascript/game.js"></script>
    </head>
    <body>
        <form name="game" action="GameManager" method="post">
            <div class ="mainCanvas">
                <canvas id="gameCanvas" width="960px" height="720px" >
                    <input type="hidden" name="playerScore"/>
                    <script type="text/javascript">
                        init();  
                    </script>
                </canvas>
            </div>
        </form>        
    </body>
</html>

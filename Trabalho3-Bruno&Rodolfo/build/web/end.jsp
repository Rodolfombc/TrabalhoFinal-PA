<%-- 
    Document   : end
    Created on : 01/06/2014, 12:55:45
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
        <script type="text/javascript" src="javascript/end.js"></script>
    </head>
    <body>
        <form name="game" action="GameManager" method="post">
            <div class ="mainCanvas">
                <canvas id="gameCanvas" width="960px" height="720px" >
                    <input type="number" id="playerScore" name="playerScore"/>
                    <script type="text/javascript">
                        init();  
                    </script>
                </canvas>
            </div>
        </form>        
    </body>
</html>

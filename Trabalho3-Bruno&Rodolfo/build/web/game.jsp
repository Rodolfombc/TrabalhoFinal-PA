<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
            <!-- Receiving values from GameManager -->
            <c:set var="playername" value="${playername}"/>
            <!-- Preparing variables to send back to the GameManager -->
            <input type="hidden" id="playerName" name="playerName"/>
            <input type="hidden" id="playerScore" name="playerScore"/>
            <div class ="mainCanvas">
                <canvas id="gameCanvas" width="960px" height="720px" >
                    
                    <script type="text/javascript">
                        init();  
                        var player = "${playername}";
                        setName(player);
                        document.getElementById("playerName").value= player;
                        //console.log(player);
                    </script>
                </canvas>
            </div>
        </form>        
    </body>
</html>

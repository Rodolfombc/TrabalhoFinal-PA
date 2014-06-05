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
        <script type="text/javascript" src="javascript/end.js"></script>
    </head>
    <body>
        <form name="game" action="GameManager" method="post">
            <!-- Receiving values from GameManager -->
            <c:set var="players" value="${players}"/>
            <c:set var="scores" value="${scores}"/>
            <div class ="mainCanvas">
                <canvas id="gameCanvas" width="960px" height="720px" >
                    <script type="text/javascript">
                        init();  
                        var players = "${players}".split(",");
                        var scores = "${scores}".split(",");
                        setPlayerList(players);
                        setScoreList(scores);
                        
                        console.log(players);
                        console.log(scores);
                    </script>
                </canvas>
            </div>
        </form>        
    </body>
</html>

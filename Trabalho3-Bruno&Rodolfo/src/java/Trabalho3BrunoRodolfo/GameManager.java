package Trabalho3BrunoRodolfo;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class GameManager extends HttpServlet 
{
    String playerName = "";
    int playerScore = 0;
    
    Map<String, Object> playerScoresMap = new HashMap<>();
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    {
        playerName = request.getParameter("playername");
        //System.out.println(playerName);
        
        request.setAttribute("playername", playerName);
        
        request.getRequestDispatcher("./game.jsp").forward(request, response);
    }

    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    {
        playerName = request.getParameter("playerName");
        playerScore = Integer.parseInt(request.getParameter("playerScore"));
        System.out.println(playerName);
        System.out.println(playerScore);
        
        playerScoresMap.put(playerName, playerScore);
        
        System.out.println(playerScoresMap.values());
        
        
        
        request.getRequestDispatcher("./end.jsp").forward(request, response);
    }

}

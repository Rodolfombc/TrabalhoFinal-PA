package Trabalho3BrunoRodolfo;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class GameManager extends HttpServlet 
{
    String playerName;
    int playerScore;
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        playerName = request.getParameter("playername");
        System.out.println(playerName);
        request.getRequestDispatcher("./game.jsp").forward(request, response);
    }

    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String player = request.getParameter("username");
        System.out.println(player);
        request.getRequestDispatcher("./game.jsp").forward(request, response);
    }

}
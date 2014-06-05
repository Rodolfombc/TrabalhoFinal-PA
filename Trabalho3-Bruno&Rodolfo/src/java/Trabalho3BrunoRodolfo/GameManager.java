package Trabalho3BrunoRodolfo;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class GameManager extends HttpServlet 
{
    String playerName = "";
    int playerScore = 0;
    
    Map<String, Integer> playerScoresMap = new HashMap<>();
    Map<String, Integer> sorted;
    ArrayList<String> playersList;
    ArrayList<Integer> scoreList;
    
    String playerArray = "";
    String scoreArray = "";
    
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
        //System.out.println(playerName);
        //System.out.println(playerScore);
        
        playerScoresMap.put(playerName, playerScore);
        sorted = sortByValues(playerScoresMap);
        
        //System.out.println("Unsorted: "+playerScoresMap);
        //System.out.println("Sorted: "+sorted);
        
        playersList = new ArrayList<String>(sorted.keySet());
        scoreList = new ArrayList<Integer>(sorted.values());
        System.out.println(playersList);
        System.out.println(scoreList);
        
        for(String name: playersList)
        {
            playerArray += name + ","; 
        }
        for(int number: scoreList)
        {
            scoreArray += Integer.toString(number) + ",";
        }
        
        request.setAttribute("players", playerArray);
        request.setAttribute("scores", scoreArray);
                
        request.getRequestDispatcher("./end.jsp").forward(request, response);
    }
    
    
    public <K extends Comparable, V extends Comparable> Map<K, V> sortByValues(Map<K, V> map) 
    {
        List<Map.Entry<K, V>> entries = new LinkedList<Map.Entry<K, V>>(map.entrySet());

        Collections.sort(entries, new Comparator<Map.Entry<K, V>>() 
        {
            @Override
            public int compare(Entry<K, V> o1, Entry<K, V> o2) {
                return o2.getValue().compareTo(o1.getValue());
            }
        });

        //LinkedHashMap will keep the keys in the order they are inserted
        //which is currently sorted on natural ordering
        Map<K, V> sortedMap = new LinkedHashMap<K, V>();

        for (Map.Entry<K, V> entry : entries) {
            sortedMap.put(entry.getKey(), entry.getValue());
        }
        return sortedMap;
    }

}
    

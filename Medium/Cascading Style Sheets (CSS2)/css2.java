import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		// your code goes here
		Scanner in = new Scanner(System.in);
	    int rules = in.nextInt();
	    int queries = in.nextInt();
	    Map<Integer, Map<Integer, AbstractMap.SimpleEntry<Integer, Integer>>> map = new HashMap();
	    for(int r=0; r<rules; r++) {
	        int id = in.nextInt();
	        int attr = in.nextInt();
	        int val = in.nextInt();
	        int priority = in.nextInt();
	        if(map.containsKey(id) == false) {
	            AbstractMap.SimpleEntry<Integer, Integer> e2 = new AbstractMap.SimpleEntry(val, priority);
	            Map<Integer, AbstractMap.SimpleEntry<Integer,Integer>> e1 = new HashMap();
	            e1.put(attr, e2);
	            map.put(id,e1);
	        }
	        if(priority >= map.get(id).get(attr).getValue()) {
	            AbstractMap.SimpleEntry<Integer, Integer> e2 = new AbstractMap.SimpleEntry(val, priority);
	            Map<Integer, AbstractMap.SimpleEntry<Integer,Integer>> e1 = new HashMap();
	            e1.put(attr, e2);
	            map.put(id,e1);
	        }
	    }
	    for(int q=0; q<queries; q++) {
	        int id = in.nextInt();
	        int attr = in.nextInt();
	        System.out.println(map.get(id).get(attr).getKey());
	    }
      in.close();
	}
}
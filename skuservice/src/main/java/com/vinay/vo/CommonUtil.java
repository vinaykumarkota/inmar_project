package com.vinay.vo;

import org.springframework.stereotype.Component;

@Component
public class CommonUtil {
	
	public static String getStatusCode(String status){
		if(status.equalsIgnoreCase("active"))
			return "y";
		else if(status.equalsIgnoreCase("inactive"))
			return "n";
		return "y";
	}

	public static String getStatus(String status){
		if(status.equalsIgnoreCase("y"))
			return "active";
		else if(status.equalsIgnoreCase("n"))
			return "inactive";
		return "active";
	}
}

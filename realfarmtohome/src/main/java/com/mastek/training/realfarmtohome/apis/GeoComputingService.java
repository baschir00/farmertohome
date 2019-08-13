package com.mastek.training.realfarmtohome.apis;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mastek.training.realfarmtohome.entities.Customer;
import com.mastek.training.realfarmtohome.entities.Farmer;

@Component
@Scope("singleton")
public class GeoComputingService {
	
	private String apiKey;
	private String requestTemplate;

	public GeoComputingService() {
		this.setApiKey("");
		this.setRequestTemplate("https://maps.googleapis.com/maps/api/geocode/json?key=%s&address=%s");
	}
	
	private void setApiKey(String apiKey) {
		this.apiKey = apiKey;
	}

	public String getApiKey() {
		return apiKey;
	}

	private String getRequestTemplate() {
		return requestTemplate;
	}

	private void setRequestTemplate(String requestTemplate) {
		this.requestTemplate = requestTemplate;
	}
	
	private String generateRequest(String address) {
		String formattedAddress = address.replace(' ', '+');
		return String.format(getRequestTemplate(), getApiKey(), formattedAddress);
	}
	
	
	public String getGeoCodeJSON(String address) {
		
		// create request with API key & address parameters
	    final String uri = generateRequest(address);

	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);

	    System.out.println(result);
	    
	    return result;
	}

	private double[] getCoordinatesFromJSON(String jsonString) {
		double[] coords = new double[2];
		JsonObject jsonObject = new JsonParser().parse(jsonString).getAsJsonObject();

		coords[0] = jsonObject.get("address_components/geometry/location/lat").getAsDouble(); //John
		coords[1] = jsonObject.get("address_components/geometry/location/lng").getAsDouble();
		
		return coords;
	}
	
	public Farmer addFarmerCoordinates(Farmer farmer, String address) {
		String json = getGeoCodeJSON(address);
		
		double[] coords = getCoordinatesFromJSON(json);
		farmer.setFarmerLocationLat(coords[0]);
		farmer.setFarmerLocationLng(coords[1]);
	    
	    return farmer;
	}
	
	public Farmer addCustomerCoordinates(Customer customer, String address) {
		String json = getGeoCodeJSON(address);
		
		double[] coords = getCoordinatesFromJSON(json);
		customer.setCustomerLocationLat(coords[0]);
		customer.setCustomerLocationLng(coords[1]);
	    
	    return customer;
	}
	
	public double calculateDistance() {
		
	}
 	
	

}



package com.mastek.training.realfarmtohome.apis;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

@Component
public class APIConfig extends ResourceConfig {
	public APIConfig() {
		register(CORSFilter.class);
		//
		
		//register each 
		register(FarmerService.class);
		register(ProductService.class);
		register(CustomerService.class);
	}
}
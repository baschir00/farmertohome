package com.mastek.training.realfarmtohome.apis;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

//create the jersey config class
@Component
public class APIConfig extends ResourceConfig {
	public APIConfig() {
		//register each service
		register(CORSFilter.class);
		register(CustomerService.class);
		register(FarmerService.class);
		register(ProductService.class);
		register(OrderService.class);
		register(OrderItemService.class);
		register(LoginService.class);
		register(AdminService.class);
	}
}

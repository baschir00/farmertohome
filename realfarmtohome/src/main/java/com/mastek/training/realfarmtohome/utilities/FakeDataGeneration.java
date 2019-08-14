package com.mastek.training.realfarmtohome.utilities;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;

import com.github.javafaker.Faker;
import com.github.javafaker.idnumbers.SvSEIdNumber;
import com.mastek.training.realfarmtohome.apis.CustomerService;
import com.mastek.training.realfarmtohome.apis.FarmerService;
import com.mastek.training.realfarmtohome.entities.Farmer;





public class FakeDataGeneration {
	
	
	@Autowired 
	FarmerService farmerservice;
	
	@Autowired 
	CustomerService customerservice;
//	public  void farmer() {
//		farmerservice.registerOrUpdateFarmer();
//	}
//	
//	public void customer() {
//		customerservice.registerOrUpdateCustomer(null);
//	}
//	
	// loop for iterating through the main loop
	
		public static void main() {
			
			
		}
		
		public void genFarmers() {
		int n = 1000;
		Faker faker = new Faker(new Locale ("en-GB"));
		Farmer farmer = new Farmer();
		String name = faker.name().fullName();
		String password = faker.bothify("%%##%%") ;
		String email = faker.bothify("%%%##%%@gmail.com");
		String streetAddress = faker.address().streetAddress();
		for (int i = 0; i < n; i++) {
			
			farmer.setFarmerName(faker.name().fullName());
			farmer.setFarmerLocation(faker.address().streetAddress());
			farmer.setFarmerPassword(faker.bothify("%%##%%"));
			farmer.setFarmerEmail(faker.bothify("%%%##%%@gmail.com"));
			farmerservice.registerOrUpdateFarmer(farmer);
			farmerservice.assignProduct(1, 1)
		}
		
		
		}
	}
	
	
	
	
	
	

}

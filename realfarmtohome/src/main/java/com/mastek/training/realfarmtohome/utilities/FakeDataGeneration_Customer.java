package com.mastek.training.realfarmtohome.utilities;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;

import com.github.javafaker.Faker;
import com.mastek.training.realfarmtohome.apis.CustomerService;
import com.mastek.training.realfarmtohome.apis.FarmerService;
import com.mastek.training.realfarmtohome.entities.Customer;
import com.mastek.training.realfarmtohome.entities.Farmer;





public class FakeDataGeneration_Customer {
	
	
	
	@Autowired 
	CustomerService customerservice;
	
	
	public void genCustomers() {
		int n = 1000;
		Faker faker = new Faker(new Locale ("en-GB"));
		Customer customer = new Customer();
		String name = faker.name().fullName();
		String password = faker.bothify("%%##%%") ;
		String email = faker.bothify("%%%##%%@gmail.com");
		String streetAddress = faker.address().streetAddress();
		for (int i = 0; i < n; i++) {
			
			customer.setCustomerName(faker.name().fullName());
			customer.setCustomerAddress(faker.address().streetAddress());
			customer.setCustomerPassword(faker.bothify("%%##%%"));
			customer.setCustomerEmail(faker.bothify("%%%##%%@gmail.com"));
			customerservice.registerOrUpdateCustomer(customer);
		}
		
		
		}

}

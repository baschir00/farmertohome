package com.mastek.training.realfarmtohome;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mastek.training.realfarmtohome.apis.CustomerService;
import com.mastek.training.realfarmtohome.entities.Customer;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomerApplicationTest {

	@Autowired
	CustomerService farmerService;
	
	@Autowired
	Customer cust;
	
	@Test
	public void addCustomerUsingService() {
		
		//cust.setCustomerId(1);
		cust.setCustomerName("John");
		cust.setCustomerEmail("Customer");
		cust.setCustomerAddress("Leeds");
		cust = farmerService.registerOrUpdateCustomer(cust);
		assertNotNull(cust);
		
	}///
	
	@Test
	public void findByCustomerIdUsingService() {
		int customerId =1;
		assertNotNull(farmerService.findByCustomerId(customerId));
		
	}
	
	
	
	
}

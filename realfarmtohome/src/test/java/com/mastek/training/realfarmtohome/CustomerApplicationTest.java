package com.mastek.training.realfarmtohome;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mastek.training.realfarmtohome.apis.CustomerService;
import com.mastek.training.realfarmtohome.entities.Customer;
import com.mastek.training.realfarmtohome.entities.Farmer;
import com.mastek.training.realfarmtohome.entities.Product;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomerApplicationTest {

	@Autowired
	CustomerService customerService;
	
	@Autowired
	Customer cust;
	
	@Test
	public void addCustomerUsingService() {
		
		cust.setCustomerId(1);
		cust.setCustomerName("John");
		cust.setCustomerEmail("Customer");
		cust.setCustomerAddress("Leeds");
		cust = customerService.registerOrUpdateCustomer(cust);
		assertNotNull(cust);
		
	}///
	
	@Test
	public void findByCustomerIdUsingService() {
		int customerId =1;
		assertNotNull(customerService.findByCustomerId(customerId));
		
	}
	
	@Test
	public void deleteCustomerUsingService() {
		cust = customerService.registerOrUpdateCustomer(cust);
		customerService.deleteCustomer(cust);
		assertNull(customerService.findByCustomerId(cust.getCustomerId()));
	}
	
	@Test
	public void manageAssociations() {
		
		Customer c1 = new Customer();
		c1.setCustomerName("Ollie");
		c1.setCustomerEmail("Ollie@gmail.com");
		
		Product p1 = new Product();
		p1.setProductName("Potatos");
		p1.setProductType("Veg");
		
		Product p2 = new Product();
		p2.setProductName("Cucumber");
		p2.setProductType("Veg");
		
		c1.getManyproduct().add(p1);
		c1.getManyproduct().add(p2);
		
		p1.setCurrentCustomer(c1);
		p2.setCurrentCustomer(c1);
		
		customerService.registerOrUpdateCustomer(c1);
		
	}
	
	
}

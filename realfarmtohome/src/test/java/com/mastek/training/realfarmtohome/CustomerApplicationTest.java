package com.mastek.training.realfarmtohome;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mastek.training.realfarmtohome.apis.CustomerService;
import com.mastek.training.realfarmtohome.entities.Customer;
import com.mastek.training.realfarmtohome.entities.Farmer;
import com.mastek.training.realfarmtohome.entities.Order;
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
		
		//cust.setCustomerId(1);
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
    public void manageAssociations() {
       
        Customer c1 = new Customer();
      //  c1.setCustomerId(999);
        c1.setCustomerName("Baschir");
		c1.setCustomerEmail("Customer");
		c1.setCustomerAddress("Leeds");
       
        Order o1 = new Order();
       //o1.setorderId(1);
        
       
        Order o2 = new Order();
        //o2.setorderId(2);
       
        c1.getOrders().add(o1);
        c1.getOrders().add(o2);
       
        o1.setCurrentCustomer(c1);
        o2.setCurrentCustomer(c1);
       
        customerService.registerOrUpdateCustomer(c1);
       
    }
	
}

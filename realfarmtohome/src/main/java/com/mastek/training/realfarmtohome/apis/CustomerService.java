package com.mastek.training.realfarmtohome.apis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.mastek.training.realfarmtohome.entities.Customer;

import com.mastek.training.realfarmtohome.repositories.CustomerRepository;



@Component
@Scope("singleton")
public class CustomerService {

@Autowired
CustomerRepository customerRepository;
	
public Customer registerOrUpdateCustomer(Customer cust) {
	cust = customerRepository.save(cust);
	System.out.println("Customer registered"+cust);
	return cust;
}

public Customer findByCustomerId(int customerId) {
	
	try {
		return customerRepository.findById(customerId).get();
	} catch (Exception e) {
		e.printStackTrace();
		return null;// null
	}
	
}
	
	
}

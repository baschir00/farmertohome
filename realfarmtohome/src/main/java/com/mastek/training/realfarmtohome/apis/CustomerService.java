package com.mastek.training.realfarmtohome.apis;

import java.util.NoSuchElementException;

import javax.transaction.Transactional;
import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.mastek.training.realfarmtohome.entities.Customer;
import com.mastek.training.realfarmtohome.repositories.CustomerRepository;

@Component
@Scope("singleton")
@Path("/customer/")
public class CustomerService {

	@Autowired
	CustomerRepository customerRepository;

	@Path("/register") // Method with path param
	@POST // http method
	@Consumes({ // Declare all possible types of return value
			MediaType.APPLICATION_FORM_URLENCODED })
	@Produces({ // Declare all possible types of return value
			MediaType.APPLICATION_JSON })
	@Transactional
	public Customer registerOrUpdateCustomer(@BeanParam Customer cust) {
		cust = customerRepository.save(cust);
		System.out.println("Customer registered" + cust);
		return cust;
	}

	@Path("/{customerId}") // Method with path param
	@GET // http method
	@Produces({ // Declare all possible types of return value
			MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Transactional
	public Customer findByCustomerId(@PathParam("customerId") int customerId) {

		try {
			return customerRepository.findById(customerId).get();
		} catch (Exception e) {
			e.printStackTrace();
			return null;// null
		}

	}

	@Path("/delete") // Method with path param
	@DELETE // http method
	@Consumes({ // Declare all possible types of return value
			MediaType.APPLICATION_FORM_URLENCODED })
	@Produces({ // Declare all possible types of return value
			MediaType.APPLICATION_JSON })
	@Transactional
	public Customer deleteCustomer(@BeanParam Customer customer) {
		try {
			if (customerRepository.findById(customer.getCustomerId()).get() != null) {
				customerRepository.delete(customer);
				return customer;
			} else {
				throw new NoSuchElementException();
			}
		} catch (NoSuchElementException e) {
			System.out.println("Customer not found");
			return null;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}

	}

}

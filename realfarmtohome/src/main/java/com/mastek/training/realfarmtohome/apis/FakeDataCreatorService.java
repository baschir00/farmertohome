package com.mastek.training.realfarmtohome.apis;

import java.util.Locale;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.github.javafaker.Faker;
import com.mastek.training.realfarmtohome.entities.Admin;
import com.mastek.training.realfarmtohome.entities.Customer;
import com.mastek.training.realfarmtohome.entities.Farmer;
import com.mastek.training.realfarmtohome.entities.Product;

@Component
@Scope("singleton")
@Path("/fake/")
public class FakeDataCreatorService {

	@Autowired
	CustomerService customerservice;
	
	@Autowired
	FarmerService farmerservice;
	
	@Autowired
	ProductService productservice;
	
	@Autowired
	AdminService adminservice;
	
	@Autowired
	FakeDataCreatorService service;
	
	@Autowired
	FarmerService farmerService;
	
	
	Faker faker;

	
	public FakeDataCreatorService() {
		faker = new Faker(new Locale("en-GB"));
	}

	
	@GET
	@Path("/create")
	@Produces({MediaType.APPLICATION_JSON})
	public void createData() {
		Farmer farmer;
		Product product;
		for (int i = 0; i < 50; i++) {
			service.genCustomer();
			farmer = service.genFarmer();
			for (int j = 0; j < 3; j++) {
				product = service.genProduct();
				farmerService.assignProduct(farmer.getFarmerId(), product.getProductId());
			}
			
			service.genAdmin();
			System.out.println(i);
		}
		
	}

	public Customer genCustomer() {
		
		Customer customer = new Customer();

		customer.setCustomerName(faker.name().fullName());
		customer.setCustomerAddress(faker.address().streetAddress());
		customer.setCustomerPassword(faker.bothify("??##??"));
		customer.setCustomerEmail(faker.bothify("???##??@gmail.com"));
		customerservice.registerOrUpdateCustomer(customer);

		return customer;

	}
	
	public Farmer genFarmer() {
		
		Farmer farmer = new Farmer();

		farmer.setFarmerName(faker.name().fullName());
		farmer.setFarmerLocation(faker.address().streetAddress());
		farmer.setFarmerPassword(faker.bothify("??##??"));
		farmer.setFarmerEmail(faker.bothify("???##??@gmail.com"));
		farmerservice.registerOrUpdateFarmer(farmer);

		return farmer;

	}
	
	public Product genProduct() {

		Product product = new Product();

		product.setProductName(faker.food().ingredient());
		product.setUnitPrice(faker.number().randomDouble(2, 0, 100));
		product.setDescription(faker.chuckNorris().fact());
		product.setProductType(faker.pokemon().name());
		productservice.registerOrUpdateProduct(product);

		return product;

	}
	
	public Admin genAdmin() {

		Admin admin = new Admin();

		admin.setAdminUsername(faker.bothify("???##??@gmail.com"));
		admin.setAdminPassword(faker.bothify("??##??"));
		adminservice.registerOrUpdateAdmin(admin);

		return admin;

	}

}

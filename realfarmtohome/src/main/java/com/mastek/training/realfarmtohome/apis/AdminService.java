package com.mastek.training.realfarmtohome.apis;

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

import com.mastek.training.realfarmtohome.entities.Admin;
import com.mastek.training.realfarmtohome.entities.Customer;
import com.mastek.training.realfarmtohome.entities.Product;
import com.mastek.training.realfarmtohome.repositories.AdminRepository;


@Component
@Scope("singleton")
@Path("/admin/")
public class AdminService {
	
	@Autowired
	AdminRepository adminRepository;
	
	
	@Path("/register") // Method with path param
	@POST // http method
	@Consumes({ // Declare all possible types of return value
			MediaType.APPLICATION_FORM_URLENCODED })
	@Produces({ // Declare all possible types of return value
			MediaType.APPLICATION_JSON })
	@Transactional
	public Admin registerOrUpdateAdmin(@BeanParam Admin adm) {
		adm = adminRepository.save(adm);
		System.out.println("Admin registered" + adm);
		return adm;
	}
	
	@Path("/delete/{adminId}") // Method with path param
	@DELETE // http method
	public void deleteByCustomerId(@PathParam("adminId") int adminId) {
    adminRepository.deleteById(adminId);
	}
	
	
	@Path("find/{adminId}") // Method with path param
	@GET // http method
	@Produces({ // Declare all possible types of return value
			MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Transactional
	public Admin findByAdminId(@PathParam("adminId") int adminId) {

		try {
			return adminRepository.findById(adminId).get();
		} catch (Exception e) {
			e.printStackTrace();
			return null;// null
		}

	}

	
	@GET
	@Path("/list")
	@Produces({MediaType.APPLICATION_JSON})
	public Iterable<Admin> listAllProducts(){
		return adminRepository.findAll();
	}
}
	



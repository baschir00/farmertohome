package com.mastek.training.realfarmtohome.apis;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;

import com.mastek.training.realfarmtohome.entities.Farmer;
import com.mastek.training.realfarmtohome.repositories.FarmerRepository;

// Login service for farmer and customer
@Path("/login/")
public class LoginService {

	@Autowired
	// Import for Farmer.findByEmail()
	FarmerRepository farmRepo;

	@Transactional
	@POST
	@Path("/farmer")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	// REST service for farmer login 
	// Returns 200 and Farmer details on successful login
	// Or 400 on login failure
	public Response farmerLoginService(
			@FormParam("farmerEmail") String farmerEmail,
			@FormParam("farmerPassword") String farmerPassword) {
		System.out.println(farmerEmail + " : " + farmerPassword);
		try {
			// Attempt farmer login with provided details
			Farmer farmer = farmerLogin(farmerEmail, farmerPassword);
			System.out.println(farmer);
			System.out.println("Farmer value: " + farmer);
			
			// Return details on successful login
			if (farmer != null) {
				return Response.status(Response.Status.OK).entity(farmer).build();
			} else {
				return Response.status(Response.Status.BAD_REQUEST).entity("FARMER_AUTH_FAILURE").build();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return Response.serverError().entity("SERVER_ERROR").build();
		}
	}
	
	// Check password for farmer based on email
	public Farmer farmerLogin(String farmerEmail, String farmerPassword) throws Exception {
		try {
			// Get farmer by email
			Farmer farmer = farmRepo.findByEmail(farmerEmail);
			System.out.println("farmer email search by :" + farmerEmail + " : " + farmer);
			
			// Check if farmer with email exists and if password matches expected
			if (farmer != null && farmerPassword.equals(farmer.getFarmerPassword())) {
				return farmer;
			} else {
				return null;
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception();
		}
	}
}

package com.mastek.training.realfarmtohome.apis;


import java.util.HashSet;
import java.util.Set;

import javax.transaction.Transactional;
import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.mastek.training.realfarmtohome.entities.Farmer;
import com.mastek.training.realfarmtohome.entities.Product;
import com.mastek.training.realfarmtohome.repositories.FarmerRepository;
import com.mastek.training.realfarmtohome.repositories.ProductRepository;


@Component
@Scope("singleton")
@Path("/farmer/")
public class FarmerService {

@Autowired
private FarmerRepository farmerRepository;

@Autowired
private ProductService productService;

@GET
@Path("/list")
@Produces({MediaType.APPLICATION_JSON})
public Iterable<Farmer> listAllProducts(){
	return farmerRepository.findAll();
}


@POST
@Path("/register")
@Produces(MediaType.APPLICATION_JSON) // object to be given in json
@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
@Transactional
public Farmer registerOrUpdateFarmer(@BeanParam Farmer far) {
	far = farmerRepository.save(far);
	System.out.println("Farmer registered"+far);
	return far;
}

public Set<Farmer> getFarmers() {
	Set<Farmer> target = new HashSet<Farmer>();
	farmerRepository.findAll().forEach(target::add);
	target.forEach((e) -> {this.findByFarmerId(e.getFarmerId());});
	return target;
}

@Path("/find/{farmerId}")
@GET //HTTP method used to call the api
@Produces({//declare all possible content types of return value
	MediaType.APPLICATION_JSON, // object to be given in json
	MediaType.APPLICATION_XML // Object to be given in XML
})
@Transactional
public Farmer findByFarmerId(@PathParam("farmerId")int farmerId) {
    try {
        Farmer far = farmerRepository.findById(farmerId).get();
        System.out.println(far.getAssignment().size()
					+"Assignment fetched");
    	return far;
    } catch (Exception e) {
        e.printStackTrace();
        return null;
    }
}


//@Transactional
//public Farmer findByFarmerLocation(@PathParam("location")String location) {
//    try {
//        Farmer far = farmerRepository.findByLocation(location).get();
//        System.out.println(far.getAssignment().size()
//					+"Assignment fetched");
//    	return far;
//    } catch (Exception e) {
//        e.printStackTrace();
//        return null;
//    }
//}

@DELETE //delete http method
@Path("/delete/{farmerId}")
public void deleteByFarmerId(@PathParam("farmerId") int farmerId) {
     farmerRepository.deleteById(farmerId);
}

@Transactional
@POST
@Path("/assign/product")
@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
@Produces(MediaType.APPLICATION_JSON)
public Set<Product> assignProduct(
		@FormParam("farmerId") int farmerId, 
		@FormParam("productId") int productId) {
	try {
		Farmer farm = findByFarmerId(farmerId);
		System.out.println(farm);
		Product prod = productService.findByProductId(productId);
		System.out.println(prod);
		farm.getAssignment().add(prod);
		prod.setCurrentFarmer(farm);
		farm= registerOrUpdateFarmer(farm);
		System.out.println(farm);
	return farm.getAssignment();
} catch(Exception e) {
	e.printStackTrace();
	return null;
}

}
}






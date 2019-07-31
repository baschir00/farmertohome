package com.mastek.training.realfarmtohome.apis;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.mastek.training.realfarmtohome.entities.Product;
import com.mastek.training.realfarmtohome.repositories.ProductRepository;

@Component

@Scope("singleton")
@Path("/product/")
public class ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	public ProductService() {
		System.out.println("Product Service Created");
	}
	
//	@GET
//	@Path("/list")
//	@Produces(MediaType.APPLICATION_JSON)
	public Iterable<Product> listAllProducts(){
		return productRepository.findAll();
	}
	
	@POST
    @Path("/register")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
	public Product registerOrUpdateProduct(Product prod) {
		prod = productRepository.save(prod);
		System.out.println("Product Registered" + prod);
		return prod;
	}
	
//	@Path("/find/{productId}")
//	@GET //HTTP method used to call the api
//	@Produces({//declare all possible content types of return value
//		MediaType.APPLICATION_JSON, // object to be given in json
//		MediaType.APPLICATION_XML // Object to be given in XML
//	})
	public Product findByProductId( //@PathParam("")
									int productId) {
		try {
			return productRepository.findById(productId).get();			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
//	
//	@GET
//	@Path("/fetchByProductName")
//	@Produces(MediaType.APPLICATION_JSON)
	public List<Product> fetchProductByProductName(String productName){
		return productRepository.findByProductName(productName);
	}
//		
//	@DELETE //delete http method
//	@Path("/delete/{productId}")
	public void deleteProduct(@PathParam("product")Product product) {
		productRepository.delete(product);
	}
	
	public void deleteByProductId(@PathParam("productId")int productId) {
		productRepository.deleteById(productId);
	}
}

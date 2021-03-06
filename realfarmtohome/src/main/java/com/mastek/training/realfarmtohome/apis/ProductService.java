package com.mastek.training.realfarmtohome.apis;

import java.util.List;

import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import com.mastek.training.realfarmtohome.entities.Order;
import com.mastek.training.realfarmtohome.entities.OrderItem;
import com.mastek.training.realfarmtohome.entities.Product;
import com.mastek.training.realfarmtohome.repositories.ProductRepository;

@Component
@Scope("singleton")
@Path("/product/")
public class ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	OrderItemService orderItemService;
	
	public ProductService() {
		System.out.println("Product Service Created");
	}
	
	@GET
	@Path("/list")
	@Produces({MediaType.APPLICATION_JSON})
	public Iterable<Product> listAllProducts(){
		return productRepository.findAll();
	}
	
	@POST
	@Path("/register")
	@Produces(MediaType.APPLICATION_JSON) // object to be given in json
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED) 
	@Transactional
	public Product registerOrUpdateProduct(@BeanParam Product prod) {
		Product currentProd = findByProductId(prod.getProductId());
		if(currentProd!=null) {
			currentProd.setProductName(prod.getProductName());
			currentProd.setDescription(prod.getDescription());
			currentProd.setProductType(prod.getProductType());
			currentProd.setUnitPrice(prod.getUnitPrice());
		//	currentProd.setCurrentFarmer(prod.getCurrentFarmer());
			prod = productRepository.save(currentProd);
		}
		else {
			prod = productRepository.save(prod);
		}
		System.out.println("Product Registered" + prod);
		return prod;
	}
	
	@Path("/find/{productId}")
	@GET //HTTP method used to call the api
	@Produces({//declare all possible content types of return value
		MediaType.APPLICATION_JSON, // object to be given in json
		MediaType.APPLICATION_XML // Object to be given in XML
	})
	@Transactional
	public Product findByProductId(
			@PathParam("productId")int productId) {
		try {
			Product prod = productRepository.findById(productId).get();
			return prod;		
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@GET
	@Path("/fetchByProductName")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Product> fetchProductByProductName(
			@QueryParam("productName")String productName){
		return productRepository.findByProductName(productName);
		
	}
	
    @GET //http method
    @Path("/fetchByFarmer") //url pattern
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> fetchProductByFarmerId(@QueryParam("currentFarmer")int currentFarmer){
        return productRepository.fetchProductByFarmerId(currentFarmer);
    }
    
    
    @GET //http method
    @Path("/fetchProductByLocation") //url pattern
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> fetchProductByLocation(@QueryParam("farmerLocation")String farmerLocation){
        return productRepository.fetchProductByLocation(farmerLocation);
    }

//	public void deleteProduct(@PathParam("product")Product product) {
//		productRepository.delete(product);
//	}
	
	
	@DELETE //delete http method
	@Path("/delete/{productId}")
	public void deleteByProductId(@PathParam("productId")int productId) {
		productRepository.deleteById(productId);
	}
	
	@Transactional
	@POST
	@Path("/assign/orderItem")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED) //form data
	@Produces({MediaType.APPLICATION_JSON})
	public OrderItem assignOrderItem(@FormParam("productId") int productId, @FormParam("orderItemId")int orderItemId) {
		try {
			//fetch the entities to be associated
			Product prod = findByProductId(productId);
			OrderItem item = orderItemService.findByOrderItemId(orderItemId);
			//manage the association
			//prod.getManyorderitems().add(item);//One assigned with many
			item.setCurrentProduct(prod); //many assigned with
			//update the entity to save the association
			item = orderItemService.registerOrUpdateOrderItem(item);
		
			return item;
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	
	
	
}

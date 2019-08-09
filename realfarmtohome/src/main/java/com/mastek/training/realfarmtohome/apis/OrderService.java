package com.mastek.training.realfarmtohome.apis;

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
import org.springframework.transaction.annotation.Transactional;


import com.mastek.training.realfarmtohome.entities.Customer;
import com.mastek.training.realfarmtohome.entities.Order;
import com.mastek.training.realfarmtohome.entities.OrderItem;
import com.mastek.training.realfarmtohome.repositories.OrderRepository;

@Component
@Scope("prototype")
@Path("/order/")
public class OrderService {

	
	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	CustomerService customerService;
	
	@Autowired
	OrderItemService orderItemService;
		
	@POST
    @Path("/register")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
	public Order registerOrUpdateOrder(@BeanParam Order ord) {
		ord = orderRepository.save(ord);
		System.out.println("Order registered"+ord);
		return ord;
	}	
	
	@Path("/find/{orders}")
	@GET 
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	@Transactional 
	public Order findByOrderId(@PathParam("orders") int orderId) {
		// use the path parameter as the arguments for the method
		///fetches the Employee Details from DB by empno
		
		try {
			Order ord = orderRepository.findById(orderId).get();
			
			System.out.println(ord.getCurrentCustomer());
			return ord;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}
	
	@Transactional
	@POST
	@Path("/assign/customer")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED) //form data
	@Produces({MediaType.APPLICATION_JSON})
	public Order assignCustomer(@FormParam("orderId") int orderId, @FormParam("customerId")int customerId) {
		try {
			//fetch the entities to be associated
			Order ord = findByOrderId(orderId);
			Customer cust = customerService.findByCustomerId(customerId);
			//manage the association
			cust.getOrders().add(ord);//One assigned with many
			ord.setCurrentCustomer(cust); //many assigned with
			//update the entity to save the association
			ord = registerOrUpdateOrder(ord);
		
			
			
			return ord;
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@Transactional
	@POST
	@Path("/assign/orderItem")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED) //form data
	@Produces({MediaType.APPLICATION_JSON})
	public Order assignOrderItem(@FormParam("orderId") int orderId, @FormParam("orderItemId")int orderItemId) {
		try {
			//fetch the entities to be associated
			Order ord = findByOrderId(orderId);
			OrderItem item = orderItemService.findByOrderItemId(orderItemId);
			//manage the association
			ord.getOrderitems().add(item);//One assigned with many
			item.setCurrentOrder(ord); //many assigned with
			//update the entity to save the association
			ord = registerOrUpdateOrder(ord);
		
			
			
			return ord;
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	
	@DELETE //delete http method
	@Path("/delete/{orderId}")
	public void deleteByOrderId(@PathParam("orderId") int orderId) {
		 orderRepository.deleteById(orderId);
	}
	
	
	
	
	
	
}

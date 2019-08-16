package com.mastek.training.realfarmtohome.apis;

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
import org.springframework.transaction.annotation.Transactional;

import com.mastek.training.realfarmtohome.entities.Farmer;
import com.mastek.training.realfarmtohome.entities.OrderItem;
import com.mastek.training.realfarmtohome.repositories.OrderItemRepository;



@Component
@Scope("prototype")
@Path("/orderItem/")
public class OrderItemService {
	
	@Autowired
	OrderItemRepository orderItemRepository;
	
	@GET
	@Path("/list")
	@Produces({MediaType.APPLICATION_JSON})
	public Iterable<OrderItem> listAllOrderItems(){
		return orderItemRepository.findAll();
	}
	
	@POST
    @Path("/register")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
	public OrderItem registerOrUpdateOrderItem(@BeanParam OrderItem item) {
		item = orderItemRepository.save(item);
		System.out.println("Order registered"+item);
		return item;
	}	
	
	@Path("/find/{orderItems}")
	@GET 
	@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
	@Transactional 
	public OrderItem findByOrderItemId(@PathParam("orderItems") int orderItemId) {
		// use the path paramter as the arguements for the method
		///fetches the Employee Details from DB by empno
		
		try {
			OrderItem item = orderItemRepository.findById(orderItemId).get();
			
			System.out.println(item.getCurrentOrder());
			return item;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@DELETE //delete http method
	@Path("/delete/{orderItemId}")
	public void deleteByOrderItemId(@PathParam("orderItemId") int orderItemId) {
		 orderItemRepository.deleteById(orderItemId);
	}
	
	
	

}

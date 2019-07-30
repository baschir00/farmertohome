package com.mastek.training.realfarmtohome.apis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;


import com.mastek.training.realfarmtohome.entities.Order;

import com.mastek.training.realfarmtohome.repositories.OrderRepository;

@Component
@Scope("singleton")
public class OrderService {

	
	@Autowired
	OrderRepository orderRepository;
		

	public Order registerOrUpdateOrder(Order ord) {
		ord = orderRepository.save(ord);
		System.out.println("Order registered"+ord);
		return ord;
	}	
	
	
}

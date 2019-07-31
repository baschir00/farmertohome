package com.mastek.training.realfarmtohome;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mastek.training.realfarmtohome.apis.OrderService;
import com.mastek.training.realfarmtohome.entities.Farmer;
import com.mastek.training.realfarmtohome.entities.Order;
import com.mastek.training.realfarmtohome.entities.OrderItem;
import com.mastek.training.realfarmtohome.entities.Product;

@RunWith(SpringRunner.class)
@SpringBootTest
public class OrderApplicationTest {
	
	@Autowired
	OrderService orderService;
	
	
	@Test
	public void manageAssociations() {
		
		Order o1 = new Order();
		
		OrderItem i1 = new OrderItem();
		OrderItem i2 = new OrderItem();
		
		o1.getOrderitems().add(i1);
		o1.getOrderitems().add(i2);
		
		i1.setCurrentOrder(o1);
		i2.setCurrentOrder(o1);
		
//		o1.getProducts().add(p1);
//		o1.getProducts().add(p2);
//		
//		p1.setCurrentFarmer(f1);
//		p2.setCurrentFarmer(f1);
		
		orderService.registerOrUpdateOrder(o1);
		
	}
}

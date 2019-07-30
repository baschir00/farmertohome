package com.mastek.training.realfarmtohome.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Entity 
@Component
@Scope("prototype")
@Table (name="JPA_orderItem")
public class OrderItem {
	

private int orderItemId;
private Order currentOrder;
private Product currentProduct;

@Id
@GeneratedValue(strategy=GenerationType.AUTO)
public int getOrderItemId() {
	return orderItemId;
}
public void setOrderItemId(int orderItemId) {
	this.orderItemId = orderItemId;
}



@ManyToOne
@JoinColumn(name="FK_OrderId")
public Order getCurrentOrder() {
	return currentOrder;
}
public void setCurrentOrder(Order currentOrder) {
	this.currentOrder = currentOrder;
}


@ManyToOne
@JoinColumn(name="FK_ProductId")
public Product getCurrentProduct() {
	return currentProduct;
}
public void setCurrentProduct(Product currentProduct) {
	this.currentProduct = currentProduct;
}
	


}

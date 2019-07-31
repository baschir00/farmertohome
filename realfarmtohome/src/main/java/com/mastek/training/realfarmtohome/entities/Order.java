package com.mastek.training.realfarmtohome.entities;

 

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

 

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlTransient;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

 


@Entity 
//@Component
@Scope("prototype")
@Table (name="JPA_order")
public class Order implements Serializable {
    
	@FormParam("order")
    private int orderId;
	
	@FormParam("current")
    private Customer currentCustomer;
    
	@XmlTransient
	private Set<OrderItem> orderitems = new HashSet<>();

   
    
	
    @ManyToOne
    @JoinColumn(name="FK_CustomerId")
	public Customer getCurrentCustomer() {
		return currentCustomer;
	}
	public void setCurrentCustomer(Customer currentCustomer) {
		this.currentCustomer = currentCustomer;
	}
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public int getorderId() {
        return orderId;
    }
    public void setorderId(int orderId) {
        this.orderId = orderId;
    }
    
    
    
    
	@Override
	public String toString() {
		return "Order [orderId=" + orderId + "]";
	}
	
	
	@OneToMany(fetch = FetchType.LAZY, cascade=CascadeType.ALL, mappedBy="currentOrder")
	public Set<OrderItem> getOrderitems() {
		return orderitems;
	}
	public void setOrderitems(Set<OrderItem> orderitems) {
		this.orderitems = orderitems;
	}
    

    
    
    
    

 

}
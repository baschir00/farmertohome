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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
@Entity
@Table(name="JPA_CUSTOMER") 




public class Customer implements Serializable {
	
 
	
	
//	@Value("-1")
	private int customerId;
	
	
	
	
	//@Value("default name")
	private String customerName;

	//@Value("default address")
	private String customerAddress;
	
	//@Value("default email")
	private String customerEmail;
	
	
	private Set<Product> manyproduct = new HashSet<>();
	
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
//test test
	public String getCustomerAddress() {
		return customerAddress;
	}

	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}
	
	@Override
	public String toString() {
		return "Farmer [farmerId=" + customerId + ", farmerName=" + customerName + ", farmerAddress=" + customerAddress
				+ ", farmerEmail=" + customerEmail + "]";
	}

	
	@OneToMany(fetch = FetchType.LAZY, cascade=CascadeType.ALL, mappedBy="currentCustomer")
	public Set<Product> getManyproduct() {
		return manyproduct;
	}

	public void setManyproduct(Set<Product> manyproduct) {
		this.manyproduct = manyproduct;
	}
	}

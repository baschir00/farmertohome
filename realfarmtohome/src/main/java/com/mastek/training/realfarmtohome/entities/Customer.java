package com.mastek.training.realfarmtohome.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.transaction.Transactional;
import javax.validation.constraints.NotNull;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlTransient;

import org.springframework.context.annotation.Scope;

//@Component
@Scope("prototype")
@Entity
@Table(name = "JPA_CUSTOMER")

public class Customer implements Serializable {

	@FormParam("customerId")
	private int customerId;

	@FormParam("customerName")
	private String customerName;

	@FormParam("customerAddress")
	private String customerAddress;

	@FormParam("customerEmail")
	@Column(unique=true)
	@NotNull
	private String customerEmail;
	
	@NotNull
	@FormParam("customerPassword")
	private String customerPassword;

	@XmlTransient
	private Set<Order> orders = new HashSet<>();

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

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
	@XmlTransient
	public Set<Order> getOrders() {
		return orders;
	}

	public void setOrders(Set<Order> orders) {
		this.orders = orders;
	}

}

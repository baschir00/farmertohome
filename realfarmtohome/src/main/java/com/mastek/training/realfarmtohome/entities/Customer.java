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
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
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
@NamedQueries({
		// Query to find customer by customerId
		@NamedQuery(name = "Customer.findByEmail", query = "select e from Customer e where e.customerEmail = :customerEmail") })
public class Customer implements Serializable {

	@FormParam("customerId")
	private int customerId;

	@FormParam("customerName")
	private String customerName;

	@FormParam("customerAddress")
	private String customerAddress;
	
	// Farmer/farm location
	@FormParam("customerLocationLat")
	private double customerLocationLat;
	
	// Farmer/farm location
	@FormParam("customerLocationLat")
	private double customerLocationLng;

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

	public double getCustomerLocationLat() {
		return customerLocationLat;
	}

	public void setCustomerLocationLat(double customerLocationLat) {
		this.customerLocationLat = customerLocationLat;
	}

	public double getCustomerLocationLng() {
		return customerLocationLng;
	}

	public void setCustomerLocationLng(double customerLocationLng) {
		this.customerLocationLng = customerLocationLng;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getCustomerPassword() {
		return customerPassword;
	}

	public void setCustomerPassword(String customerPassword) {
		this.customerPassword = customerPassword;
	}

	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", customerName=" + customerName + ", customerAddress="
				+ customerAddress + ", customerEmail=" + customerEmail + "]";
	}

	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "currentCustomer")
	@XmlTransient
	public Set<Order> getOrders() {
		return orders;
	}

	public void setOrders(Set<Order> orders) {
		this.orders = orders;
	}
	
	public double[] coordinates() {
		return new double[] { getCustomerLocationLat(), getCustomerLocationLng() };
	}
	
//	public void setCoordinates(double lat, double lon) {
//		setCustomerLocationLat(lat);
//		setCustomerLocationLng(lon);
//	}

}

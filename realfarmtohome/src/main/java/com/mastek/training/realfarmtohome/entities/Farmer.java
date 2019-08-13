package com.mastek.training.realfarmtohome.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

import org.springframework.context.annotation.Scope;

@Entity
//@Component
@Scope("prototype")
@Table(name = "JPA_FARMER")
@EntityListeners({ FarmerLifeCycleList.class })
@NamedQueries({
	// Query to find farmer by farmerId
	@NamedQuery(name = "Farmer.findByLocation", query = "select e from Farmer e where e.farmerLocation = :farmerLocation"),
	
	// Query to find farmer by farmerId
	@NamedQuery(name = "Farmer.findByEmail", query = "select e from Farmer e where e.farmerEmail = :farmerEmail")
})
@XmlRootElement
public class Farmer implements Serializable {

	@FormParam("farmerId")
	private int farmerId;

	@FormParam("farmerName")
	private String farmerName;
	
	// Farmer/farm location
	@FormParam("farmerLocation")
	private String farmerLocation;

	// Farmer/farm location
	@FormParam("farmerLocationLat")
	private double farmerLocationLat;
	
	// Farmer/farm location
	@FormParam("farmerLocationLat")
	private double farmerLocationLng;

	// Farmer login and contact email
	@FormParam("farmerEmail")
	@Column(unique=true)
	@NotNull
	private String farmerEmail;

	// Farmer login password
	@FormParam("farmerPassword")
	@NotNull
	private String farmerPassword;

	private Set<Product> assignment = new HashSet<>();

	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "currentFarmer")
	@XmlTransient
	public Set<Product> getAssignment() {
		return assignment;
	}

	public void setAssignment(Set<Product> assignment) {
		this.assignment = assignment;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int getFarmerId() {
		return farmerId;
	}

	public void setFarmerId(int farmerId) {
		this.farmerId = farmerId;
	}

	public String getFarmerName() {
		return farmerName;
	}

	public void setFarmerName(String farmerName) {
		this.farmerName = farmerName;
	}

	public String getFarmerLocation() {
		return farmerLocation;
	}

	public void setFarmerLocation(String farmerLocation) {
		this.farmerLocation = farmerLocation;
	}

	public double getFarmerLocationLat() {
		return farmerLocationLat;
	}

	public void setFarmerLocationLat(double farmerLocationLat) {
		this.farmerLocationLat = farmerLocationLat;
	}

	public double getFarmerLocationLng() {
		return farmerLocationLng;
	}

	public void setFarmerLocationLng(double farmerLocationLng) {
		this.farmerLocationLng = farmerLocationLng;
	}

	public String getFarmerEmail() {
		return farmerEmail;
	}

	public void setFarmerEmail(String farmerEmail) {
		this.farmerEmail = farmerEmail;
	}

	public String getFarmerPassword() {
		return farmerPassword;
	}

	public void setFarmerPassword(String farmerPassword) {
		this.farmerPassword = farmerPassword;
	}

	@Override
	public String toString() {
		return "Farmer [farmerId=" + farmerId + ", farmerName=" + farmerName + ", farmerLocation=" + farmerLocation
				+ ", farmerEmail=" + farmerEmail + ", farmerPassword=" + farmerPassword + "]";
	}

}

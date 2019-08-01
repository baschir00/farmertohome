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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Entity 
//@Component
@Scope("prototype")
@Table (name="JPA_FARMER")
@EntityListeners({FarmerLifeCycleList.class})
@NamedQueries({
	@NamedQuery(name="Farmer.findByLocation",
			query="select e from Farmer e where e.farmerLocation = :farmerLocation")
	
})
@XmlRootElement
public class Farmer implements Serializable {
	
	@FormParam("farmerId")
	private int farmerId;
	@FormParam("farmerName")
	private String farmerName;
	@FormParam("farmerLocation")
	private String farmerLocation;
	@FormParam("farmerEmail")
	private String farmerEmail;
	
	private Set<Product> assignment = new HashSet<>();
	
	@OneToMany(fetch = FetchType.LAZY, cascade=CascadeType.ALL, mappedBy="currentFarmer")
	@XmlTransient
	public Set<Product> getAssignment() {
		return assignment;
	}
	
	public void setAssignment(Set<Product> assignment) {
		this.assignment = assignment;
	}
	
	
	@Id
	//@Column(name = "farmer_number")
	@GeneratedValue(strategy=GenerationType.AUTO)
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
	public String getFarmerEmail() {
		return farmerEmail;
	}
	public void setFarmerEmail(String farmerEmail) {
		this.farmerEmail = farmerEmail;
	}
	
	
	@Override
	public String toString() {
		return "Farmer [farmerId=" + farmerId + ", farmerName=" + farmerName + ", farmerLocation=" + farmerLocation
				+ ", farmerEmail=" + farmerEmail + "]";
	}
		

}

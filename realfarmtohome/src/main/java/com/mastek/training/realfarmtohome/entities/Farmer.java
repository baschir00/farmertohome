package com.mastek.training.realfarmtohome.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;


@Entity 
@Component
@Scope("prototype")
@Table (name="JPA_FARMER")
public class Farmer implements Serializable {
	
	private int farmerId;
	private String farmerName;
	private String farmerLocation;
	private String farmerEmail;
	
	
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

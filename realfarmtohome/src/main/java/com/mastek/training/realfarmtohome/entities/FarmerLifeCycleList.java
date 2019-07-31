package com.mastek.training.realfarmtohome.entities;

import javax.persistence.PostLoad;
import javax.persistence.PostPersist;
import javax.persistence.PostUpdate;
import javax.persistence.PrePersist;
import javax.persistence.PreRemove;
import javax.persistence.PreUpdate;



public class FarmerLifeCycleList {

	@PrePersist
	public void beforeInsert(Farmer e) {
		System.out.println("Before Insert: "+e);
	}
	@PostPersist
	public void afterInsert(Farmer e) {
		System.out.println("After Insert: "+e);
	}
	
	@PreUpdate
	public void beforeUpdate(Farmer e) {
		System.out.println("Before Update: "+e);
	}
	@PostUpdate
	public void afterUpdate(Farmer e) {
		System.out.println("After Update: "+e);
	}	
	
	@PreRemove
	public void beforeDelete(Farmer e) {
		System.out.println("Before Delete: "+e);
	}
	@PostLoad
	public void afterSelect(Farmer e) {
		System.out.println("After Select: "+e);
	}
}

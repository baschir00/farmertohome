package com.mastek.training.realfarmtohome.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.ws.rs.FormParam;

import org.springframework.context.annotation.Scope;

//@Component
@Scope("prototype")
@Entity
@Table(name = "JPA_ADMIN")
@NamedQueries({
	// Query to find customer by customerId
	@NamedQuery(name = "Admin.findByUsername", 
			query = "select e from Admin e where e.adminUsername = :adminUsername") 
	}
)
public class Admin implements Serializable{

	
	@FormParam("adminId")
	private int adminId;
	
	@FormParam("adminUsername")
	private String adminUsername;

	@FormParam("adminPassword")
	private String adminPassword;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int getAdminId() {
		return adminId;
	}

	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}
	
	public String getAdminUsername() {
		return adminUsername;
	}

	public void setAdminUsername(String adminUsername) {
		this.adminUsername = adminUsername;
	}
	
	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}
}

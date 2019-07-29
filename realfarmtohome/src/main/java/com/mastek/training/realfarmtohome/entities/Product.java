
package com.mastek.training.realfarmtohome.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Scope("prototype") // one copy for each test case
@Entity // Declares the class as an entity
@Table(name = "JPA_Product") // names the table created as JPA_EMPLOYEE
//@EntityListeners({DepartmentLifeCycleListener.class})
//@NamedQueries({
//	@NamedQuery(name="Product.findByProductName",
//			query="select e from Product e where e.ProductName = : productName")
//	
//})
//@XmlRootElement
@Component 
public class Product implements Serializable {
	
	private int productId;
	private String productName;
	private String description;
	private String productType;
	private int unitPrice;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getProductId() {
		return productId;
	}
	public String getProductName() {
		return productName;
	}
	public String getDescription() {
		return description;
	}
	public String getProductType() {
		return productType;
	}
	public int getUnitPrice() {
		return unitPrice;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}
	public void setUnitPrice(int unitPrice) {
		this.unitPrice = unitPrice;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName +
				", description=" + description + "productType="+productType+"unitPrice="+unitPrice+"]";
	}
}

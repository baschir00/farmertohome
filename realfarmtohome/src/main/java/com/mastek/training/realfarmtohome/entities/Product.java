
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
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//@Component 

@Scope("prototype") // one copy for each test case
@Entity // Declares the class as an entity
@Table(name = "JPA_Product") // names the table created as JPA_EMPLOYEE
@NamedQueries({
	@NamedQuery(name="Product.findByProductName",
			query="select e from Product e where e.productName = :productName"),
	@NamedQuery(name="Product.fetchProductByFarmerId",
    query="select d from Product d where d.currentFarmer.farmerId = :currentFarmer"),
	
	@NamedQuery(name="Product.fetchProductByLocation",
    query="select f from Product f where f.currentFarmer.farmerLocation = :farmerLocation")
	
})
//@XmlRootElement

public class Product implements Serializable {
	
	private int productId;
	@FormParam("productName")
	private String productName;
	@FormParam("description")
	private String description;
	@FormParam("productType")
	private String productType;
	@FormParam("unitPrice")
	private double unitPrice;
	private Farmer currentFarmer;
	private Set<OrderItem> manyorderitems = new HashSet<>();
	

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
	public double getUnitPrice() {
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
	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName +
				", description=" + description + "productType="+productType+"unitPrice="+unitPrice+"]";
	}
	
	@ManyToOne
	@JoinColumn(name="FK_FarmerId")
	public Farmer getCurrentFarmer() {
		return currentFarmer;
	}
	public void setCurrentFarmer(Farmer currentFarmer) {
		this.currentFarmer = currentFarmer;
	}
	
	
	@OneToMany(fetch = FetchType.LAZY, cascade=CascadeType.ALL, mappedBy="currentProduct")
	@XmlTransient
	public Set<OrderItem> getManyorderitems() {
		return manyorderitems;
	}
	public void setManyorderitems(Set<OrderItem> manyorderitems) {
		this.manyorderitems = manyorderitems;
	}
	

}

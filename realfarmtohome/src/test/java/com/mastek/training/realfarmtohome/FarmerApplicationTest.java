package com.mastek.training.realfarmtohome;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mastek.training.realfarmtohome.apis.FarmerService;
import com.mastek.training.realfarmtohome.entities.Farmer;
import com.mastek.training.realfarmtohome.entities.Product;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FarmerApplicationTest {

	@Autowired
	FarmerService farmerService;
	
	@Autowired
	Farmer far;
	
	@Test
	public void addFarmUsingService() {
		
		far.setFarmerName("Ruis");
		far.setFarmerEmail("Farmer");
		far.setFarmerLocation("Leeds");
		far = farmerService.registerOrUpdateFarmer(far);
		assertNotNull(far);
		
	}
	@Test
	public void findByFarmerIdUsingService() {
		int farmerId =1;
		assertNotNull(farmerService.findByFarmerId(farmerId));
		
	}
	

	@Test
	public void deleteByFarmerIdUsingService() {
		int farmerId =6;
		farmerService.deleteByFarmerId(farmerId);
		assertNull(farmerService.findByFarmerId(farmerId));
		
	}
	
	@Test
	public void manageAssociations() {
		
		Farmer f1 = new Farmer();
		f1.setFarmerName("Luiz");
		f1.setFarmerLocation("Leeds");
		
		Product p1 = new Product();
		p1.setProductName("Potatos");
		p1.setProductType("Veg");
		
		Product p2 = new Product();
		p2.setProductName("Cucumber");
		p2.setProductType("Veg");
		
		f1.getProducts().add(p1);
		f1.getProducts().add(p2);
		
		p1.setCurrentFarmer(f1);
		p2.setCurrentFarmer(f1);
		
		farmerService.registerOrUpdateFarmer(f1);
		
	}
	
}

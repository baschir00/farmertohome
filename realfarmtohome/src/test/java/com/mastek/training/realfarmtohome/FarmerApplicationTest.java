package com.mastek.training.realfarmtohome;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import java.util.Set;

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
		far.setFarmerId(10);
		far.setFarmerName("Ruis");
		far.setFarmerEmail("Farmer");
		far.setFarmerLocation("Leeds");
		far = farmerService.registerOrUpdateFarmer(far);
		assertNotNull(farmerService.findByFarmerId(far.getFarmerId()));
		
	}
	

	@Test
	public void deleteByFarmerIdUsingService() {
		far.setFarmerId(10);
		far.setFarmerName("Ruis");
		far.setFarmerEmail("Farmer");
		far.setFarmerLocation("Leeds");
		far = farmerService.registerOrUpdateFarmer(far);
		farmerService.deleteByFarmerId(far.getFarmerId());
		assertNull(farmerService.findByFarmerId(far.getFarmerId()));
		
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
		
		f1.getAssignment().add(p1);
		f1.getAssignment().add(p2);
		
		p1.setCurrentFarmer(f1);
		p2.setCurrentFarmer(f1);
		
		farmerService.registerOrUpdateFarmer(f1);
		
		assertNotNull(farmerService.findByFarmerId(f1.getFarmerId()));
	}
	
	
	@Test
	public void getAllFarmersUsingService() {
		
		Set<Farmer> farmers = farmerService.getFarmers();
		assertNotNull(farmers);
		assertTrue(farmers.size() > 0);
	}
	
}

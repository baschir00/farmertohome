package com.mastek.training.realfarmtohome;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mastek.training.realfarmtohome.apis.FarmerService;
import com.mastek.training.realfarmtohome.entities.Farmer;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FarmerApplicationTest {

	@Autowired
	FarmerService farmerService;
	
	@Autowired
	Farmer far;
	
	@Test
	public void addFarmUsingService() {
		
		far.setFarmerName("Luis");
		far.setFarmerEmail("Farmer");
		far.setFarmerLocation("Leeds");
		far = farmerService.registerOrUpdateFarmer(far);
		assertNotNull(far);
		
	}
	
	
	
	
}

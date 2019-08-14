package com.mastek.training.realfarmtohome;


import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.mastek.training.realfarmtohome.apis.FarmerService;
import com.mastek.training.realfarmtohome.apis.ProductService;
import com.mastek.training.realfarmtohome.entities.Farmer;
import com.mastek.training.realfarmtohome.entities.Product;

public class GeoComputeTests {

	@Autowired
	FarmerService farmerService;

	
	Farmer farmer;

	@Before
	public void setup() {
		farmer = new Farmer();
		farmer.setFarmerName("blaaa");
		farmer.setFarmerLocation("36 park row, leeds");
		farmer.setFarmerEmail("test@test.test");
		farmer.setFarmerPassword("password");
	}
	
	@Test
	public void test() {
		farmer = farmerService.registerOrUpdateFarmer(farmer);
		assertEquals(0, farmer.getFarmerLocationLat(), 0);
		assertEquals(0, farmer.getFarmerLocationLng(), 0);
	}

}

package com.mastek.training.realfarmtohome;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mastek.training.realfarmtohome.apis.FakeDataCreatorService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class Fakedata {
	
	@Autowired
	FakeDataCreatorService service;

	@Test
	public void test() {
		service.genCustomer();
		service.genFarmer();
		service.genProduct();
		service.genAdmin();
	}

}

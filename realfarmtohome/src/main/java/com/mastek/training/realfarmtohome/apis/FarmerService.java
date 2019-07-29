package com.mastek.training.realfarmtohome.apis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.mastek.training.realfarmtohome.entities.Farmer;
import com.mastek.training.realfarmtohome.repositories.FarmerRespository;


@Component
@Scope("singleton")
public class FarmerService {

@Autowired
FarmerRespository farmerRepository;
	
public Farmer registerOrUpdateFarmer(Farmer far) {
	far = farmerRepository.save(far);
	System.out.println("Farmer registered"+far);
	return far;
}
	
	
}

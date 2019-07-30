package com.mastek.training.realfarmtohome.apis;


import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.mastek.training.realfarmtohome.entities.Farmer;
import com.mastek.training.realfarmtohome.repositories.FarmerRepository;


@Component
@Scope("singleton")
public class FarmerService {

@Autowired
FarmerRepository farmerRepository;
	

public Farmer registerOrUpdateFarmer(Farmer far) {
	far = farmerRepository.save(far);
	System.out.println("Farmer registered"+far);
	return far;
}

public Set<Farmer> getFarmers() {
	Set<Farmer> target = new HashSet<Farmer>();
	farmerRepository.findAll().forEach(target::add);
	target.forEach((e) -> {this.findByFarmerId(e.getFarmerId());});
	return target;
}

public Farmer findByFarmerId(int farmerId) {
    try {
        return farmerRepository.findById(farmerId).get();
    } catch (Exception e) {
        e.printStackTrace();
        return null;
    }
}

public void deleteByFarmerId(int farmerId) {
     farmerRepository.deleteById(farmerId);
}





}

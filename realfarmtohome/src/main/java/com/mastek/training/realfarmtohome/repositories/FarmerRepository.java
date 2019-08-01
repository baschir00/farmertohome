package com.mastek.training.realfarmtohome.repositories;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import com.mastek.training.realfarmtohome.entities.Farmer;
@Component
@Scope("singleton")
public interface FarmerRepository extends CrudRepository<Farmer, Integer>{
	public List<Farmer> findByLocation(
			@Param("location") String location);
}

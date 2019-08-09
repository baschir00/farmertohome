package com.mastek.training.realfarmtohome.repositories;

import org.springframework.context.annotation.Scope;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import com.mastek.training.realfarmtohome.entities.Admin;
import com.mastek.training.realfarmtohome.entities.Farmer;

@Component
@Scope("singleton")
public interface AdminRepository extends CrudRepository<Admin, Integer>  {
	public Admin findByUsername(@Param("adminUsername") String adminUsername);
}

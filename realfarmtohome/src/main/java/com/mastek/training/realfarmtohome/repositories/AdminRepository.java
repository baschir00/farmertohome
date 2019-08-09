package com.mastek.training.realfarmtohome.repositories;

import org.springframework.context.annotation.Scope;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import com.mastek.training.realfarmtohome.entities.Admin;

@Component
@Scope("singleton")
public interface AdminRepository extends CrudRepository<Admin, Integer>  {

}

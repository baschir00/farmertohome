package com.mastek.training.realfarmtohome.repositories;

import org.springframework.context.annotation.Scope;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import com.mastek.training.realfarmtohome.entities.Customer;

@Component
@Scope("singleton")
public interface CustomerRepository extends CrudRepository<Customer, Integer> {
	public Customer findByEmail(@Param("customerEmail") String email);
}

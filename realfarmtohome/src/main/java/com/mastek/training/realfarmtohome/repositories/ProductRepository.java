package com.mastek.training.realfarmtohome.repositories;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import com.mastek.training.realfarmtohome.entities.Product;
@Component
@Scope("singleton")
public interface ProductRepository extends CrudRepository<Product, Integer> {
//	public List<Product> findByProductName(String productName);
}


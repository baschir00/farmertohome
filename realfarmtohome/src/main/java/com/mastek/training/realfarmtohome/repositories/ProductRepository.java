package com.mastek.training.realfarmtohome.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.mastek.training.realfarmtohome.entities.Product;

public interface ProductRepository extends CrudRepository<Product, Integer> {
	public List<Product> findByProductName(
			@Param("productName") String productName);
}

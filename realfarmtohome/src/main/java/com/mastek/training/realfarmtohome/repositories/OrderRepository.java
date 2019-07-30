package com.mastek.training.realfarmtohome.repositories;

import org.springframework.context.annotation.Scope;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import com.mastek.training.realfarmtohome.entities.Order;
@Component
@Scope("singleton")
public interface OrderRepository extends CrudRepository<Order, Integer> {

}

package com.mastek.training.realfarmtohome.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.context.annotation.Scope;

import org.springframework.stereotype.Component;


import com.mastek.training.realfarmtohome.entities.OrderItem;
@Component
@Scope("singleton")
public interface OrderItemRepository extends CrudRepository<OrderItem,Integer> {

}

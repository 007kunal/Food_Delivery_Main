package com.delivery.food_delivery.service;


import com.delivery.food_delivery.model.Order;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {
    private final List<Order> orders= new ArrayList<>();

    //adding order
    public Order addOrder(Order order){
        orders.add(order);
        return order;
    }

    //view all orders
    public List<Order> getOrders(){
        return orders;
    }
    //filter order
    public List<Order> filterOrders(Boolean paid,Double maxDistance){
        return orders.stream()
                .filter(o->paid==null||o.isPaid()==paid)
                .filter(o->maxDistance==null||o.getDeliveryDistance()<=maxDistance)
                .collect(Collectors.toList());
    }

    //assigning deliveries
    public Order assingDelivery(Double maxDistance){
        return orders.stream()
                .filter(o -> !o.isPaid())
                .filter(o -> o.getDeliveryDistance() <= maxDistance)
                .min(Comparator.comparingDouble(Order::getDeliveryDistance))
                .orElse(null);
    }
}

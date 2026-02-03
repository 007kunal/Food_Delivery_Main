package com.delivery.food_delivery.controller;


import com.delivery.food_delivery.model.Order;
import com.delivery.food_delivery.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }
    //adding ordeers
    @PostMapping
    public Order addOrder(@RequestBody Order order) {
        return orderService.addOrder(order);
    }

    //show all orders
    @GetMapping
    public List<Order> getOrders() {
        return orderService.getOrders();
    }

    //filtring orders

    @GetMapping("/filter")
    public List<Order> filterOrders(@RequestParam(required = false) Boolean paid,
    @RequestParam(required = false) Double maxDistance)
    {
        return orderService.filterOrders(paid,maxDistance);
    }

    //assinging deliveries

    @PostMapping("/assign")
    public Object assignOrder(@RequestBody double maxDistance) {
        Order order=orderService.assingDelivery(maxDistance);
        if(order==null){
            return Map.of("message","No order available");
        }
        return order;
    }

}

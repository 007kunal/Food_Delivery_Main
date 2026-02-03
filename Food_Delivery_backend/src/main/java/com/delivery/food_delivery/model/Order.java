package com.delivery.food_delivery.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Order {

    private Long orderId;
    private String restaurantName;
    private int itemCount;
    private boolean isPaid;
    private double deliveryDistance;
}

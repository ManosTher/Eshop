package com.Eshop.Eshop.Controllers;

import com.Eshop.Eshop.Entities.Order;
import com.Eshop.Eshop.Service.OrderService;
import com.Eshop.Eshop.Exception.OrderNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id)
                .orElseThrow(() -> new OrderNotFoundException("Order not found with id " + id));
    }

    @PostMapping
    public Order createOrder(@RequestParam Long userId, @RequestParam Long guestId, @RequestParam BigDecimal totalPrice) {
        return orderService.createOrder(userId, guestId, totalPrice);
    }

    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable Long id, @RequestParam Long userId, @RequestParam Long guestId, @RequestParam BigDecimal totalPrice) {
        return orderService.updateOrder(id, userId, guestId, totalPrice);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
    }
}

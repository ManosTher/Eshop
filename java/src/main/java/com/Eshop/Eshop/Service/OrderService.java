package com.Eshop.Eshop.Service;

import com.Eshop.Eshop.Entities.Order;
import com.Eshop.Eshop.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public Order createOrder(Long userId, Long guestId, BigDecimal totalPrice) {
        Order order = new Order(userId, guestId, totalPrice);
        return orderRepository.save(order);
    }

    public Order updateOrder(Long id, Long userId, Long guestId, BigDecimal totalPrice) {
        Optional<Order> existingOrder = orderRepository.findById(id);
        if (existingOrder.isPresent()) {
            Order updatedOrder = existingOrder.get();
            updatedOrder.setUserId(userId);
            updatedOrder.setGuestId(guestId);
            updatedOrder.setTotalPrice(totalPrice);
            return orderRepository.save(updatedOrder);
        }
        return null; // Handle not found
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}

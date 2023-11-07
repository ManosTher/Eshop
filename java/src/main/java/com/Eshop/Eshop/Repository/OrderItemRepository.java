package com.Eshop.Eshop.Repository;

import com.Eshop.Eshop.Entities.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}

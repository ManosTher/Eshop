package com.Eshop.Eshop.Service;

import com.Eshop.Eshop.Entities.OrderItem;
import com.Eshop.Eshop.Entities.Product;
import com.Eshop.Eshop.Repository.OrderItemRepository;
import com.Eshop.Eshop.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class OrderItemService {

    private final OrderItemRepository orderItemRepository;
    private final ProductRepository productRepository;
    @Autowired
    public OrderItemService(OrderItemRepository orderItemRepository, ProductRepository productRepository) {
        this.orderItemRepository = orderItemRepository;
        this.productRepository = productRepository;
    }

    public List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    public OrderItem createOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    public OrderItem getOrderItemById(Long id) {
        return orderItemRepository.findById(id).orElse(null);
    }

    public OrderItem updateOrderItem(Long id, OrderItem orderItem) {
        if (orderItemRepository.existsById(id)) {
            orderItem.setProductId(id);
            return orderItemRepository.save(orderItem);
        }
        return null;
    }

    public void deleteOrderItem(Long id) {
        orderItemRepository.deleteById(id);
    }

    public void completeOrder(List<OrderItem> orderItems) {

        Map<Long, Integer> productQuantitiesMap = orderItems.stream()
                .collect(Collectors.toMap(OrderItem::getProductId, OrderItem::getQuantity));

        for (OrderItem orderItem : orderItems) {
            Long productId = orderItem.getProductId();
            Integer orderedQuantity = orderItem.getQuantity();

            // Fetch the product by ID from the database
            Product product = productRepository.findById(productId).orElse(null);

            if (product != null) {
                // Adjust the product quantity in the database
                Integer currentQuantity = product.getQuantity();
                Integer updatedQuantity = currentQuantity - orderedQuantity;
                if (updatedQuantity >= 0) {
                    product.setQuantity(updatedQuantity);
                    productRepository.save(product);
                } else {
                    // Handle insufficient product quantities
                    // Here you can throw an exception or implement other error-handling logic
                }
            }
        }
    }
}

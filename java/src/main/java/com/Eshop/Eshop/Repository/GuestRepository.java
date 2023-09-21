package com.Eshop.Eshop.Repository;

import com.Eshop.Eshop.Entities.Guest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuestRepository extends JpaRepository<Guest, Long> {
    // You can define custom query methods here if needed.
}

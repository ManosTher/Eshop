package com.Eshop.Eshop.Repository;

import com.Eshop.Eshop.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // You can define custom query methods here if needed.
}

package com.Eshop.Eshop.Repository;

import com.Eshop.Eshop.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByLastName(String lastName);

    // Find users by phone
    List<User> findByPhone(String phone);

    // Find users by email
    List<User> findByEmail(String email);
}

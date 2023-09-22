package com.Eshop.Eshop.Controllers;

import com.Eshop.Eshop.Entities.User;
import com.Eshop.Eshop.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @GetMapping("/lastName/{lastName}")
    public List<User> getUserByLastName(@PathVariable String lastName){return  userService.getUsersByLastName(lastName);}

    @GetMapping("/byemail/{email}")
    public List<User> getUserByEmail(@PathVariable String email){return  userService.getUsersByEmail(email);}

    @GetMapping("/byphone/{phone}")
    public List<User> findUsersByPhone(@PathVariable String phone) {
        return userService.findUsersByPhone(phone);
    }

    @PostMapping("/")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        return userService.updateUser(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}

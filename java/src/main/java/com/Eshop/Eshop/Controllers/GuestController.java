package com.Eshop.Eshop.Controllers;

import com.Eshop.Eshop.Entities.Guest;
import com.Eshop.Eshop.Service.GuestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/guests")
public class GuestController {

    private final com.Eshop.Eshop.Service.GuestService guestService;

    @Autowired
    public GuestController(com.Eshop.Eshop.Service.GuestService guestService) {
        this.guestService = guestService;
    }

    @GetMapping("/")
    public List<Guest> getAllGuests() {
        return guestService.getAllGuests();
    }

    @GetMapping("/{id}")
    public Optional<Guest> getGuestById(@PathVariable Long id) {
        return guestService.getGuestById(id);
    }

    @PostMapping("/")
    public Guest createGuest(@RequestBody Guest guest) {
        return guestService.createGuest(guest);
    }

    @PutMapping("/{id}")
    public Guest updateGuest(@PathVariable Long id, @RequestBody Guest updatedGuest) {
        return guestService.updateGuest(id, updatedGuest);
    }

    @DeleteMapping("/{id}")
    public void deleteGuest(@PathVariable Long id) {
        guestService.deleteGuest(id);
    }
}

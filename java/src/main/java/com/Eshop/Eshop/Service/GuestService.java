package com.Eshop.Eshop.Service;

import com.Eshop.Eshop.Entities.Guest;
import com.Eshop.Eshop.Repository.GuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GuestService {

    private final GuestRepository guestRepository;

    @Autowired
    public GuestService(GuestRepository guestRepository) {
        this.guestRepository = guestRepository;
    }

    public List<Guest> getAllGuests() {
        return guestRepository.findAll();
    }

    public Optional<Guest> getGuestById(Long id) {
        return guestRepository.findById(id);
    }

    public Guest createGuest(Guest guest) {
        return guestRepository.save(guest);
    }

    public Guest updateGuest(Long id, Guest updatedGuest) {
        Optional<Guest> existingGuest = guestRepository.findById(id);
        if (existingGuest.isPresent()) {
            updatedGuest.setId(existingGuest.get().getId());
            return guestRepository.save(updatedGuest);
        }
        // Handle not found
        return null;
    }

    public void deleteGuest(Long id) {
        guestRepository.deleteById(id);
    }
}

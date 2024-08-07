package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Shipment;
import com.example.backend.model.Tracking;
import com.example.backend.repository.TrackingRepository;
import com.example.backend.repository.ShipmentRepository;

import java.util.Optional;
import java.util.UUID;

@Service
public class TrackingService {

    @Autowired
    private TrackingRepository trackingRepository;

    @Autowired
    private ShipmentRepository shipmentRepository;

    public Tracking saveTracking(Tracking tracking) {
        // Generate a unique ID for Tracking
        tracking.setId(UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE);

        // Fetch the Shipment entity
        Shipment shipment = shipmentRepository.findById(tracking.getShipment().getId())
            .orElseThrow(() -> new RuntimeException("Shipment not found with id " + tracking.getShipment().getId()));
        
        // Set the Shipment entity in the Tracking
        tracking.setShipment(shipment);

        return trackingRepository.save(tracking);
    }

    public Tracking updateTracking(Long id, Tracking updatedTracking) {
        // Fetch the existing tracking
        Optional<Tracking> existingTrackingOptional = trackingRepository.findById(id);

        if (existingTrackingOptional.isPresent()) {
            Tracking existingTracking = existingTrackingOptional.get();

            // Fetch the Shipment entity
            Shipment shipment = shipmentRepository.findById(updatedTracking.getShipment().getId())
                .orElseThrow(() -> new RuntimeException("Shipment not found with id " + updatedTracking.getShipment().getId()));

            // Update the tracking details
            existingTracking.setShipment(shipment);
            existingTracking.setStatus(updatedTracking.getStatus());
            existingTracking.setLocation(updatedTracking.getLocation());
            existingTracking.setTimestamp(updatedTracking.getTimestamp());

            // Save and return the updated tracking
            return trackingRepository.save(existingTracking);
        } else {
            throw new RuntimeException("Tracking not found with id " + id);
        }
    }

    public void deleteTracking(Long id) {
        // Check if the tracking exists
        if (!trackingRepository.existsById(id)) {
            throw new RuntimeException("Tracking not found with id " + id);
        }
        // Delete the tracking
        trackingRepository.deleteById(id);
    }
}

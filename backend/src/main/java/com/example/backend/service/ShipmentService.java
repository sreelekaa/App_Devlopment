package com.example.backend.service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Shipment;
import com.example.backend.model.Tracking;
import com.example.backend.model.Transport;
import com.example.backend.repository.ShipmentRepository;
import com.example.backend.repository.TransportRepository;
import com.example.backend.repository.TrackingRepository;
import com.example.backend.repository.InventoryShipmentRepository;

@Service
public class ShipmentService {

    @Autowired
    private ShipmentRepository shipmentRepository;

    @Autowired
    private TransportRepository transportRepository;

    @Autowired
    private TrackingRepository trackingRepository;

    @Autowired
    private InventoryShipmentRepository inventoryShipmentRepository;

    private final AtomicLong idGenerator = new AtomicLong();

    public Shipment saveShipment(Shipment shipment) {
        // Fetch the Transport entity
        Transport transport = transportRepository.findById(shipment.getTransport().getId())
            .orElseThrow(() -> new RuntimeException("Transport not found with id " + shipment.getTransport().getId()));

        // Set the Transport entity in the Shipment
        shipment.setTransport(transport);

        // Ensure the ID is assigned
        if (shipment.getId() == null) {
            shipment.setId(idGenerator.incrementAndGet());
        }

        // Save the shipment
        Shipment savedShipment = shipmentRepository.save(shipment);

        // Create a tracking entry
        createTrackingEntry(savedShipment, "Order Processed", "Shipment created");

        return savedShipment;
    }

    public Shipment updateShipment(Long id, Shipment updatedShipment) {
        // Fetch the existing shipment
        Optional<Shipment> existingShipmentOptional = shipmentRepository.findById(id);

        if (existingShipmentOptional.isPresent()) {
            Shipment existingShipment = existingShipmentOptional.get();

            // Fetch the Transport entity
            Transport transport = transportRepository.findById(updatedShipment.getTransport().getId())
                .orElseThrow(() -> new RuntimeException("Transport not found with id " + updatedShipment.getTransport().getId()));

            // Update the shipment details
            existingShipment.setTransport(transport);
            existingShipment.setNumberOfContainers(updatedShipment.getNumberOfContainers());
            existingShipment.setCustomerName(updatedShipment.getCustomerName());
            existingShipment.setPaymentType(updatedShipment.getPaymentType());
            existingShipment.setCardNumber(updatedShipment.getCardNumber());
            existingShipment.setCardHolderName(updatedShipment.getCardHolderName());
            existingShipment.setCvv(updatedShipment.getCvv());
            existingShipment.setAccountNumber(updatedShipment.getAccountNumber());
            existingShipment.setIfsc(updatedShipment.getIfsc());
            existingShipment.setUpiId(updatedShipment.getUpiId());

            // Save and return the updated shipment
            Shipment updated = shipmentRepository.save(existingShipment);

            // Optionally create or update a tracking entry
            createTrackingEntry(updated, "Order Updated", "Shipment details updated");

            return updated;
        } else {
            throw new RuntimeException("Shipment not found with id " + id);
        }
    }
    public void deleteShipment(Long id) {
        // Check if the shipment exists
        if (!shipmentRepository.existsById(id)) {
            throw new RuntimeException("Shipment not found with id " + id);
        }
    
        // Delete all related rows in inventory_shipment
        inventoryShipmentRepository.deleteByShipmentId(id);
    
        // Delete all related tracking entries
        trackingRepository.deleteByShipmentId(id);
    
        // Now delete the shipment
        shipmentRepository.deleteById(id);
    }
    

    private void createTrackingEntry(Shipment shipment, String status, String location) {
        // Generate a unique ID for Tracking
        Long trackingId = idGenerator.incrementAndGet();
        Tracking tracking = new Tracking(trackingId, shipment, status, location, Instant.now().toString());
        trackingRepository.save(tracking);
    }

    public List<Shipment> getAllShipments() {
        return shipmentRepository.findAll();
    }

    public Optional<Shipment> getShipmentById(Long id) {
        return shipmentRepository.findById(id);
    }
}

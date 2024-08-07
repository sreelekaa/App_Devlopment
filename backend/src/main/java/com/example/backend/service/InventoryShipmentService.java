package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.*;
import com.example.backend.repository.*;
import java.util.UUID;

@Service
public class InventoryShipmentService {

    @Autowired
    private InventoryRepository inventoryRepository;

    @Autowired
    private ShipmentRepository shipmentRepository;

    @Autowired
    private InventoryShipmentRepository inventoryShipmentRepository;

    public InventoryShipment createInventoryShipment(Long inventoryId, Long shipmentId, int quantity) {
        // Fetch Inventory and Shipment entities
        Inventory inventory = inventoryRepository.findById(inventoryId)
                .orElseThrow(() -> new RuntimeException("Inventory not found with id " + inventoryId));
        Shipment shipment = shipmentRepository.findById(shipmentId)
                .orElseThrow(() -> new RuntimeException("Shipment not found with id " + shipmentId));

        if (inventory.getQuantity() < quantity) {
            throw new RuntimeException("Insufficient inventory quantity");
        }

        // Update inventory quantity
        inventory.setQuantity(inventory.getQuantity() - quantity);
        inventoryRepository.save(inventory);

        // Create InventoryShipment
        InventoryShipment inventoryShipment = new InventoryShipment();
        inventoryShipment.setInventory(inventory);
        inventoryShipment.setShipment(shipment);
        inventoryShipment.setQuantity(quantity);
        inventoryShipment.setTrackingNumber(generateTrackingNumber()); // This method call is valid here

        return inventoryShipmentRepository.save(inventoryShipment);
    }

    private String generateTrackingNumber() {
        // Generate unique tracking number
        return "TRACK-" + UUID.randomUUID().toString();
    }
}

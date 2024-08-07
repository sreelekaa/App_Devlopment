package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.InventoryShipment;
import com.example.backend.service.InventoryShipmentService;



@RestController
@RequestMapping("/api/inventory-shipments")
public class InventoryShipmentController {

    @Autowired
    private InventoryShipmentService inventoryShipmentService;

    @PostMapping
    public ResponseEntity<InventoryShipmentResponse> createInventoryShipment(
            @RequestBody InventoryShipmentRequest request) {
        InventoryShipment inventoryShipment = inventoryShipmentService.createInventoryShipment(
                request.getInventoryId(), request.getShipmentId(), request.getQuantity());

        InventoryShipmentResponse response = new InventoryShipmentResponse(
                inventoryShipment.getId(),
                inventoryShipment.getInventory().getItemName(),
                inventoryShipment.getInventory().getPrice(),
                inventoryShipment.getInventory().getType(),
                inventoryShipment.getQuantity(),
                inventoryShipment.getTrackingNumber());

        return ResponseEntity.ok(response);
    }
    
}

class InventoryShipmentRequest {
    private Long inventoryId;
    private Long shipmentId;
    private int quantity;

    // Getters and setters
    public Long getInventoryId() {
        return inventoryId;
    }

    public void setInventoryId(Long inventoryId) {
        this.inventoryId = inventoryId;
    }

    public Long getShipmentId() {
        return shipmentId;
    }

    public void setShipmentId(Long shipmentId) {
        this.shipmentId = shipmentId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}

class InventoryShipmentResponse {
    private Long id;
    private String itemName;
    private double price;
    private String type;
    private int quantity;
    private String trackingNumber;

    public InventoryShipmentResponse(Long id, String itemName, double price, String type, int quantity, String trackingNumber) {
        this.id = id;
        this.itemName = itemName;
        this.price = price;
        this.type = type;
        this.quantity = quantity;
        this.trackingNumber = trackingNumber;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getTrackingNumber() {
        return trackingNumber;
    }

    public void setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
    }
}

package com.example.backend.model;

import jakarta.persistence.*;

@Entity
public class InventoryShipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "inventory_id")
    private Inventory inventory;

    @ManyToOne
    @JoinColumn(name = "shipment_id")
    private Shipment shipment;

    private int quantity;
    private String trackingNumber;

    // Constructors
    public InventoryShipment() {}

    public InventoryShipment(Inventory inventory, Shipment shipment, int quantity, String trackingNumber) {
        this.inventory = inventory;
        this.shipment = shipment;
        this.quantity = quantity;
        this.trackingNumber = trackingNumber;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Inventory getInventory() {
        return inventory;
    }

    public void setInventory(Inventory inventory) {
        this.inventory = inventory;
    }

    public Shipment getShipment() {
        return shipment;
    }

    public void setShipment(Shipment shipment) {
        this.shipment = shipment;
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

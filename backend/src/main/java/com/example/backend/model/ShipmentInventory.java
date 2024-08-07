package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "shipment_inventory")
public class ShipmentInventory {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "shipment_id")
    private Shipment shipment;

    @ManyToOne
    @JoinColumn(name = "inventory_id")
    private Inventory inventory;

    // Additional fields from Inventory
    private String itemName;
    private String type;
    private double price;
    private int quantity;
    private String imageUrl;

    // Constructors, getters, and setters

    public ShipmentInventory(Long id, Shipment shipment, Inventory inventory, String itemName, String type,
            double price, int quantity, String imageUrl) {
        this.id = id;
        this.shipment = shipment;
        this.inventory = inventory;
        this.itemName = itemName;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Shipment getShipment() {
        return shipment;
    }

    public void setShipment(Shipment shipment) {
        this.shipment = shipment;
    }

    public Inventory getInventory() {
        return inventory;
    }

    public void setInventory(Inventory inventory) {
        this.inventory = inventory;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public ShipmentInventory() {}

    // Getters and Setters
}

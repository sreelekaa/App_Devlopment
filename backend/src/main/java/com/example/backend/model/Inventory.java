package com.example.backend.model;

import jakarta.persistence.*;
import java.util.Set;

@Entity
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String itemName;
    private String type;
    private double price;
    private int quantity;
    private String imageUrl;

    @OneToMany(mappedBy = "inventory", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<InventoryShipment> inventoryShipments;

    // Constructors
    public Inventory() {}

    public Inventory(Long id, String itemName, String type, double price, int quantity, String imageUrl) {
        this.id = id;
        this.itemName = itemName;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }

    // Getters and Setters
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

    public Set<InventoryShipment> getInventoryShipments() {
        return inventoryShipments;
    }

    public void setInventoryShipments(Set<InventoryShipment> inventoryShipments) {
        this.inventoryShipments = inventoryShipments;
    }
}

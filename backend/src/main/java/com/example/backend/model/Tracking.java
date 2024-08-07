package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Tracking {
    @Id
    private Long id;

    @ManyToOne
    private Shipment shipment;

    private String status;
    private String location;
    private String timestamp;

    // Constructors, getters, and setters

    public Tracking() {}

    public Tracking(Long id, Shipment shipment, String status, String location, String timestamp) {
        this.id = id;
        this.shipment = shipment;
        this.status = status;
        this.location = location;
        this.timestamp = timestamp;
    }

    // Getters and Setters

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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}

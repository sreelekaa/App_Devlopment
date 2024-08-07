package com.example.backend.model;

import jakarta.persistence.*;

@Entity
public class Transport {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mode; // e.g., water-way, airway, rail-way, road-way
    private String description;

    // Constructors, getters, and setters
    public Transport() {}

    public Transport(Long id, String mode, String description) {
        this.id = id;
        this.mode = mode;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

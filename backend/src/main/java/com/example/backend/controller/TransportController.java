package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Transport;
import com.example.backend.service.TransportService;

import java.util.List;

@RestController
@RequestMapping("/transports") // Updated endpoint to reflect "Transport"
public class TransportController {

    @Autowired
    private TransportService transportService;

    // Get all Transport records
    @GetMapping
    public List<Transport> getAllTransports() {
        return transportService.getAllTransports();
    }

    // Create a new Transport record
    @PostMapping
    public Transport createTransport(@RequestBody Transport transport) {
        return transportService.saveTransport(transport);
    }

    // Update an existing Transport record
    @PutMapping("/{id}")
    public Transport updateTransport(@PathVariable Long id, @RequestBody Transport updatedTransport) {
        return transportService.updateTransport(id, updatedTransport);
    }

    // Delete a Transport record by ID
    @DeleteMapping("/{id}")
    public void deleteTransport(@PathVariable Long id) {
        transportService.deleteTransport(id);
    }
}

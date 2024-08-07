package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Transport;
import com.example.backend.repository.TransportRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TransportService {

    @Autowired
    private TransportRepository transportRepository;

    // Fetch all Transport records
    public List<Transport> getAllTransports() {
        return transportRepository.findAll();
    }

    // Save a new Transport record
    public Transport saveTransport(Transport transport) {
        return transportRepository.save(transport);
    }

    // Update an existing Transport record
    public Transport updateTransport(Long id, Transport updatedTransport) {
        Optional<Transport> existingTransportOptional = transportRepository.findById(id);

        if (existingTransportOptional.isPresent()) {
            Transport existingTransport = existingTransportOptional.get();
            existingTransport.setMode(updatedTransport.getMode()); // Updated attribute
            existingTransport.setDescription(updatedTransport.getDescription()); // Updated attribute
            return transportRepository.save(existingTransport);
        } else {
            throw new RuntimeException("Transport not found with id " + id);
        }
    }

    // Delete a Transport record by ID
    public void deleteTransport(Long id) {
        if (transportRepository.existsById(id)) {
            transportRepository.deleteById(id);
        } else {
            throw new RuntimeException("Transport not found with id " + id);
        }
    }
}

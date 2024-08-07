package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Inventory;
import com.example.backend.repository.InventoryRepository;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public List<Inventory> getAllInventory() {
        return inventoryRepository.findAll();
    }

    public Optional<Inventory> getInventoryById(Long id) {
        return inventoryRepository.findById(id);
    }

    public Inventory addInventory(Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    public void deleteInventory(Long id) {
        inventoryRepository.deleteById(id);
    }

    public Inventory updateInventory(Long id, Inventory inventoryDetails) {
        Inventory inventory = inventoryRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Inventory not found with id " + id));
        
        inventory.setItemName(inventoryDetails.getItemName());
        inventory.setQuantity(inventoryDetails.getQuantity());
        inventory.setType(inventoryDetails.getType());
        inventory.setPrice(inventoryDetails.getPrice());
        
        return inventoryRepository.save(inventory);
    }
}

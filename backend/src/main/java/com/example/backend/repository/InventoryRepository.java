// src/main/java/com/example/backend/repository/InventoryRepository.java
package com.example.backend.repository;

import com.example.backend.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
}

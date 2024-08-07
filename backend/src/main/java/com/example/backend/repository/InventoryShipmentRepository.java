package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.model.InventoryShipment;

public interface InventoryShipmentRepository extends JpaRepository<InventoryShipment, Long> {

    void deleteByShipmentId(Long id);
}

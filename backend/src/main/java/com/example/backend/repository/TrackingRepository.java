package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.model.Tracking;

public interface TrackingRepository extends JpaRepository<Tracking, Long> {
    void deleteByShipmentId(Long shipmentId);
}

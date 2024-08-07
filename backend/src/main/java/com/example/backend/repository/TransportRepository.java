package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Transport;

public interface TransportRepository extends JpaRepository<Transport, Long> {
    

}

package com.example.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.*;

@Repository
public interface LoginRepository extends JpaRepository<Login, Long> {
    Optional<Login> findByRegister(Register register);
}

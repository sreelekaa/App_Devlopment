package com.example.backend.service;

import com.example.backend.model.*;
import com.example.backend.model.Register.Status;
import com.example.backend.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository registerRepository;

    public Register registerUser(Register register) {
        register.setRegistrationDate(LocalDateTime.now());
        register.setStatus(Status.ACTIVE);
        return registerRepository.save(register);
    }

    public Optional<Register> findById(Long id) {
        return registerRepository.findById(id);
    }

    public Register findByUsername(String username) {
        return registerRepository.findByUsername(username);
    }

    public Register findByEmail(String email) {
        return registerRepository.findByEmail(email);
    }
}
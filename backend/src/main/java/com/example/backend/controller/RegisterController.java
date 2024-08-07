package com.example.backend.controller;

import com.example.backend.model.Register;
import com.example.backend.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/register")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping("/add")
    public ResponseEntity<Register> registerUser(@RequestBody Register register) {
        if (registerService.findByUsername(register.getUsername()) != null ||
            registerService.findByEmail(register.getEmail()) != null) {
            return ResponseEntity.badRequest().body(null);
        }

        Register newUser = registerService.registerUser(register);
        return ResponseEntity.ok(newUser);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Register> getRegisterById(@PathVariable Long id) {
        return registerService.findById(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}

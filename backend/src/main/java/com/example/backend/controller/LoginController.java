package com.example.backend.controller;

import com.example.backend.model.Login;
import com.example.backend.model.Register;
import com.example.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/add")
    public ResponseEntity<Login> loginUser(@RequestBody Register loginDetails) {
        Login login = loginService.loginUser(loginDetails.getUsername(), loginDetails.getPassword());
        if (login != null) {
            return ResponseEntity.ok(login);
        } else {
            return ResponseEntity.status(401).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Login> getLoginById(@PathVariable Long id) {
        return loginService.getById(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}

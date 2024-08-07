package com.example.backend.service;

import com.example.backend.model.Login;
import com.example.backend.model.Register;
import com.example.backend.repository.LoginRepository;
import com.example.backend.repository.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    @Autowired
    private RegisterRepository registerRepository;

    public Login loginUser(String username, String password) {
        Register register = registerRepository.findByUsername(username);
        if (register != null && register.getPassword().equals(password)) {
            Optional<Login> existingLogin = loginRepository.findByRegister(register);
            Login login;
            if (existingLogin.isPresent()) {
                // Update existing login record
                login = existingLogin.get();
                login.setUsername(username); // Set username
                login.setPassword(password); // Set password
                login.setLastLoginDate(LocalDateTime.now());
            } else {
                // Create new login record
                login = new Login();
                login.setUsername(username); // Set username
                login.setPassword(password); // Set password
                login.setRegister(register);
                login.setLastLoginDate(LocalDateTime.now());
            }
            return loginRepository.save(login);
        }
        return null;
    }

    public Login create(Login l) {
        return loginRepository.save(l);
    }

    public List<Login> getAll() {
        return loginRepository.findAll();
    }

    public Optional<Login> getById(Long id) {
        return loginRepository.findById(id);
    }

    public Login update(Long id, Login l) {
        Optional<Login> existingUser = loginRepository.findById(id);
        if (existingUser.isPresent()) {
            Login userToUpdate = existingUser.get();
            userToUpdate.setUsername(l.getUsername()); // Update fields as required
            userToUpdate.setPassword(l.getPassword()); // Update fields as required
            // ... update other fields
            return loginRepository.save(userToUpdate);
        } else {
            return null;
        }
    }

    public boolean delete(Long id) {
        Optional<Login> existingUser = loginRepository.findById(id);
        if (existingUser.isPresent()) {
            loginRepository.delete(existingUser.get());
            return true;
        } else {
            return false;
        }
    }
}

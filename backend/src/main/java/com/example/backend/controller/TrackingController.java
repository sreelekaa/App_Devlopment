package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Tracking;
import com.example.backend.service.TrackingService;

@RestController
@RequestMapping("/trackings")
public class TrackingController {

    @Autowired
    private TrackingService trackingService;

    @PostMapping
    public Tracking createTracking(@RequestBody Tracking tracking) {
        return trackingService.saveTracking(tracking);
    }

    @PutMapping("/{id}")
    public Tracking updateTracking(@PathVariable Long id, @RequestBody Tracking tracking) {
        return trackingService.updateTracking(id, tracking);
    }

    @DeleteMapping("/{id}")
    public void deleteTracking(@PathVariable Long id) {
        trackingService.deleteTracking(id);
    }
}

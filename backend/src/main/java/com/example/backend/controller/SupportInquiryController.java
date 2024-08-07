package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.SupportInquiry;
import com.example.backend.service.SupportInquiryService;

@RestController
@RequestMapping("/support-inquiries")
public class SupportInquiryController {

    @Autowired
    private SupportInquiryService supportInquiryService;

    @PostMapping
    public SupportInquiry createInquiry(@RequestBody SupportInquiry inquiry) {
        return supportInquiryService.saveInquiry(inquiry);
    }
}

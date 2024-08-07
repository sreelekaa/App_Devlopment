package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.SupportInquiry;
import com.example.backend.repository.SupportInquiryRepository;

@Service
public class SupportInquiryService {

    @Autowired
    private SupportInquiryRepository supportInquiryRepository;

    public SupportInquiry saveInquiry(SupportInquiry inquiry) {
        return supportInquiryRepository.save(inquiry);
    }
}

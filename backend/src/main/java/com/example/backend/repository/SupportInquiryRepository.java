package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.model.SupportInquiry;

public interface SupportInquiryRepository extends JpaRepository<SupportInquiry, Long> {
}

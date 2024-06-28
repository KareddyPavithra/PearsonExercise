package com.example.demo.supportrequest.repository;

import com.example.demo.supportrequest.model.SupportRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SupportRequestRepository extends JpaRepository<SupportRequest, Long> {

    List<SupportRequest> findAllByOrderByDueDateAsc();
}

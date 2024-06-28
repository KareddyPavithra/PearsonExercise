package com.example.demo.supportrequest.controller;

import com.example.demo.supportrequest.model.SupportRequest;
import com.example.demo.supportrequest.service.SupportRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/support-requests")
public class SupportRequestController {

    @Autowired
    private SupportRequestService service;

    @PostMapping
    public ResponseEntity<?> createRequest(@RequestBody SupportRequest request) {
        // Validation
        if (!request.getEmail().contains("@")) {
            return ResponseEntity.badRequest().body("Invalid email address");
        }
        if (request.getDescription().length() < 100 || request.getDescription().length() > 1000) {
            return ResponseEntity.badRequest().body("Description length must be between 100 and 1000 characters");
        }
        if (request.getDueDate().isBefore(LocalDate.now()) || request.getDueDate().isAfter(LocalDate.now().plusYears(1))) {
            return ResponseEntity.badRequest().body("Due date must be within one year from today");
        }

        SupportRequest savedRequest = service.saveRequest(request);
        return ResponseEntity.ok(savedRequest);
    }

    @GetMapping
    public List<SupportRequest> getAllRequests() {
        return service.getAllRequests();
    }
}

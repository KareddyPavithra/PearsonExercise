package com.example.demo.supportrequest.service;

import com.example.demo.supportrequest.model.SupportRequest;
import com.example.demo.supportrequest.repository.SupportRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupportRequestService {

        @Autowired
        private SupportRequestRepository repository;

        public SupportRequest saveRequest(SupportRequest request) {
            return repository.save(request);
        }

        public List<SupportRequest> getAllRequests() {
            return repository.findAllByOrderByDueDateAsc();
        }
}

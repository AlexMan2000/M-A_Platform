package com.matrader.server.controller;

import com.matrader.server.commons.enums.https.StatusCode;
import com.matrader.server.commons.status.Message;
import com.matrader.server.dto.trader.CompanyDTO;
import com.matrader.server.entity.trader.Company;
import com.matrader.server.service.trader.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/companies")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping("/all")
    public List<CompanyDTO> getAllCompanies() {
        return companyService.getAllCompanies();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CompanyDTO> getCompanyById(@PathVariable String id) {
        Optional<CompanyDTO> companyObj = companyService.getCompanyById(id);
        if (companyObj.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(companyObj.get());
        }
    }

    @PostMapping
    public ResponseEntity<String> addCompany(@RequestBody CompanyDTO companyDTO) {
        Message message = companyService.createCompany(companyDTO);
        return message.getStatusCode() == StatusCode.OK ? ResponseEntity.ok("Added new company") : ResponseEntity.internalServerError().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable String id, @RequestBody CompanyDTO companyDTO) {
        String updatedCompanyId = companyService.updateCompany(id, companyDTO);
        if (updatedCompanyId != null) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public void deleteCompany(@PathVariable String id) {
        companyService.deleteCompany(id);
    }
}

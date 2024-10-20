package com.matrader.server.service.trader;

import com.matrader.server.entity.trader.Company;
import com.matrader.server.repository.trader.entityRepository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {


    @Autowired
    private CompanyRepository companyRepository;

    // Create a new company
    public Company createCompany(Company company) {
        return companyRepository.save(company);
    }


    // Retrieve all companies
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    // Get a specific company by ID
    public Optional<Company> getCompanyById(String id) {
        return companyRepository.findById(id);
    }

    // Update a company
    public Company updateCompany(String id, Company company) {
        if (companyRepository.existsById(id)) {
            company.setId(id);
            return companyRepository.save(company);
        }
        return null; // Or throw an exception
    }

    // Delete a company by ID
    public void deleteCompany(String id) {
        companyRepository.deleteById(id);
    }


}

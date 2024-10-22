package com.matrader.server.service.trader;

import com.matrader.server.commons.enums.https.StatusCode;
import com.matrader.server.commons.status.Message;
import com.matrader.server.dto.trader.Company.CompanyInfo;
import com.matrader.server.dto.trader.CompanyDTO;
import com.matrader.server.entity.trader.Company;
import com.matrader.server.repository.trader.entityRepository.CompanyRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CompanyService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private CompanyRepository companyRepository;

    // Create a new company
    public Message createCompany(CompanyDTO companyDTO)
    {
        try {
            Company created = companyRepository.save(this.modelMapper.map(companyDTO, Company.class));
            return new Message(StatusCode.OK, created.getId());
        } catch (Exception e) {
            e.printStackTrace();
            return new Message(StatusCode.CREATE_FAILURE, "Fail to create company");
        }
    }


    // Retrieve all companies
    public List<CompanyDTO> getAllCompanies() {
        return companyRepository.findAll().stream()
                .map(elem -> this.modelMapper.map(elem, CompanyDTO.class))
                .collect(Collectors.toList());
    }

    // Get a specific company by ID
    public Optional<CompanyDTO> getCompanyById(String id) {
        return companyRepository.findById(id).map(company -> this.modelMapper.map(company, CompanyDTO.class));
    }

    // Update a company
    public String updateCompany(String id, CompanyDTO companyDTO) {
        if (companyRepository.existsById(id)) {
            companyDTO.setId(id);
            companyRepository.save(this.modelMapper.map(companyDTO, Company.class));
            return id;
        }
        return null;
    }

    // Delete a company by ID
    public void deleteCompany(String id) {
        companyRepository.deleteById(id);
    }


    public CompanyInfo buildCompanyInfoFromDTO(CompanyDTO companyDTO) {
        return CompanyInfo.builder()
                .companyName(companyDTO.getCompanyName())
                .companyLocation(companyDTO.getCompanyLocation())
                .companyType(companyDTO.getCompanyType())
                .currency(companyDTO.getCurrency())
                .industryAndField(companyDTO.getIndustryAndField())
                .mAndAStrategy(companyDTO.getMAndAStrategy())
                .turnoverLevel(companyDTO.getTurnoverLevel())
                .build();
    }

    public CompanyInfo buildCompanyInfoFromEntity(Company company) {
        return null;
    }

}

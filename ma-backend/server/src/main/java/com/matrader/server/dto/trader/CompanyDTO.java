package com.matrader.server.dto.trader;


import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class CompanyDTO {
    private String id; // MongoDB ID, automatically generated if not provided

    // Company Info
    private String companyType;
    private List<String> industryAndField;
    private List<String> currency;
    private String turnoverLevel;
    private String companyLocation;
    private List<String> mAndAStrategy;

    // Contact Info
    private String department;
    private String position;
    private String keyContactPerson;
    private List<String> preferredContactMethod;
    private String contactInformation;
    private String inquiryContent;
}
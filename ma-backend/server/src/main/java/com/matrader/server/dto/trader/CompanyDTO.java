package com.matrader.server.dto.trader;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDTO {
    private String id; // MongoDB ID, automatically generated if not provided

    // Company Info
    private String companyName;
    private List<String> companyType;
    private List<String> industryAndField;
    private List<String> currency;
    private List<String> turnoverLevel;
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

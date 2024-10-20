package com.matrader.server.entity.trader;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "company")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Company {

    @Id
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

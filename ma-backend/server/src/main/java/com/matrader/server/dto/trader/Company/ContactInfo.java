package com.matrader.server.dto.trader.Company;

import lombok.Data;

import java.util.List;

@Data
public class ContactInfo {
    private String department;
    private String position;
    private String keyContactPerson;
    private List<String> preferredContactMethod;
    private String contactInformation;
    private String inquiryContent;
}

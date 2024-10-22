package com.matrader.server.dto.trader.Company;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ContactInfo {
    private String department;
    private String position;
    private String keyContactPerson;
    private List<String> preferredContactMethod;
    private String contactInformation;
    private String inquiryContent;
}

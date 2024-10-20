package com.matrader.server.dto.trader.Company;

import lombok.Data;

import java.util.List;

@Data
public class CompanyInfo {
    private String companyType;
    private List<String> industryAndField;
    private List<String> currency;
    private String turnoverLevel;
    private String companyLocation;
    private List<String> mAndAStrategy;
}

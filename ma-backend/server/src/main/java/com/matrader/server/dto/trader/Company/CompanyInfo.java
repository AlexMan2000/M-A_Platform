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
public class CompanyInfo {
    private String companyName;
    private List<String> companyType;
    private List<String> industryAndField;
    private List<String> currency;
    private List<String> turnoverLevel;
    private String companyLocation;
    private List<String> mAndAStrategy;
}

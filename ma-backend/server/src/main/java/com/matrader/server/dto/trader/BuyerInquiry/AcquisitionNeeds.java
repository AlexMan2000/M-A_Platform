package com.matrader.server.dto.trader.BuyerInquiry;

import lombok.Data;

import java.util.List;
@Data
public class AcquisitionNeeds {
    private String desiredIndustry;
    private List<String> desiredRegion;
    private List<String> currency;
    private List<String> preferredDealSize;
}

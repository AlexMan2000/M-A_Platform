package com.matrader.server.dto.trader.BuyerInquiry;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AcquisitionNeeds {
    private String desiredIndustry;
    private List<String> desiredRegion;
    private List<String> currency;
    private List<String> preferredDealSize;
}

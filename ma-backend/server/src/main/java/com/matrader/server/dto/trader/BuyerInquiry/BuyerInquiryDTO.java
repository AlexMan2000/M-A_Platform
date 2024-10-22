package com.matrader.server.dto.trader.BuyerInquiry;

import com.matrader.server.dto.trader.Company.CompanyInfo;
import com.matrader.server.dto.trader.Company.ContactInfo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BuyerInquiryDTO {

    private AcquisitionNeeds acquisitionNeeds;
    private CompanyInfo companyInfo;
    private ContactInfo contactInfo;
    private Instant creationTime;
    private Instant onlineTime;
}
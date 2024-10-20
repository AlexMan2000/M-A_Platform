package com.matrader.server.dto.trader.BuyerInquiry;

import com.matrader.server.dto.trader.Company.CompanyInfo;
import com.matrader.server.dto.trader.Company.ContactInfo;
import lombok.Data;

@Data
public class BuyerInquiryDTO {

    private AcquisitionNeeds acquisitionNeeds;
    private CompanyInfo companyInfo;
    private ContactInfo contactInfo;
}
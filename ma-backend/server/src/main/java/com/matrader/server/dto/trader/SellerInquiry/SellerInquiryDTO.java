package com.matrader.server.dto.trader.SellerInquiry;

import com.matrader.server.dto.trader.Company.CompanyInfo;
import com.matrader.server.dto.trader.Company.ContactInfo;
import lombok.Data;

@Data
public class SellerInquiryDTO {
    private SellingMotivations sellingMotivations;
    private CompanyInfo companyInfo;
    private ContactInfo contactInfo;
}

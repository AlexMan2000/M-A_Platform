package com.matrader.server.service.trader;


import com.matrader.server.dto.trader.BuyerInquiry.AcquisitionNeeds;
import com.matrader.server.dto.trader.BuyerInquiry.BuyerInquiryDTO;
import com.matrader.server.dto.trader.Company.CompanyInfo;
import com.matrader.server.dto.trader.Company.ContactInfo;
import com.matrader.server.dto.trader.CompanyDTO;
import com.matrader.server.dto.trader.SellerInquiry.SellerInquiryDTO;
import com.matrader.server.dto.trader.SellerInquiry.SellingMotivations;
import com.matrader.server.entity.trader.Inquiry;
import com.matrader.server.repository.trader.entityRepository.InquiryEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InquiryService {

    @Autowired
    private InquiryEntityRepository inquiryEntityRepository;

    @Autowired
    private CompanyService companyService;

    public void addBuyerInquiry(BuyerInquiryDTO buyerInquiryDTO) {

        AcquisitionNeeds acquisitionNeeds = buyerInquiryDTO.getAcquisitionNeeds();
        CompanyInfo companyInfo = buyerInquiryDTO.getCompanyInfo();
        ContactInfo contactInfo = buyerInquiryDTO.getContactInfo();

        String companyId = createCompanyDTOFromInfo(companyInfo, contactInfo);
        Inquiry newInquery = Inquiry.builder()
                .type("seller")
                .desiredIndustry(acquisitionNeeds.getDesiredIndustry())
                .currency(acquisitionNeeds.getCurrency())
                .preferredDealSize(acquisitionNeeds.getPreferredDealSize())
                .companyId(companyId)
                .build();
        try {
            Inquiry created = inquiryEntityRepository.save(newInquery);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void addSellerInquiry(SellerInquiryDTO sellerInquiryDTO) {
        SellingMotivations sellingMotivations = sellerInquiryDTO.getSellingMotivations();
        CompanyInfo companyInfo = sellerInquiryDTO.getCompanyInfo();
        ContactInfo contactInfo = sellerInquiryDTO.getContactInfo();

        String companyId = createCompanyDTOFromInfo(companyInfo, contactInfo);

        Inquiry newInquery = Inquiry.builder()
                .type("seller")
                .sellingMotivations(sellingMotivations.getMotivations())
                .companyId(companyId)
                .build();
        try {
            Inquiry created = inquiryEntityRepository.save(newInquery);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public String createCompanyDTOFromInfo(CompanyInfo companyInfo, ContactInfo contactInfo) {
        CompanyDTO newCompany = CompanyDTO.builder()
                .companyType(companyInfo.getCompanyType())
                .industryAndField(companyInfo.getIndustryAndField())
                .currency(companyInfo.getCurrency())
                .turnoverLevel(companyInfo.getTurnoverLevel())
                .companyLocation(companyInfo.getCompanyLocation())
                .mAndAStrategy(companyInfo.getMAndAStrategy())
                .department(contactInfo.getDepartment())
                .position(contactInfo.getPosition())
                .keyContactPerson(contactInfo.getKeyContactPerson())
                .preferredContactMethod(contactInfo.getPreferredContactMethod())
                .contactInformation(contactInfo.getContactInformation())
                .inquiryContent(contactInfo.getInquiryContent()).build();

        return companyService.createCompany(newCompany).getMessage();
    }
}

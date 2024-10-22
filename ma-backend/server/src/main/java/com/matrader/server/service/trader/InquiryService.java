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

import java.sql.Date;
import java.time.Instant;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class InquiryService {

    @Autowired
    private InquiryEntityRepository inquiryEntityRepository;

    @Autowired
    private CompanyService companyService;


    public List<SellerInquiryDTO> getAllSellerInquiry() {
        List<Inquiry> all = inquiryEntityRepository.findAll();
        return all.stream().filter(elem -> elem.getType().equals("seller")).map(this::mapFromInquiryToSellerInquiry).collect(Collectors.toList());
    }

    public SellerInquiryDTO getSellerInquiryById(String id) {
        Optional<Inquiry> byId = inquiryEntityRepository.findById(id);
        if (byId.isEmpty()) {
            throw new NoSuchElementException("No such records");
        } else {
            return mapFromInquiryToSellerInquiry(byId.get());
        }
    }

    public List<BuyerInquiryDTO> getAllBuyerInquiry() {
        List<Inquiry> all = inquiryEntityRepository.findAll();
        return all.stream().filter(elem -> elem.getType().equals("buyer")).map(this::mapFromInquiryToBuyerInquiry).collect(Collectors.toList());
    }

    public BuyerInquiryDTO getBuyerInquiryById(String id) {
        Optional<Inquiry> byId = inquiryEntityRepository.findById(id);
        if (byId.isEmpty()) {
            throw new NoSuchElementException("No such records");
        } else {
            return mapFromInquiryToBuyerInquiry(byId.get());
        }
    }


    public void addBuyerInquiry(BuyerInquiryDTO buyerInquiryDTO) {

        AcquisitionNeeds acquisitionNeeds = buyerInquiryDTO.getAcquisitionNeeds();
        CompanyInfo companyInfo = buyerInquiryDTO.getCompanyInfo();
        ContactInfo contactInfo = buyerInquiryDTO.getContactInfo();

        String companyId = createCompanyDTOFromInfo(companyInfo, contactInfo);
        Instant currentTimestamp = Instant.now();
        Inquiry newInquery = Inquiry.builder()
                .type("buyer")
                .desiredRegion(acquisitionNeeds.getDesiredRegion())
                .desiredIndustry(acquisitionNeeds.getDesiredIndustry())
                .currency(acquisitionNeeds.getCurrency())
                .preferredDealSize(acquisitionNeeds.getPreferredDealSize())
                .companyId(companyId)
                .creationTime(currentTimestamp)
                .onlineTime(currentTimestamp)
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

        Instant currentTimestamp = Instant.now();
        Inquiry newInquery = Inquiry.builder()
                .type("seller")
                .sellingMotivations(sellingMotivations.getMotivations())
                .companyId(companyId)
                .creationTime(currentTimestamp)
                .onlineTime(currentTimestamp)
                .build();

        try {
            Inquiry created = inquiryEntityRepository.save(newInquery);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public String createCompanyDTOFromInfo(CompanyInfo companyInfo, ContactInfo contactInfo) {
        CompanyDTO newCompany = CompanyDTO.builder()
                .companyName(companyInfo.getCompanyName())
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

    private SellerInquiryDTO mapFromInquiryToSellerInquiry(Inquiry inquiry) {
        assert inquiry.getType().equals("seller");
        List<String> sellingMotivations = inquiry.getSellingMotivations();
        String companyId = inquiry.getCompanyId();
        Optional<CompanyDTO> companyObj = companyService.getCompanyById(companyId);
        if (companyObj.isEmpty()) {
            throw new NullPointerException("No such company exists!");

        } else {
            CompanyDTO companyDTO = companyObj.get();
            SellingMotivations sellingMotivationsObj = SellingMotivations
                    .builder()
                    .motivations(sellingMotivations)
                    .build();
            CompanyInfo companyInfoObj =  companyService.buildCompanyInfoFromDTO(companyDTO);
            ContactInfo contactInfo = ContactInfo.builder()
                    .contactInformation(companyDTO.getContactInformation())
                    .keyContactPerson(companyDTO.getKeyContactPerson())
                    .preferredContactMethod(companyDTO.getPreferredContactMethod())
                    .department(companyDTO.getDepartment())
                    .position(companyDTO.getPosition())
                    .inquiryContent(companyDTO.getInquiryContent()).build();
            return SellerInquiryDTO.builder()
                    .companyInfo(companyInfoObj)
                    .contactInfo(contactInfo)
                    .sellingMotivations(sellingMotivationsObj)
                    .creationTime(inquiry.getCreationTime())
                    .onlineTime(inquiry.getOnlineTime())
                    .build();
        }
    }

    private BuyerInquiryDTO mapFromInquiryToBuyerInquiry(Inquiry inquiry) {
        assert inquiry.getType().equals("buyer");
        String companyId = inquiry.getCompanyId();
        Optional<CompanyDTO> companyObj = companyService.getCompanyById(companyId);
        if (companyObj.isEmpty()) {
            throw new NullPointerException("No such company exists!");
        } else {
            CompanyDTO companyDTO = companyObj.get();

            AcquisitionNeeds acquisitionNeeds = AcquisitionNeeds
                    .builder()
                    .desiredIndustry(inquiry.getDesiredIndustry())
                    .currency(inquiry.getCurrency())
                    .preferredDealSize(inquiry.getPreferredDealSize())
                    .desiredRegion(inquiry.getDesiredRegion())
                    .build();

            CompanyInfo companyInfoObj = companyService.buildCompanyInfoFromDTO(companyDTO);
            ContactInfo contactInfo = ContactInfo.builder()
                    .contactInformation(companyDTO.getContactInformation())
                    .keyContactPerson(companyDTO.getKeyContactPerson())
                    .preferredContactMethod(companyDTO.getPreferredContactMethod())
                    .department(companyDTO.getDepartment())
                    .position(companyDTO.getPosition())
                    .inquiryContent(companyDTO.getInquiryContent()).build();
            return BuyerInquiryDTO.builder()
                    .companyInfo(companyInfoObj)
                    .contactInfo(contactInfo)
                    .creationTime(inquiry.getCreationTime())
                    .onlineTime(inquiry.getOnlineTime())
                    .acquisitionNeeds(acquisitionNeeds).build();
        }
    }
}

package com.matrader.server.controller.inquiry;


import com.matrader.server.dto.trader.BuyerInquiry.BuyerInquiryDTO;
import com.matrader.server.dto.trader.SellerInquiry.SellerInquiryDTO;
import com.matrader.server.service.trader.InquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/inquiry")
public class InquiryController {

    @Autowired
    private InquiryService inquiryService;

    @PostMapping("/submitBuyer")
    public void addBuyerInquiry(@RequestBody BuyerInquiryDTO buyerInquiryDTO) {
        inquiryService.addBuyerInquiry(buyerInquiryDTO);
    }

    @PostMapping("/submitSeller")
    public void addSellerInquiry(@RequestBody SellerInquiryDTO sellerInquiryDTO) {
        inquiryService.addSellerInquiry(sellerInquiryDTO);
    }



}

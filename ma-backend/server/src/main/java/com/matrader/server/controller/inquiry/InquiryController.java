package com.matrader.server.controller.inquiry;


import com.matrader.server.dto.trader.BuyerInquiry.BuyerInquiryDTO;
import com.matrader.server.dto.trader.SellerInquiry.SellerInquiryDTO;
import com.matrader.server.service.trader.InquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/sellers")
    public ResponseEntity<List<SellerInquiryDTO>> getAllSellerInquiries() {
        return ResponseEntity.ok(inquiryService.getAllSellerInquiry());
    }

    @GetMapping("/buyers")
    public ResponseEntity<List<BuyerInquiryDTO>> getAllBuyerInquiries() {
        return ResponseEntity.ok(inquiryService.getAllBuyerInquiry());
    }
}

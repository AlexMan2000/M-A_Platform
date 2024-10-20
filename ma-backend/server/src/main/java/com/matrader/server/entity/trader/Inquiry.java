package com.matrader.server.entity.trader;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document(collection="inquiry")
public class Inquiry {

    @Id
    private String id;
    private String type; // buyer or seller

    // Inquiry Info
    // Buyer Specific
    private String desiredIndustry;
    private List<String> desiredRegion;
    private List<String> currency;
    private List<String> preferredDealSize;

    // Seller Specific
    private List<String> sellingMotivations;

    // Company Info
    private String companyId;
}

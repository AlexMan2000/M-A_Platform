package com.matrader.server.repository.trader.entityRepository;


import com.matrader.server.entity.trader.Inquiry;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InquiryEntityRepository extends MongoRepository<Inquiry, String> {
}

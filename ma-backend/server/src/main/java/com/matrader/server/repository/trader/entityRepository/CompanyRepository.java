package com.matrader.server.repository.trader.entityRepository;
import com.matrader.server.entity.trader.Company;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends MongoRepository<Company, String> {
    // Optional: Custom query methods can be added here if needed


}

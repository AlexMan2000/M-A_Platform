package com.matrader.server.service.auth;

import com.matrader.server.dto.users.UserEntityDTO;
import org.springframework.security.core.userdetails.UserDetails;
import io.jsonwebtoken.Claims;
import java.util.Map;
import java.util.function.Function;

public interface JwtService {

    String generateToken(UserEntityDTO userEntityDTO);

    String generateToken(
            Map<String, Object> claims,
            UserEntityDTO userEntityDTO);


    <T> T extractClaim(String token, Function<Claims, T> claimsResolver);


    Claims extractAllClaims(String token);

    String extractUserEmail(String token);
    boolean isTokenValid(String token, UserDetails userDetails);

    boolean isTokenExpired(String token);
}

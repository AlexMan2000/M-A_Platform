package com.matrader.server.service.auth;


import com.matrader.server.dto.users.UserEntityDTO;

public interface LoginService {

    UserEntityDTO findUserByEmailAndPasswordHash(String email, String passwordHash);

}

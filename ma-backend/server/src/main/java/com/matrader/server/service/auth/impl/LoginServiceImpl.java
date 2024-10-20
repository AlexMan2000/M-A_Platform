package com.matrader.server.service.auth.impl;

import com.matrader.server.dto.users.UserEntityDTO;
import com.matrader.server.entity.auth.UserEntity;
import com.matrader.server.repository.auth.UserEntityRepository;
import com.matrader.server.service.auth.LoginService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LoginServiceImpl implements LoginService {


    private final ModelMapper modelMapper;
    private final UserEntityRepository userEntityRepository;

    @Autowired
    public LoginServiceImpl(ModelMapper modelMapper, UserEntityRepository userEntityRepository) {
        this.modelMapper = modelMapper;
        this.userEntityRepository = userEntityRepository;
    }
    @Override
    public UserEntityDTO findUserByEmailAndPasswordHash(String email, String passwordHash) {
        return entityToDto(userEntityRepository.findByEmailAndPassword(email, passwordHash));
    }


    private UserEntityDTO entityToDto(UserEntity userEntity) {
        if (userEntity == null) {
            return null;
        }
        return modelMapper.map(userEntity, UserEntityDTO.class);
    }


    private UserEntity dtoToEntity(UserEntityDTO userEntityDTO) {
        if (userEntityDTO == null) {
            return null;
        }
        return modelMapper.map(userEntityDTO, UserEntity.class);
    }
}

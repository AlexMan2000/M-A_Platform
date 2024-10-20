package com.matrader.server.service.auth.impl;

import com.matrader.server.dto.users.RoleEntityDTO;
import com.matrader.server.entity.auth.RoleEntity;
import com.matrader.server.repository.auth.RoleEntityRepository;
import com.matrader.server.service.auth.RoleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RoleServiceImpl implements RoleService {

    private final ModelMapper modelMapper;
    private final RoleEntityRepository roleEntityRepository;

    @Autowired
    public RoleServiceImpl(ModelMapper modelMapper, RoleEntityRepository roleEntityRepository) {
        this.modelMapper = modelMapper;
        this.roleEntityRepository = roleEntityRepository;
    }

    @Override
    public RoleEntityDTO getRoleEntityById(Long id) {
        RoleEntity roleEntity = roleEntityRepository.findRoleEntitiesById(id);
        return roleEntity != null ? entityToDto(roleEntity) : null;
    }



    private RoleEntityDTO entityToDto(RoleEntity roleEntity) {
        return modelMapper.map(roleEntity, RoleEntityDTO.class);
    }


    private RoleEntity dtoToEntity(RoleEntityDTO roleEntityDTO) {
        return modelMapper.map(roleEntityDTO, RoleEntity.class);
    }
}

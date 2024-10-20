package com.matrader.server.service.auth;

import com.matrader.server.dto.users.RoleEntityDTO;

public interface RoleService {

    RoleEntityDTO getRoleEntityById(Long id);
}

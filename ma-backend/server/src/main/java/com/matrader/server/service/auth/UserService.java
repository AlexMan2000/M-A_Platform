package com.matrader.server.service.auth;


import com.matrader.server.criteria_utils.searching.UserEntitySearchCriteria;
import com.matrader.server.dto.users.RoleEntityDTO;
import com.matrader.server.dto.users.UserEntityDTO;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

public interface UserService {


    List<UserEntityDTO> getUserDTOByFilter(UserEntitySearchCriteria userEntitySearchCriteria);

    UserEntityDTO getUserDTOById(Long id);

    UserEntityDTO getUserDTOByEmail(String email);

    UserDetails getUserDetails(String email);

    RoleEntityDTO getUserRoleById(Long id);


    UserEntityDTO createOrUpdateUser(UserEntityDTO userEntityDTO);

    UserEntityDTO updateUserByEmail(UserEntityDTO userEntityDTO, String email);


    UserEntityDTO updateUserById(UserEntityDTO userEntityDTO, Long id);



    void deleteUserById(Long id);

}

package com.matrader.server.repository.auth;

import com.matrader.server.entity.auth.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleEntityRepository extends JpaRepository<RoleEntity, Long> {

    RoleEntity findRoleEntitiesById(Long id);


}

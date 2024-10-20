package com.matrader.server.repository.auth;

import com.matrader.server.entity.auth.RolePermissionEntity;
import com.matrader.server.entity.auth.RolePermissionId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolePermissionRepository extends JpaRepository<RolePermissionEntity, RolePermissionId> {
}

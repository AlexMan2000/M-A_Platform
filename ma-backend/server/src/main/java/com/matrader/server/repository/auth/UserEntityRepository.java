package com.matrader.server.repository.auth;

import com.matrader.server.entity.auth.UserEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface UserEntityRepository extends JpaRepository<UserEntity, Long> {


    UserEntity findUserEntityById(Long uid);

    UserEntity findUserEntityByEmail(String email);

    @Query("SELECT u FROM UserEntity u WHERE u.email = :email AND u.passwordHash = :passwordHash")
    UserEntity findByEmailAndPassword(@Param("email") String email, @Param("passwordHash") String passwordHash);


    @Transactional
    @Modifying
    UserEntity deleteUserEntityById(Long id);

}

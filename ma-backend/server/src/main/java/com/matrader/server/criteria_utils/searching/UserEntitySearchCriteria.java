package com.matrader.server.criteria_utils.searching;

import lombok.Data;

import java.sql.Date;

@Data
public class UserEntitySearchCriteria implements SearchCriteria {
    private Long id;
    private Long roleId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String mobile;
    private String email;
    private String passwordHash;
    private Date registeredAt;
    private Date lastLogin;
    private String intro;
    private String profile;
}

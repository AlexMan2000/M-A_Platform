package com.matrader.server.commons.enums.https;

public enum StatusCode {
    OK(200),
    CREATE_FAILURE(510),
    UPDATE_FAILURE(511),
    DELETE_FAILURE(512);

    private long numVal;

    StatusCode(long value) {
        this.numVal = value;
    }

}

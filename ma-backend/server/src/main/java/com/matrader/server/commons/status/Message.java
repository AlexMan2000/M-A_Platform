package com.matrader.server.commons.status;


import com.matrader.server.commons.enums.https.StatusCode;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Message {
    private StatusCode statusCode;
    private String message;
}

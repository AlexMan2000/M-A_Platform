package com.matrader.server;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;

import java.util.concurrent.atomic.AtomicLong;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class ServerApplication {
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

	@Bean
	public AtomicLong getTimeCounter() { return new AtomicLong(); }

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}


}

package com.vinay.skuservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@ComponentScan(basePackages={"com.vinay.repositories","com.vinay.controllers","com.vinay.services","com.vinay.cors"})
@EnableJpaRepositories(basePackages="com.vinay.repositories")
@EntityScan(basePackages="com.vinay.entities")
@SpringBootApplication
public class SkuserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkuserviceApplication.class, args);
	}
}

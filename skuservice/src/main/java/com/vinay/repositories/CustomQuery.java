package com.vinay.repositories;

import java.sql.Connection;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CustomQuery {
	
	@Autowired
	DataSource dataSource;

	Connection conn = null;
	
	
}

package com.vinay.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vinay.entities.SkuTransaction_SKU005;
import com.vinay.repositories.SkuTransaction005DAO;

@Service
public class SkuTransactionService {

	@Autowired
	SkuTransaction005DAO skuTransactionDAO;

	public void getAllSkuTransactions() {
		Iterable<SkuTransaction_SKU005> skuTransctionList = skuTransactionDAO.findAll();
	}
}

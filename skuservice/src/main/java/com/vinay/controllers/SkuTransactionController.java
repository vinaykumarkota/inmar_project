package com.vinay.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinay.services.SkuTransactionService;

@RestController
@RequestMapping(value="/skutransaction")
public class SkuTransactionController {
	
	@Autowired
	SkuTransactionService skuTransService;
	
	@RequestMapping("/allSkuTrans")
	public String getAllSkuTransactions(){
		skuTransService.getAllSkuTransactions();
		return "yes";
	}
}

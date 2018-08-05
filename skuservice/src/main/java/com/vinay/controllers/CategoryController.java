package com.vinay.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinay.services.CategoryService;
import com.vinay.vo.CategoryVo;

@RestController
@RequestMapping(value="/category")
public class CategoryController {
	
	@Autowired
	CategoryService categoryService;
	
	@RequestMapping("/allCategories")
	public List<CategoryVo> getAllCategories(){
		List<CategoryVo> categoryList=categoryService.getAllCategories();
		return categoryList;
	}
	
	/*@RequestMapping("/allCategories")
	public List<CategoryVo> saveCategories(@RequestBody List<CategoryVo> categoryList){
		List<CategoryVo> categoryList=categoryService.getAllCategories();
		return categoryList;
	}*/
	
}
package com.vinay.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vinay.entities.SubCategory_SKU004;
import com.vinay.repositories.SubCategory004DAO;
import com.vinay.vo.SubCategoryVo;

@Service
public class SubCategoryService {
	
	@Autowired
	SubCategory004DAO subCategoryDAO;

	public List<SubCategoryVo> getAllSubCategories(){
		Iterable<SubCategory_SKU004> subCategoriesList=subCategoryDAO.findAll();
		List<SubCategoryVo> dataList=new ArrayList<SubCategoryVo>();
		for (SubCategory_SKU004 Obj : subCategoriesList) {
			SubCategoryVo vo=new SubCategoryVo();
			vo.setSubCategoryId(Obj.getSku004SubCategoryId());
			vo.setSubCateogryName(Obj.getSku004SubCategoryName());
			vo.setSubCategoryDesc(Obj.getSku004SubCategoryDesc());
			vo.setCategoryId(Obj.getCategory().getSku003CategoryId());
			vo.setCategoryName(Obj.getCategory().getSku003CategoryName());
			vo.setDepartmentName(Obj.getCategory().getDepartment().getSku002DepartmentName());
			vo.setLocationName(Obj.getCategory().getDepartment().getLocation().getSku001LocationName());
			vo.setEditable(false);
			vo.setActiveFlag("active");
			dataList.add(vo);
		}
		return dataList;
	}
}

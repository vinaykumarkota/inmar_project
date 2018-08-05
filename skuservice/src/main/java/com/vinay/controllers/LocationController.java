package com.vinay.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinay.services.LocationService;
import com.vinay.vo.CategoryVo;
import com.vinay.vo.DepartmentVo;
import com.vinay.vo.LocationVo;
import com.vinay.vo.SubCategoryVo;

@RestController
@RequestMapping(value="/location")
public class LocationController {
	
	@Autowired
	LocationService locService;
	
	@RequestMapping("/allLocations")
	public List<LocationVo> getAllLocations() {
		List<LocationVo> locVoList=locService.getAllLocations();
		return locVoList;
	}

	@RequestMapping("/saveLocations")
	public List<LocationVo> saveLocations(@RequestBody List<LocationVo> locList){
		return locService.saveLocations(locList);
	}
	
	@RequestMapping("/deleteLocation")
	public LocationVo deleteLocations(@RequestBody LocationVo locObj){
		return locService.deleteLocations(locObj);
	}
	
	@RequestMapping("/{locId}/department")
	public List<DepartmentVo> getDepartment(@PathVariable Long locId) {
		return locService.getDepartsByLocation(locId);
	}
	
	@RequestMapping("/{locId}/department/{deptId}/category")
	public List<CategoryVo> getCategories(@PathVariable Long locId,@PathVariable Long deptId){
		return locService.getCategoriesByDept(locId, deptId);
	}
	
	@RequestMapping("/{locId}/department/{deptId}/category/{catgId}/subcategory")
	public List<SubCategoryVo> getSubCategories(@PathVariable Long locId,@PathVariable Long deptId,@PathVariable Long catgId){
		return locService.getSubCategoriesByCategory(locId, deptId, catgId);
	}
	
	@RequestMapping("/{locId}/department/{deptId}/category/{catgId}/subcategory/{subId}")
	public SubCategoryVo getSubCategoryById(@PathVariable Long locId,@PathVariable Long deptId,@PathVariable Long catgId,@PathVariable Long subId){
		return locService.getSubCategorieById(locId, deptId, catgId,subId);
	}
	
}
package com.vinay.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinay.services.DepartmentService;
import com.vinay.vo.DepartmentVo;

@RestController
@RequestMapping(value="/department")
public class DepartmentController {
	
	@Autowired
	DepartmentService deptService;

	@RequestMapping("/allDepartments")
	public List<DepartmentVo> getAllDepartments(){
		List<DepartmentVo> deptList=deptService.getAllDepartments();
		return deptList;
	}
	
	@RequestMapping("/saveDepartments")
	public List<DepartmentVo> saveDepartments(@RequestBody List<DepartmentVo> deptList){
		return deptService.saveDepartments(deptList);
	}
	
	@RequestMapping("/deleteDepartment")
	public DepartmentVo deleteDepartment(@RequestBody DepartmentVo deptObj){
		return deptService.deleteDepartment(deptObj);
	}
}
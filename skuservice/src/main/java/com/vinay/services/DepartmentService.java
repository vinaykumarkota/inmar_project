package com.vinay.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vinay.entities.Department_SKU002;
import com.vinay.repositories.Department002DAO;
import com.vinay.repositories.Location001DAO;
import com.vinay.vo.CommonUtil;
import com.vinay.vo.DepartmentVo;

@Service
public class DepartmentService {
	
	@Autowired
	Department002DAO departmentDAO;
	
	@Autowired
	Location001DAO location001DAO;

	public List<DepartmentVo> getAllDepartments(){
		Iterable<Department_SKU002> departmentsList=departmentDAO.findAll();
		List<DepartmentVo> deptList=new ArrayList<DepartmentVo>();
		for (Department_SKU002 deptObj : departmentsList) {
			DepartmentVo voObj=new DepartmentVo();
			voObj.setDepartmentId(deptObj.getSku002DepartmentId());
			voObj.setDepartmentName(deptObj.getSku002DepartmentName());
			voObj.setDepartmentDesc(deptObj.getSku002DepartmentDesc());
			voObj.setLocationID(deptObj.getLocation().getSku001LocationId());
			voObj.setLocationName(deptObj.getLocation().getSku001LocationName());
			deptList.add(voObj);
		}
		return deptList;
	}
	
	public List<DepartmentVo> saveDepartments(List<DepartmentVo> deptList){
		for (DepartmentVo deptVo : deptList) {
			Department_SKU002 deptObj=new Department_SKU002();
			deptObj.setSku002DepartmentName(deptVo.getDepartmentName());
			deptObj.setSku002DepartmentDesc(deptVo.getDepartmentDesc());
			deptObj.setLocation(location001DAO.findBySku001LocationName(deptVo.getLocationName()));
			deptObj.setSku002ActiveFlag("y");
			if(deptVo.getDepartmentId()!=null)
				deptObj.setSku002DepartmentId(deptVo.getDepartmentId());
			departmentDAO.save(deptObj);
		}
		return deptList;
	}
	
	public DepartmentVo deleteDepartment(DepartmentVo deptObj) {
//		departmentDAO.delete(departmentDAO.findById(deptObj.getDepartmentId()).get());
		departmentDAO.deleteDepartment(deptObj.getDepartmentId());
		return deptObj;
	}
}
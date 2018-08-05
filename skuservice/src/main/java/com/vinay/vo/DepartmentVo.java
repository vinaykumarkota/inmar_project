package com.vinay.vo;

import org.springframework.stereotype.Component;

@Component
public class DepartmentVo {
	
	private Long departmentId;
	private String departmentName;
	private String departmentDesc;
	private String activeFlag;
	private Long locationID;
	private String locationName;
	private boolean editable;
	
	public Long getDepartmentId() {
		return departmentId;
	}
	public void setDepartmentId(Long departmentId) {
		this.departmentId = departmentId;
	}
	public boolean isEditable() {
		return editable;
	}
	public void setEditable(boolean editable) {
		this.editable = editable;
	}
	public String getLocationName() {
		return locationName;
	}
	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public String getDepartmentDesc() {
		return departmentDesc;
	}
	public void setDepartmentDesc(String departmentDesc) {
		this.departmentDesc = departmentDesc;
	}
	public String getActiveFlag() {
		return activeFlag;
	}
	public void setActiveFlag(String activeFlag) {
		this.activeFlag = activeFlag;
	}
	public Long getLocationID() {
		return locationID;
	}
	public void setLocationID(Long locationID) {
		this.locationID = locationID;
	}

	
}
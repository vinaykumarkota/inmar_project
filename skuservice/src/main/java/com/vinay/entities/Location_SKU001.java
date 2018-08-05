package com.vinay.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="SKU001_LOCATION")
public class Location_SKU001 implements Serializable{

	private static final long serialVersionUID = 1L;
	
	public Location_SKU001() {
		
	}

	@Id
	@Column(name="SKU001_LOCATION_ID")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long sku001LocationId;
	
	@Column(name="SKU001_LOCATION_NAME")
	private String sku001LocationName;
	
	@Column(name="SKU001_LOCATION_DESC")
	private String sku001LocationDesc;
	
	@Column(name="SKU001_ACTV_F")
	private String sku001ActiveFlag;

	public Long getSku001LocationId() {
		return sku001LocationId;
	}

	public void setSku001LocationId(Long sku001LocationId) {
		this.sku001LocationId = sku001LocationId;
	}

	public String getSku001LocationName() {
		return sku001LocationName;
	}

	public void setSku001LocationName(String sku001LocationName) {
		this.sku001LocationName = sku001LocationName;
	}

	public String getSku001LocationDesc() {
		return sku001LocationDesc;
	}

	public void setSku001LocationDesc(String sku001LocationDesc) {
		this.sku001LocationDesc = sku001LocationDesc;
	}

	public String getSku001ActiveFlag() {
		return sku001ActiveFlag;
	}

	public void setSku001ActiveFlag(String sku001ActiveFlag) {
		this.sku001ActiveFlag = sku001ActiveFlag;
	}
	
	
}

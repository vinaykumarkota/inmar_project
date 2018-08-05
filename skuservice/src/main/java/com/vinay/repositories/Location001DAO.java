package com.vinay.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.vinay.entities.Location_SKU001;

@Transactional
@Repository
public interface Location001DAO extends CrudRepository<Location_SKU001, Long>{

	Location_SKU001 findBySku001LocationName(@Param("locName") String locName);
}

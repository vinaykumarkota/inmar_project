package com.vinay.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.vinay.entities.SkuTransaction_SKU005;

@Transactional
@Repository
public interface SkuTransaction005DAO extends CrudRepository<SkuTransaction_SKU005, Long>{

}

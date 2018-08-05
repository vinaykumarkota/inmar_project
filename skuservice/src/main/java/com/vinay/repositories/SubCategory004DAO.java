package com.vinay.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.vinay.entities.Category_SKU003;
import com.vinay.entities.SubCategory_SKU004;

@Transactional
@Repository
public interface SubCategory004DAO extends CrudRepository<SubCategory_SKU004, Long>{

	@Query(value="select e from SubCategory_SKU004 e where e.category in (:catgList)")
	List<SubCategory_SKU004> getSubCategoriesByCatg(@Param("catgList") List<Category_SKU003> catgList);
}

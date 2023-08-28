package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Facility;

public interface FacilityRepository extends JpaRepository<Facility,Long>{

}

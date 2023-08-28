package com.app.service;

import java.util.List;

import com.app.entity.Facility;

public interface FacilityService {

	Facility addFacility(Facility f);

	List<Facility> getFacility();

    Facility updateFacility(Facility f);

	String deleteFacility(Long id);
	
	Facility getFacilityById(Long id);
}

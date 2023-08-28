package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entity.Facility;
import com.app.repository.FacilityRepository;

@Service
@Transactional
public class FacilityServiceImpl implements FacilityService{

	@Autowired
	private FacilityRepository fRepo;
	
	@Override
	public Facility addFacility(Facility f) {
		
		return fRepo.save(f);
	}

	@Override
	public List<Facility> getFacility() {
		
		return fRepo.findAll();
	}

	@Override
	public Facility updateFacility(Facility f) {
		
		return fRepo.save(f);
	}

	@Override
	public String deleteFacility(Long eid) {
		
		String msg="Invalid id, Facility details not deleted";
		if(fRepo.existsById(eid))
		{
			fRepo.deleteById(eid);
			msg="Facility with id "+eid+" deleted!!";
		}

		return msg;
	}

	@Override
	public Facility getFacilityById(Long Id) {
		Facility newFacility = fRepo.findById(Id).orElseThrow();
		return newFacility;
	}

	
}

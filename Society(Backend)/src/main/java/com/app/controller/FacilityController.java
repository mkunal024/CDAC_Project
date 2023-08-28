package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Facility;
import com.app.service.FacilityService;


@RestController
@RequestMapping("/Facility")
@CrossOrigin(origins="http://localhost:3000")
public class FacilityController {

	@Autowired
	private FacilityService fService;
	
	@GetMapping("/get")
	public List<Facility> getFacility()
	{
		return fService.getFacility();
	}
	
	@PostMapping("/add")
	public Facility addUser(@RequestBody Facility f)
	{
		return fService.addFacility(f);
	}
	
	@PutMapping("/update")
	public Facility updateUser(@RequestBody Facility f)
	{
		return fService.updateFacility(f);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteUser(@PathVariable("id") Long id)
	{
		return fService.deleteFacility(id);
	}
	
}

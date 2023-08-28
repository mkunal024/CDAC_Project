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

import com.app.dto.VisitorDTO;
import com.app.entity.Visitor;
import com.app.service.VisitorService;


@RestController
@RequestMapping("/Visitor")
@CrossOrigin(origins="http://localhost:3000")
public class VisitorController {

	@Autowired
	private VisitorService vService;
	
	@GetMapping("/get")
	public List<Visitor> getVisitor()
	{
		return vService.getVisitorDetails();
	}
	
	@PostMapping("/add")
	public Visitor addUser(@RequestBody VisitorDTO v)
	{
		return vService.addVisitorDetails(v);
	}
	
	@PutMapping("/update")
	public Visitor updateUser(@RequestBody Visitor v)
	{
		return vService.updateVisitorDetails(v);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteUser(@PathVariable("id") Long id)
	{
		return vService.deleteVisitorDetails(id);
	}
	
}

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

import com.app.entity.User;
import com.app.service.UserService;

@RestController
@RequestMapping("/User")
@CrossOrigin(origins="http://localhost:3000")

public class UserController {

	@Autowired
	private UserService aService;
	
	@GetMapping("/get")
	public List<User> getUser()
	{
		return aService.getUserDetails();
	}
	
	@PostMapping("/add")
	public User addUser(@RequestBody User a)
	{
		return aService.addUserDetails(a);
	}
	
	@PutMapping("/update")
	public User updateUser(@RequestBody User a)
	{
		return aService.updateUserDetails(a);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteUser(@PathVariable("id") Long id)
	{
		return aService.deleteUserDetails(id);
	}
	
}

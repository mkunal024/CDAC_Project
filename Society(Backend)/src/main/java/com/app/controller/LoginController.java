package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Login;
import com.app.entity.User;
import com.app.exception.ResourceNotFoundException;
import com.app.service.UserService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins="http://localhost:3000")

public class LoginController {
	@Autowired UserService uService;

	@PostMapping("/login")
	public ResponseEntity<User> getUser(@RequestBody Login login)
	{
		User user=this.uService.getByEmailAndPassword(login.getEmail(), login.getPassword());
				if(user==null)
				{
				
		   throw new ResourceNotFoundException(login.getEmail(),login.getPassword(),0);
		
				}
				return new ResponseEntity<User>(user,HttpStatus.OK);
	}
}

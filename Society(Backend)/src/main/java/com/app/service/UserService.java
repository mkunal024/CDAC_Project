package com.app.service;

import java.util.List;

import com.app.entity.User;

public interface UserService {

	User addUserDetails(User a);

	List<User> getUserDetails();

	User updateUserDetails(User a);

	String deleteUserDetails(Long id);
	
	User getByEmailAndPassword(String email,String password);
	
	User getUserById(Long Id);
}

package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entity.User;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository aRepo;
	
	@Autowired(required=true)
	private ModelMapper mapper;
	
	@Override
	public User addUserDetails(User a) {
		
		return aRepo.save(a);
	}

	@Override
	public List<User> getUserDetails() {
		
		return aRepo.findAll();
	}

	@Override
	public User updateUserDetails(User a) {
		
		return aRepo.save(a);
	}

	@Override
	public String deleteUserDetails(Long uid) {
		
		String msg="Invalid id, User details not deleted";
		if(aRepo.existsById(uid))
		{
			aRepo.deleteById(uid);
			msg="User with id "+uid+" deleted!!";
		}

		return msg;
	}

	@Override
	public User getByEmailAndPassword(String email, String password) {
		User user=this.aRepo.findByEmailAndPassword(email,password);
		if(user!=null)
		return this.mapper.map(user,User.class);
		return null;
	}

	@Override
	public User getUserById(Long Id) {
		User newUser = aRepo.findById(Id).orElseThrow();
		return newUser;
	}

	
}

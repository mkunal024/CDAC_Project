package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entity.User;

public interface UserRepository extends JpaRepository<User,Long>{

	@Query("SELECT u FROM User u where u.email=?1 and u.password=?2")
	User findByEmailAndPassword(String email, String password);

}

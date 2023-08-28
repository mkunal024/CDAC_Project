package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Event;

public interface EventRepository extends JpaRepository<Event,Long>{

}

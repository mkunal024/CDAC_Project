package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entity.Event;
import com.app.repository.EventRepository;

@Service
@Transactional
public class EventServiceImpl implements EventService{

	@Autowired
	private EventRepository eRepo;
	
	@Override
	public Event addEvent(Event e) {
		
		return eRepo.save(e);
	}

	@Override
	public List<Event> getEvent() {
		
		return eRepo.findAll();
	}

	@Override
	public Event updateEvent(Event e) {
		
		return eRepo.save(e);
	}

	@Override
	public String deleteEvent(Long eid) {
		
		String msg="Invalid id, Event details not deleted";
		if(eRepo.existsById(eid))
		{
			eRepo.deleteById(eid);
			msg="Event with id "+eid+" deleted!!";
		}

		return msg;
	}

	
}

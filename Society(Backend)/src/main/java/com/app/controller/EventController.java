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

import com.app.entity.Event;
import com.app.service.EventService;

@RestController
@RequestMapping("/Event")
@CrossOrigin(origins="http://localhost:3000")
public class EventController {

	@Autowired
	private EventService eService;
	
	@GetMapping("/get")
	public List<Event> getEvent()
	{
		return eService.getEvent();
	}
	
	@PostMapping("/add")
	public Event addEvent(@RequestBody Event e)
	{
		return eService.addEvent(e);
	}
	
	@PutMapping("/update")
	public Event updateEvent(@RequestBody Event e)
	{
		return eService.updateEvent(e);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteEvent(@PathVariable("id") Long id)
	{
		return eService.deleteEvent(id);
	}
	
}

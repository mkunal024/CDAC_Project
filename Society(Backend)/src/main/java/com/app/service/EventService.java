package com.app.service;

import java.util.List;

import com.app.entity.Event;

public interface EventService {

	Event addEvent(Event e);

	List<Event> getEvent();

    Event updateEvent(Event e);

	String deleteEvent(Long id);
}

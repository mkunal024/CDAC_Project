package com.app.service;

import java.util.List;

import com.app.dto.BookingDTO;
import com.app.entity.Booking;

public interface BookingService {

	Booking addBooking(BookingDTO b);

	List<Booking> getBooking();

    Booking updateBooking(Booking b);

	String deleteBooking(Long id);
	
	List<Booking> getBookingByUserId(Long Id);



}

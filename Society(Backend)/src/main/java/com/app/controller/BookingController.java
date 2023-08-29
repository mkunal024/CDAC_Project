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

import com.app.dto.BookingDTO;
import com.app.entity.Booking;
import com.app.service.BookingService;

@RestController
@RequestMapping("/Booking")
@CrossOrigin(origins="http://localhost:3000")
public class BookingController {

	@Autowired
	private BookingService bService;
	
	
	@GetMapping("/get")
	public List<Booking> getBooking()
	{
		return bService.getBooking();
	}
	
	@PostMapping("/add")
	public Booking addBooking(@RequestBody BookingDTO b)
	{
		return bService.addBooking(b);
	}
	
	@PutMapping("/update")
	public Booking updateBooking(@RequestBody Booking b)
	{
		return bService.updateBooking(b);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteBooking(@PathVariable("id") Long id)
	{
		return bService.deleteBooking(id);
	}
	
	@GetMapping("/get/{id}")
	public List<Booking> getBookingByUserId(@PathVariable("id") Long id)
	{
		return bService.getBookingByUserId(id);
	}
	

	
}

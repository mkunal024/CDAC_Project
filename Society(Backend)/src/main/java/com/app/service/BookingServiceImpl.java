package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.BookingDTO;
import com.app.entity.Booking;
import com.app.entity.Facility;
import com.app.entity.User;
import com.app.repository.BookingRepository;

@Service
@Transactional
public class BookingServiceImpl implements BookingService{

	@Autowired
	private BookingRepository bRepo;
	
	@Autowired
	private UserService uImp;
	
	@Autowired
	private FacilityService fImp;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public Booking addBooking(BookingDTO b) {
		
		Booking book=mapper.map(b, Booking.class);
		User u=uImp.getUserById(b.getUserId());
		Facility f=fImp.getFacilityById(b.getFacilityCodeNo());
		book.setFacilityCodeNo(f);
		book.setUserId(u);
		return bRepo.save(book);
	}

	@Override
	public List<Booking> getBooking() {
		
		return bRepo.findAll();
	}

	@Override
	public Booking updateBooking(Booking b) {
		
		return bRepo.save(b);
	}

	@Override
	public String deleteBooking(Long eid) {
		
		String msg="Invalid id, Booking details not deleted";
		try {
	        if (bRepo.existsById(eid)) {
	            bRepo.deleteById(eid);
	            msg = "Booking with id " + eid + " deleted!!";
	        }
	    } catch (Exception e) {
	        e.printStackTrace();
	        msg = "An error occurred while deleting booking with id " + eid;
	    }

		return msg;
	}

	@Override
	public List<Booking> getBookingByUserId(Long Id) {
		
		List<Booking> book1=new ArrayList<>();
		List<Booking> book=bRepo.findAll();
		for(Booking b: book)
		{
			if(b.getUserId().getHouseNo()==Id)
			{
				book1.add(b);
			}
		}
		return book1;
	}
	
	

	
}

package com.app.dto;


import java.time.LocalDate;


import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class BookingDTO {
	
	private Long id;
	private Long userId;
	private Long facilityCodeNo;
	private LocalDate bookingDate;
	private LocalDate bookedOn;
}

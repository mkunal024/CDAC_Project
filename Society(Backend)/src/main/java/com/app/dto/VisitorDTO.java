package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class VisitorDTO {
	
	private String name;
	
	private String Purpose;
	
	private String block;

	private Long houseNo;
	
	private LocalDate dateOfVisit;
	
	private String phnNo;
	
	private String address;
}

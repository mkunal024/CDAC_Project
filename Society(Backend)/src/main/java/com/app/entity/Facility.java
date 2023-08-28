package com.app.entity;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Facility")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Facility extends BaseEntity{
	
	@Column(name="facilityCodeNo")
	private Facilities code;
	@Column(name="status")
	private Availability available;
	
	@JsonIgnore
	@OneToMany(mappedBy="facilityCodeNo", cascade=CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Booking> bList = new ArrayList<Booking>();
	
}

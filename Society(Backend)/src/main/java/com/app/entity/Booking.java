package com.app.entity;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="Booking")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Booking{
	
	@Id
	@Column(name="Id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long Id;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="userId")
	private User userId;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="facilityCodeNo")
	private Facility facilityCodeNo;
	
	@Column(name="BookingDate", unique=true)
	private LocalDate bookingDate;
	
	@Column(name="BookedOn")
	private LocalDate bookedOn;
	
}

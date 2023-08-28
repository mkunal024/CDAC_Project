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
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="Visitor")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Visitor{
	@Id
	@Column(name="Id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long Id;
	@Column(name="name", length=20)
	@NotBlank
	private String name;
	@Column(name="Purpose", length=50)
	@NotBlank
	private String Purpose;
	@Column(name="Block", length=1)
	@NotBlank
	private String block;
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="houseNo")
	private User houseNo;
	@Column(name="DateOfVisit")
	private LocalDate dateOfVisit;
	@Column(name="phnNo")
	@NotBlank
	@Pattern(regexp="^[6789]\\d{9}")
	@Size(min=10,max=10, message="Number should be min=10 digit and max=13")
	private String phnNo;
	@Column(name="address", length=50)
	@NotBlank
	private String address;
	//@Column(name="CheckInTime")

	
}

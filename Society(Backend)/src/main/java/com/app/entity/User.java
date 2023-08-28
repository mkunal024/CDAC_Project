package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="User")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude="password")
public class User {
	@Id
	@Column(name="HouseNo")
	private Long houseNo;
	@Column(name="name", length=20)
	@NotBlank
	private String name;
	@Column(name="Block", length=1)
	@Length(min=0,max=1,message="Invalid Password")
	@NotBlank
	private String Block;
	@Column(name="email", length=40,unique=true)
	@NotBlank
	@Email
	private String email;
	@Column(name="password", nullable=false)
	@NotBlank
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$")
	@Length(min=3,max=12,message="Invalid Password")
	private String password;
	@Column(name="Role", length=10)
	private Role role;
	@JsonIgnore
	@OneToMany(mappedBy="houseNo", cascade=CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Visitor> vList = new ArrayList<Visitor>();
	@JsonIgnore
	@OneToMany(mappedBy="userId", cascade=CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Booking> bList = new ArrayList<Booking>();
	
}

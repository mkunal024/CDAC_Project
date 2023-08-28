package com.app.service;

import java.util.List;

import com.app.dto.VisitorDTO;
import com.app.entity.Visitor;

public interface VisitorService {

	Visitor addVisitorDetails(VisitorDTO v);

	List<Visitor> getVisitorDetails();

	Visitor updateVisitorDetails(Visitor v);

	String deleteVisitorDetails(Long id);
}

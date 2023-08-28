package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.VisitorDTO;
import com.app.entity.User;
import com.app.entity.Visitor;
import com.app.repository.VisitorRepository;

@Service
@Transactional
public class VisitorServiceImpl implements VisitorService {

	@Autowired
	private VisitorRepository vRepo;
	
	@Autowired
	private UserService uImp;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public Visitor addVisitorDetails(VisitorDTO v) {
		Visitor vis =mapper.map(v, Visitor.class);
		User u= uImp.getUserById(v.getHouseNo());
		vis.setHouseNo(u);
		return vRepo.save(vis);
	}

	@Override
	public List<Visitor> getVisitorDetails() {
		return vRepo.findAll();
	}

	@Override
	public Visitor updateVisitorDetails(Visitor v) {
		return vRepo.save(v);
	}

	@Override
	public String deleteVisitorDetails(Long vid) {
		String msg="Invalid id, Visitor details not deleted";
		if(vRepo.existsById(vid))
		{
			vRepo.deleteById(vid);
			msg="Visitor with id "+vid+" deleted!!";
		}

		return msg;
	}

}

package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entity.News;
import com.app.repository.NewsRepository;

@Service
@Transactional
public class NewsServiceImpl implements NewsService {

	@Autowired
	private NewsRepository nRepo;
	@Override
	public News addNews(News a) {
		
		return nRepo.save(a);
	}

	@Override
	public List<News> getNews() {
		return nRepo.findAll();
	}

	@Override
	public News updateNews(News a) {
		return nRepo.save(a);
	}

	@Override
	public String deleteNews(Long id) {
		String msg="Invalid id, News details not deleted";
		if(nRepo.existsById(id))
		{
			nRepo.deleteById(id);
			msg="News with id "+id+" deleted!!";
		}

		return msg;
	}

}

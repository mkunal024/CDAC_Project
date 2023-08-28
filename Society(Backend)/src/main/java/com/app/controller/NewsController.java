package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.News;
import com.app.service.NewsService;

@RestController
@RequestMapping("/News")
@CrossOrigin(origins="http://localhost:3000")
public class NewsController {

	@Autowired
	private NewsService aService;
	
	@GetMapping("/get")
	public List<News> getNews()
	{
		return aService.getNews();
	}
	
	@PostMapping("/add")
	public News addNews(@RequestBody News a)
	{
		return aService.addNews(a);
	}
	
	@PutMapping("/update")
	public News updateNews(@RequestBody News a)
	{
		return aService.updateNews(a);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteNews(@PathVariable("id") Long id)
	{
		return aService.deleteNews(id);
	}
	
}

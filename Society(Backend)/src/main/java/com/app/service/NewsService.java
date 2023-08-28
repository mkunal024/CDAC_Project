package com.app.service;

import java.util.List;

import com.app.entity.News;

public interface NewsService {

	News addNews(News a);

	List<News> getNews();

	News updateNews(News a);

	String deleteNews(Long id);
}

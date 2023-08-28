package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.News;

public interface NewsRepository extends JpaRepository<News,Long>{

}

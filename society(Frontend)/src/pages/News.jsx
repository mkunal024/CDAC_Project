import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styles/news.css";

const News = () => {
  const [newsData, setNewsData] = useState([]); // State to hold the fetched news data

  useEffect(() => {
    // Define a function to fetch news from the backend
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:8080/News/get');
        setNewsData(response.data); // Update the state with fetched news data
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    // Call the fetchNews function to automatically fetch news on component mount
    fetchNews();
  }, []);

  return (
    <div className="news-container">
      {newsData.map((newsItem, index) => (
        <div key={index} className="news-item">
          <div><h5 className="news-date">{newsItem.date}</h5></div>
          <div><p className="news-content">{newsItem.news}</p></div>
        </div>
      ))}
    </div>
  );
}

export default News;
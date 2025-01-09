"use client";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

interface NewsItem {
  url: string;
  title: string;
  urlToImage: string;
}

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getAllNews() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_APIKEY}`
      );
      const data = await response.json();
      setNewsData(data.articles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllNews();
  }, []);

  if (loading === true) {
    return (
      <div className="grid h-screen place-items-center">
        <h1 className="text-2xl text-red-500 animate-pulse">Loading News</h1>
      </div>
    );
  }

  return (
    <section className="container mx-auto gap-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {newsData.map((item: NewsItem, index) => {
        return item.title === "[Removed]" ? null : (
          <NewsCard
            key={index}
            newsUrl={item.url}
            newsImageUrl={item.urlToImage}
            newsHeadline={item.title}
          />
        );
      })}
    </section>
  );
};

export default NewsList;

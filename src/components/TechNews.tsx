"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";


interface NewsArticle {
  title: string;
  description: string;
  link: string;
  image_url: string;
}

const TechNews: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://newsdata.io/api/1/news?apikey=pub_60272c028e393a4834346618e4e4db87599b0&country=cf,cn,in,kp,us&category=technology"
      );

      if (response.data.status === "success" && Array.isArray(response.data.results)) {
        setNewsData(response.data.results);
      } else {
        throw new Error("Unexpected API response structure.");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong while fetching news.");
      } else {
        setError("Something went wrong while fetching news.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto mt-32 p-4">
        <div className="mb-6   lg:ml-20">
          <h1 className="text-3xl font-semibold">Latest Tech News</h1>
          <p className="text-gray-300">Stay updated with the latest tech trends and headlines.</p>
        </div>

        {loading && (
          <div className="flex justify-center items-center" aria-live="polite">
            <div className="w-8 h-8 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-red-500">
            <p>Error: {error}</p>
            <button onClick={fetchNews} className="mt-2 text-blue-500 hover:underline">
              Retry
            </button>
          </div>
        )}

        {!loading && newsData.length === 0 && !error && (
          <p>No news articles available at the moment.</p>
        )}

        <div className="grid grid-cols-1  lg:ml-28 ml-5  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((article, index) => (
            <div
              key={index}
              className="max-w-xs w-full group/card border border-gray-700 rounded-md shadow-xl bg-black  opacity-100    text-white"
            >
              <div
                className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg-cover"
                style={{
                  backgroundImage: `url(${article.image_url || "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"})`,
                }}
              >
               
                <div className="text content mt-14">
                  <h1 className="font-bold text-xl md:text-2xl text-white relative z-10">
                    {article.title || "Untitled Article"}
                  </h1>
                  <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                    {article.description || "Description not available."}
                  </p>
                  <a
                    href={article.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm font-medium"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechNews;

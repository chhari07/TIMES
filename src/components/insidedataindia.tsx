"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";




interface NewsArticle {
  title?: string;
  description?: string;
  link?: string;
  image_url?: string; // Handle images from API if available
}

interface NewsApiResponse {
  status: string;
  results: NewsArticle[];
}

const InsidedataIndia: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<NewsApiResponse>(
        "https://newsdata.io/api/1/news?apikey=pub_60272c028e393a4834346618e4e4db87599b0&q=world&country=in&category=education,environment,food,politics,technology"
      );

      if (response.data.status === "success" && Array.isArray(response.data.results)) {
        // Filter duplicates by title and limit to 12 unique articles
        const uniqueNews = Array.from(
          new Map(
            response.data.results.map((article) => [article.title, article])
          ).values()
        ).slice(0, 12);

        setNewsData(uniqueNews);
      } else {
        throw new Error("Unexpected API response structure.");
      }
    } catch (err) {
      setError((err as Error).message || "Something went wrong while fetching news.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto mt-36 p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold">Latest News in India</h1>
          <p className="text-gray-300">Stay updated with the latest headlines and top stories.</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((article, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg shadow-lg bg-white text-black"
            >
              {article.image_url ? (
                <img
                  src={article.image_url}
                  alt={article.title || "News Image"}
                  className="w-full h-40 object-cover rounded-t-lg"
                  width={640} // Provide width (optional, you can set it based on your layout)
                  height={240} // Provide height (optional, you can set it based on your layout)
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 rounded-t-lg flex items-center justify-center">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
                  {article.title || "Untitled Article"}
                </h2>
                
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsidedataIndia;

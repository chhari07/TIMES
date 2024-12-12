"use client";

import React, { useState } from "react";

interface NewsArticle {
  image?: string;
  title?: string;
  url?: string;
  description?: string;
}

export function SearchSection() {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);

  const apiKey = "6a3502a2561441e5ac431aab0f3f93fe"; // Replace with your actual API key

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trim());
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query) {
      alert("Please enter a query.");
      return;
    }

    setLoading(true);
    setNews([]);

    try {
      const url = `https://api.worldnewsapi.com/search-news?text=${encodeURIComponent(
        query
      )}&language=en&api-key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.news && data.news.length > 0) {
        setNews(data.news);
      } else {
        alert("No news articles found for your query.");
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      alert("Failed to fetch news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full mt-10 flex flex-col justify-start items-center px-4 py-10 sm:py-20">
      <h2 className="mb-10 text-xl text-center sm:text-5xl text-white bg-black w-full py-4">
        SEARCH NEWS
      </h2>

      {/* Search input bar */}
      <form
        onSubmit={onSubmit}
        className="relative rounded-full overflow-hidden bg-white text-black shadow-xl w-full sm:w-80 mb-6"
      >
        <input
          className="input bg-white text-black outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
          placeholder="Search for news"
          name="text"
          type="text"
          value={query}
          onChange={handleChange}
        />
        <div className="absolute right-2 top-[0.4em]">
          <button
            type="submit"
            className="w-14 h-14 rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden"
          >
            {/* SVG and button animation code */}
          </button>
        </div>
      </form>

      {/* Loading and results message */}
      {loading && <p className="mt-8 text-lg text-white">Loading...</p>}

      {!loading && news.length === 0 && query && (
        <p className="mt-8 text-lg text-gray-500">No results found.</p>
      )}

      {/* News articles container */}
      <div className="bg-black text-white">
        <div className="container mx-auto mt-36 p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <div
                key={index}
                className="max-w-xs w-full group/card border border-gray-700 rounded-md shadow-xl bg-black opacity-100 text-white"
              >
                <div
                  className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto bg-cover"
                  style={{
                    backgroundImage: `url(${article.image || "https://via.placeholder.com/300"})`,
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
                      href={article.url || "#"}
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
    </div>
  );
}

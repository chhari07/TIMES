"use client";

import React, { useState, useEffect } from "react";

// Define types for the news articles
type NewsArticle = {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt?: string;
  category?: string;
};

export function TabsDemo() {
  const [newsData, setNewsData] = useState<NewsArticle[]>([]); // Updated to use NewsArticle type
  const [activeTab, setActiveTab] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(9); // Initial number of articles visible

  // Fetch news data from the API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
        );
        const data = await response.json();
        setNewsData(data.articles || []); // Make sure the data has the correct structure
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);

  // Filter news based on the active tab
  const filterNews = (tab: string) => {
    if (tab === "ALL") return newsData; // Show all articles if "ALL" is selected
    return newsData.filter((article) =>
      article?.title?.toLowerCase().includes(tab.toLowerCase())
    );
  };

  // Tabs configuration
  const tabs = [
    { title: "ALL", value: "ALL" },
    { title: "India", value: "india" },
    { title: "World", value: "world" },
    { title: "Tech", value: "tech" },
    { title: "Lifestyle", value: "lifestyle" },
   
  ];

  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue);
    setVisibleCount(9); // Reset the number of visible cards when tab changes
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9); // Increase the number of visible cards
  };

  return (
    <div className="container   mx-auto px-4 my-10">
      <div className="text-3xl mt-28 mb-5  ml-3   lg:mt-1 md:text-7xl font-bold dark:text-white text-center">
        Browse by Category
      </div>
      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabChange(tab.value)}
            className={`rounded-full px-4 py-2 transition duration-200 ${
              activeTab === tab.value
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="mt-8 ml-5 lg:ml-28 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filterNews(activeTab)
          .slice(0, visibleCount) // Display only the visible number of cards
          .map((article, index) => (
            <div
              key={`${article.url || index}`} // Use `url` as key, fallback to `index`
              className="max-w-xs w-full group/card"
            >
              <div
                className="cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    article.urlToImage || "https://via.placeholder.com/600x400"
                  })`,
                }}
              >
                <div className="absolute w-full h-full top-0 left-0 bg-black opacity-60 transition duration-300 group-hover/card:opacity-70"></div>
                <div className="z-10">
                  <p className="text-sm text-gray-400">
                    Published:{" "}
                    {article.publishedAt
                      ? new Date(article.publishedAt).toLocaleDateString()
                      : "Unknown"}
                  </p>
                </div>
                <div className="z-10">
                  <h1 className="font-bold text-base md:text-2xl text-gray-50">
                    {article.title || "No Title Available"}
                  </h1>
                  <p className="font-normal text-sm text-gray-50 mt-4">
                    {article.description || "No description available."}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Show message if no articles are available */}
      {filterNews(activeTab).length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No articles found for the selected category.
        </p>
      )}

      {/* Show more button */}
      {filterNews(activeTab).length > visibleCount && (
        <div className="text-center mt-6">
          <button
            onClick={handleShowMore}
            className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

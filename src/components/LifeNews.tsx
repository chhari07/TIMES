"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface NewsArticle {
  title?: string;
  description?: string;
  link?: string;
}

const LifeNews: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://newsdata.io/api/1/news?apikey=pub_60272c028e393a4834346618e4e4db87599b0&country=cf,cn,in,kp,us&category=world"
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

    fetchNews();
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto mt-32 grid grid-cols-1 lg:ml-72 lg:grid-cols-12 gap-4 p-4">
        {/* News Section */}
        <div className="flex flex-col p-4 lg:col-span-8">
          <div className="flex justify-start mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-600 text-white">
              Latest News
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">Latest News of lifestyle</h1>

          {/* Loading State */}
          {loading && <p>Loading...</p>}

          {/* Error State */}
          {error && <p className="text-red-500">Error: {error}</p>}

          {/* Empty Data State */}
          {newsData.length === 0 && !loading && !error && (
            <p>No news articles available at the moment.</p>
          )}

          {/* News Articles */}
          {newsData.length > 0 &&
            newsData.map((article, index) => (
              <div
                key={index}
                className="border-b border-gray-700 pb-4 mb-4"
              >
                <h2 className="text-lg md:text-xl font-bold">
                  {article.title || "Untitled Article"}
                </h2>
                <p className="text-sm md:text-base text-gray-300">
                  {article.description || "Description is not available for this article."}
                </p>
                <a
                  rel="noopener noreferrer"
                  href={article.link || "#"}
                  target="_blank"
                  className="inline-flex items-center text-sm text-violet-400 hover:underline"
                >
                  <span>Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LifeNews;

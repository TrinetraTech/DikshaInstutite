import React, { useEffect, useState } from "react";
import dotenv from "dotenv";


dotenv.config(".env");

const YouTubeFeed = () => {
  const [videos, setVideos] = useState([]);

  const API_KEY = process.env.API_KEY;
  const UPLOADS_PLAYLIST_ID = "UUnlN4_IfUou6nmzZkbJpAOw"; // Replace with your channel’s uploads playlist ID

  useEffect(() => {
    const fetchVideos = async (pageToken = "") => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${UPLOADS_PLAYLIST_ID}&key=${API_KEY}&pageToken=${pageToken}`
      );
      const data = await response.json();

      setVideos((prev) => [...prev, ...data.items]);

      // Fetch next page if available
      if (data.nextPageToken) {
        fetchVideos(data.nextPageToken);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {videos.map((video) => (
        <div key={video.snippet.resourceId.videoId} className="rounded-xl shadow-lg overflow-hidden">
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
            title={video.snippet.title}
            allowFullScreen
          ></iframe>
          <p className="p-2 text-sm font-semibold">{video.snippet.title}</p>
        </div>
      ))}
    </div>
  );
};

export default YouTubeFeed;

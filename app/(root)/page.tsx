"use client";
//
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
//
import PodcastCard from "@/components/PodcastCard";
import LoaderSpinner from "@/components/LoaderSpinner";
import { podcastData } from "@/constants";

//!
const Home = () => {
  const tasks = useQuery(api.tasks.get);
  // const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  // if(!trendingPodcasts) return <LoaderSpinner />

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
          {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
        </div>

        <div className="podcast_grid">
          {podcastData?.map(({ id, title, description, imageUrl }) => (
            <PodcastCard
              key={id}
              imgUrl={imageUrl}
              title={title}
              description={description}
              podcastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

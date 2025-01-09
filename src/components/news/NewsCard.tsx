import Link from "next/link";
import React from "react";

interface NewsCardProps {
  newsImageUrl: string;
  newsHeadline: string;
  newsUrl: string;
}

const NewsCard = ({ newsImageUrl, newsHeadline, newsUrl }: NewsCardProps) => {
  return (
    // Dynamic linking of page. news headline is being used as the id of the page. Which is a prop.
    <Link href={`news/${newsHeadline}`}>
      <div>
        <img
          className="w-[500] h-[200] object-cover"
          src={
            newsImageUrl ||
            "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"
          }
          alt={newsHeadline}
        />
        {/* <a href={newsUrl} target="_blank"> */}
        <h2 className="text-lg font-semibold hover:underline cursor-pointer">
          {newsHeadline === "[Removed]"
            ? "No title available"
            : newsHeadline?.slice(0, 95)}
          {newsHeadline?.length > 95 && "..."}
        </h2>
        {/* </a> */}
      </div>
    </Link>
  );
};

export default NewsCard;

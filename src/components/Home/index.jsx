import React, { useEffect, useState } from "react";
import AdvCarousel from "./AdvCarousel";
import FeaturedProducts from "./FeaturedProducts";
import LatestProducts from "./LatestProducts";
import HomeyOffer from "./HomeyOffer";
import UniqueProduct from "./UniqueProduct";
import TrendingProducts from "./TrendingProducts";
import axios from "@/axios";

export default function Home() {
  const [featuredList, setFeaturedList] = useState([]);
  const [latestList, setLatestList] = useState([]);
  const [trendingList, setTrendingList] = useState([]);
  const [sideList, setSideList] = useState([]);

  useEffect(() => {
    axios.get("/product/findAll").then((resp) => {
      const featured = [];
      const latest = [];
      const trending = [];
      const side = [];
      resp.data.forEach((item) => {
        if (item.type === 1) {
          featured.push(item);
        } else if (item.type === 2) {
          latest.push(item);
        } else if (item.type === 3) {
          trending.push(item);
        } else if (item.type === 4) {
          side.push(item);
        }
      });
      setFeaturedList(featured);
      setLatestList(latest);
      setTrendingList(trending);
      setSideList(side);
    });
  }, []);

  return (
    <div>
      <AdvCarousel />
      <FeaturedProducts featuredList={featuredList} />
      <LatestProducts
        latestList={latestList}
        featuredList={featuredList}
        trendingList={trendingList}
        sideList={sideList}
      />
      <HomeyOffer />
      <UniqueProduct />
      <TrendingProducts trendingList={trendingList} sideList={sideList} />
    </div>
  );
}

import React from 'react';
import { CiShoppingBasket } from 'react-icons/ci';
import { TbShoppingCartUp } from 'react-icons/tb';
import { TbShoppingBagX } from 'react-icons/tb';
import TotalSells from './TotalSells/TotalSells';
import AnotherCharts from './AnotherCharts/AnotherCharts';
import LatestReviews from './LatestReviews/LatestReviews';
import TopRegions from './TopRegions/TopRegions';
import RateAndEarnings from './RateAndEarnings/RateAndEarnings';
const Home = () => {
  return (
    <div className="container m-auto p-2">
      <div className="mt-5">
        <h1 className="text-3xl font-bold">Ecommerce Dashboard</h1>
        <p className="font-semibold text-sm text-gray-500">
          Here’s what’s going on at your business right now
        </p>
      </div>
      <div className="mt-8 pb-5 border-b">
        <div className="bg-white rounded-2xl shadow flex flex-col sm:flex-row max-w-3xl w-full">
          <div className="stat border-b sm:border-b-transparent sm:border-e">
            <div className="stat-figure text-primary">
              <CiShoppingBasket className="text-4xl " />
            </div>
            <div className="stat-title">New Orders</div>
            <div className="stat-value text-primary">57</div>
            <div className="stat-desc">Awaiting processing</div>
          </div>

          <div className="stat border-b sm:border-b-transparent sm:border-e ">
            <div className="stat-figure text-secondary">
              <TbShoppingCartUp className="text-4xl" />
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value text-secondary">17</div>
            <div className="stat-desc">On hold</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div className="stat-value">19</div>
            <div className="stat-title">Products</div>
            <div className="stat-desc text-[#ef4444]">Out-of-stock</div>
          </div>
        </div>
      </div>

      <section className="mt-8">
        <TotalSells></TotalSells>
      </section>
      <section className="mt-8">
        <AnotherCharts></AnotherCharts>
      </section>
      <section className="mt-8">
        <LatestReviews></LatestReviews>
      </section>
      <section className="mt-8">
        <TopRegions></TopRegions>
      </section>
      <section className="mt-8">
        <RateAndEarnings></RateAndEarnings>
      </section>
    </div>
  );
};

export default Home;

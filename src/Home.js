import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-fe.ssl-images-amazon.com/images/G/09/Digital_Video/Ever/SVOD/Xsite/GW_DT_Hero_NP-FTE_Hyb_3000x1200._CB659166727_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3289142482"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses (English Edition)"
          price={19.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={4}
        />
        <Product
          id="73867184"
          title="最新 Apple Watch SE(GPSモデル)- 40mmシルバーアルミニウムケースとホワイトスポーツバンド"
          price={299}
          rating={5}
          image="https://m.media-amazon.com/images/I/71RHKEH+xVL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          title="Oculus Quest 2—完全ワイヤレスのオールインワンVRヘッドセット—64GB"
          price={299}
          rating={4}
          image="https://m.media-amazon.com/images/I/61HhqOJILOL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="736193713"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={49.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/7137zJkDjKL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="736193713"
          title="最新 Apple MacBook Air Apple M1 Chip (13インチPro, 8GB RAM, 256GB SSD) - スペースグレイ"
          price={999}
          rating={5}
          image="https://m.media-amazon.com/images/I/7195-8O9f0L._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="904299701"
          title="サムスン Odyssey G9 C49G95T (5120 x 1440) 49インチ スーパーウルトラワイドゲームモニター, 32:9 大画面, 走査率240Hz ／ブルーライトカット／フリッカーフリー／2020新モデル"
          price={1999}
          rating={4}
          image="https://m.media-amazon.com/images/I/71-fmKZK1eL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

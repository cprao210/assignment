import React, { useEffect, useState } from "react";
import { pricingApi } from "../Services/pricingApi";
import { StyledModel } from "./Model.style";

const Model = () => {
  const [coinsObj, setCoinsObj] = useState();
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    pricingApi().then((coinsObj) => {
      setCoins(coinsObj.coins);
      setCoinsObj(coinsObj);
    });
  }, []);

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    const newCoinsArr = coinsObj.coins.filter((coin) => {
      return coin.name.toLowerCase().includes(value.toLowerCase());
    });
    setCoins(newCoinsArr);
  };

  return (
    <StyledModel>
      <div className="search_Wrapper">
        <input
          type="text"
          className="search_bar"
          placeholder="Search by name"
          name=""
          id=""
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="coin_wrapper">
        {coins.map((coin, coinId) => {
          return (
            <div className="coin_box" key={coinId}>
              <div className="icon">
                <img src={coin.icon} alt="" width={40} height={40} />
              </div>

              <div className="detail_wrapper">
                <h3>{coin.name}</h3>

                <p>{USDollar.format(coin.price)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </StyledModel>
  );
};

export default Model;

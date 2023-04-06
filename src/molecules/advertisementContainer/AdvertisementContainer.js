import React from "react";
import AdvertisementCard from "./atoms/advertisementCard";
import styles from "./advertisementContainer.module.css";
import stylesCommon from "../../App.module.css";

function AdvertisementContainer() {
  return (
    <div className={`${styles.cards} ${stylesCommon.displayFlex}`}>
      <AdvertisementCard
        title="Superfast Delivery"
        content="Get your order delivered to your doorstep at the earliest from dark stores near you"
      />
      <AdvertisementCard
        title="Best Prices & Offers"
        content="Best price destination with offers directly from the manufacturers"
      />
      <AdvertisementCard
        title="Wide Assortment"
        content="Choose from 5000+ products across food, personal care, household & other categories"
      />
    </div>
  );
}

export default AdvertisementContainer;

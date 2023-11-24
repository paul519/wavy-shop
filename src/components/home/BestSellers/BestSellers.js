import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Flower Base"
          price="250.00"
          color="Blank and White"
          badge={true}
          des="Order a Flower Vase arrangement of red roses and berries and share a light moment with those whom you care about. Send flowers to Kenya today."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="New Backpack"
          price="1800.00"
          color="Gray"
          badge={false}
          des="Quality durable material
          Well padded for comfort
          USB port and cable
          Hidden zippers for safety."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Household materials"
          price="2500.00"
          color="Mixed"
          badge={true}
          des=" The grinds simply grind hard, solid nuts such as hazelnuts, peanuts, almonds or walnuts and then crush them to the desired puree consistency."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Travel Bag"
          price="2200.00"
          color="Black"
          badge={false}
          des="The backpack is designed to protect up to 15.6 widescreen laptops. It is a compact, lightweight yet very robust backpack providing protection, functionality and comfort. The backpack features a built-in hidden rain cover and a water-resistant bottom to cater various weather conditions  including extreme humidity and rain. Offers a sturdy, all-purpose backpack for mobile professionals and students a like."
        />
      </div>
    </div>
  );
};

export default BestSellers;

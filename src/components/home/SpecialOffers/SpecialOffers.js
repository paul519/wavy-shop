import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Cap for Boys"
          price="350.00"
          color="Blank and White"
          badge={true}
          des="Smartly designed for men who want to flaunt a perfect look, this blue baseball cap from Reebok is sure to make a style statement. It is a trendy accessory to own. Designed using cotton, this baseball cap will help keep your head stay cool and sweat-free all day long."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Tea Table"
          price="18000.00"
          color="Gray"
          badge={true}
          des="Entertainment unit made in 100% Seasoned Sheesham Wood (Rosewood), The storage spaces below can accommodate books."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Headphones"
          price="2500.00"
          color="Mixed"
          badge={true}
          des="Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, Upto 50 Hours Playtime, DSEE Upscale, Multipoint Connectivity/Dual Pairing,Voice Assistant App Support for Mobile Phones."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Sun glasses"
          price="2200.00"
          color="Black"
          badge={true}
          des="Exhibiting a refined finish, this pair of round polarized sunglasses from Vincent Chase will lend you an impeccable look. Designed from metal, the gold-hued frame assures utmost comfort with its lightweight make. The grey lenses are made with care from polycarbonate that keeps your eyes protected without compromising on the style. The full-rim design adds to its overall appeal."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;

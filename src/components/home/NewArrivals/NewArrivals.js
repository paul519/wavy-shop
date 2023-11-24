import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Round Table Clock"
            price="4400.00"
            color="Black"
            badge={true}
            des="Make every second count with this table clock from Westside Home which is designed with classical-inspired detailing. The minimalist face is crafted for a dash of sophisticated charm and this gold-toned table accent will lend a simple yet modish look to your bedside table."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Smart Watch"
            price="2500.00"
            color="Black"
            badge={true}
            des="Amaze everyone around you by wearing this unisex's digital watch from Timex. The black rectangular dial is protected by a mineral glass. It features smart watch and a crown for time adjustment. The silicon strap comes in a grey hue that further elevates the look of the timekeeper. Besides, it is completed with a buckle clasp to ensure a secure fit on the wrist."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="cloth Basket"
            price="800.00"
            color="Mixed"
            badge={true}
            des="Keep your dirty laundry organized in a single place with laundry bags. Constructed out of high-quality material, these bags can carry a significant amount of laundry in a single go. The bags come with handles that make them easy to lift and carry around. It holds all the clutter and takes up a little space in your room, bathroom, or laundry room. These multi-purpose bags can also be used to store toys, books, stationery, bags, etc."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Funny toys for babies"
            price="600.00"
            color="Mixed"
            badge={false}
            des="This attractive hanging musical pulling toy will amaze your baby and become its best companion. Extremely soft in texture and can be hung onto your child stroller or cradle."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Funny toys for babies"
            price="600.00"
            color="Mixed"
            badge={false}
            des="This attractive hanging musical pulling toy will amaze your baby and become its best companion. Extremely soft in texture and can be hung onto your child stroller or cradle."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;

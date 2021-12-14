import React, { useCallback, useState } from "react";
import "../../common/styles/common.css";
import cake_pops from "../../assets/cake_pops.webp";
import cakepop2 from "../../assets/cakepop2.webp";
import baby from "../../assets//baby.jpeg";
import BarnyardFriends from "../../assets/BarnyardFriends.jpeg";
import third from "../../assets/third.webp";
import { Paper, Button } from "@material-ui/core";
import "./Gallery.css";
import { useHistory } from "react-router-dom";
import Gallery from "react-photo-gallery";
import { grey } from "@material-ui/core/colors";
import cake1 from "../../assets/cake1.jpeg";
import cake2 from "../../assets/cake2.jpeg";
import cake3 from "../../assets/cake3.jpeg";
import cake4 from "../../assets/cake4.jpeg";
import cake5 from "../../assets/cake5.jpeg";
import cake6 from "../../assets/cake6.jpeg";
import cake7 from "../../assets/cake7.jpeg";
import cake8 from "../../assets/cake8.jpeg";
import cake9 from "../../assets/cake9.jpeg";
import cake10 from "../../assets/cake10.jpeg";
import cake11 from "../../assets/cake11.jpeg";
import cake12 from "../../assets/cake12.jpeg";
import cake13 from "../../assets/cake13.jpeg";
import cake14 from "../../assets/cake14.jpeg";
import cake15 from "../../assets/cake15.jpeg";
import cake16 from "../../assets/cake16.jpeg";
import cake17 from "../../assets/cake17.jpeg";
import cake18 from "../../assets/cake18.jpeg";
import cake19 from "../../assets/cake19.jpeg";

interface CakePopOrder {
  image: string;
  price: string;
}

const Item = (props: any) => {
  const item = props.item;

  const nav = useHistory();
  const handleClick = () => {
    nav.push("/order", { image: item?.src, price: "$276" });
  };

  return (
    <Paper>
      <div className="cWrapper">
        {/* <div className="imageWrapper"> */}
        <img src={item.src} height="260" width="500" />
        {/* </div> */}
        <div className="description">
          Lorum Ipsum motherfucker Lorum Ipsum motherfucker Lorum Ipsum
          motherfucker Lorum Ipsum motherfucker Lorum Ipsum motherfucker Lorum
          Ipsum motherfucker Lorum Ipsum motherfucker Lorum Ipsum motherfucker
          Lorum Ipsum motherfucker Lorum Ipsum motherfucker Lorum Ipsum
          motherfucker Lorum Ipsum motherfucker
        </div>

        <Button onClick={handleClick} className="CheckButton">
          Order This
        </Button>
      </div>
    </Paper>
  );
};

export const PHOTO_SET = [
  {
    src: cake1,
    width: 4,
    height: 3,
  },
  {
    src: cake2,
    width: 6,
    height: 4,
  },
  {
    src: cake3,
    width: 5,
    height: 4,
  },
  {
    src: cake4,
    width: 4,
    height: 3,
  },
  {
    src: cake18,
    width: 5,
    height: 3,
  },
  {
    src: cake6,
    width: 5,
    height: 4,
  },
  {
    src: cake7,
    width: 4,
    height: 3,
  },
  {
    src: cake8,
    width: 4,
    height: 3,
  },
  {
    src: cake9,
    width: 3,
    height: 4,
  },
  {
    src: cake10,
    width: 7,
    height: 4,
  },
  {
    src: cake11,
    width: 4,
    height: 3,
  },
  {
    src: cake12,
    width: 5,
    height: 3,
  },
  {
    src: cake13,
    width: 4,
    height: 3,
  },
  {
    src: cake14,
    width: 4,
    height: 3,
  },
  {
    src: cake15,
    width: 4,
    height: 3,
  },
  {
    src: cake16,
    width: 4,
    height: 3,
  },
  {
    src: cake17,
    width: 4,
    height: 3,
  },
];

export const CakePopGallery = () => {
  const [index, setIndex] = useState(0);
  const nav  = useHistory();

  const handleImageClick = (photo) => () => {
    nav.push("/order", { image: photo?.src, price: "$276" });
  };
  const imageRenderer = useCallback(({ index, left, top, key, photo }) => {
    return (
      <div className="img__wrap">
        <img {...photo} onClick={handleImageClick(photo)}></img>
        <p onClick={handleImageClick(photo)} className="img__description">
          This cakepop is made of this stuff
        </p>
      </div>
    );
  }, []);

  return (
    <div className="wrapper">
      <div className="innerWrapper">
        <div style={{ backgroundColor: "grey" }}>
          <Gallery photos={PHOTO_SET} renderImage={imageRenderer}></Gallery>
        </div>
      </div>
    </div>
  );
};

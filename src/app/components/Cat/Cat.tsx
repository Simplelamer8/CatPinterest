import { addToFavourite, CatInterface } from "@/redux/slices/catsSlice";
import React, { forwardRef, useState } from "react";
import Heart from "../../images/Heart.svg";
import HoverHeart from "../../images/HoverHeart.svg";
import { useDispatch } from "react-redux";
import styles from "./Cat.module.css";

export const Cat = forwardRef<HTMLDivElement, CatInterface>((props, ref) => {
  const dispatch = useDispatch();
  const { id, url, favourite } = props;
  const [isHovered, setIsHovered] = useState(false);

  const toggleFavourite = () => {
    return dispatch(addToFavourite(id));
  }

  return (
    <div
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      className={styles.CatCard}
      // className="w-[225px] h-[225px] justify-self-center relative transition-all hover:scale-110"
    >
      <img src={url} alt="" className="w-full h-full" />
      {isHovered ? (
        favourite ? (
          <HoverHeart onClick={toggleFavourite} className="absolute bottom-5 right-5" />
        ) : (
          <Heart onClick={toggleFavourite} className="absolute bottom-5 right-5" />
        )
      ) : null}
      <div ref={ref}></div>
    </div>
  );
})

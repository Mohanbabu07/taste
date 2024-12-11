import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import RoyalImage from "../../../images/banner1.png"; 
import RoyalImage1 from "../../../images/banner.png"; 

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageUrls = [
    `url(${RoyalImage})`,
    `url(${RoyalImage1})`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: imageUrls[currentImageIndex],
        backgroundSize: "cover", 
      }}
    >
      {currentImageIndex === 1 && (
        <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
          <h1
            className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#ffffff] font-[600] capitalize`}
          >
            Order in <br />  taste the difference 
          </h1>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-[Poppins] text-[18px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Hero;

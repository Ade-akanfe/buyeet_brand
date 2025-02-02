"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";





const RollingCircle = ({ iconComponents }) => {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <div className="circle-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="circle-svg"
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="gray"
          strokeWidth="10"
          fill="none"
          strokeDasharray="15, 15" /* Optional dashed border */
        />
      </svg>
      <div className="images-container">
        {iconComponents.map((item, index) => (
          <div
            key={index}
            className="image-wrapper"
            style={{
              transform: `rotate(${item.angle}deg) translate(150px) rotate(-${item.angle}deg)`,
            }}
          >
            <Image
              src={item.src}
              alt={`Image ${index}`}
              className="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RollingCircle;

import React from "react";
import "./brand.css";
import Atlassian from "../../assets/atlassian.png";
import Shopify from "../../assets/shopify.png";
import Slack from "../../assets/slack.png";
import Dropbox from "../../assets/dropbox.png";
import Google from "../../assets/google.png";

const Brand = () => {
  const imageArray = [Atlassian, Shopify, Slack, Dropbox, Google];
  console.log(imageArray);
  return (
    <div className="companies-logo">
      {imageArray.map((sourceImage) => {
        return <img src={sourceImage} alt={sourceImage.toString()} srcset="" />;
      })}
    </div>
  );
};

export default Brand;

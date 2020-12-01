import React from "react";
import ReactDOM from "react-dom";

import GlassExample from "./GlassExample";
import MagnifierExample from "./MagnifierExample";
import SrcSetExample from "./SrcSetExample";
import PictureExample from "./PictureExample";
import SideExample from "./SideExample";
import Header from "./Header";

import "./style.css";

const image = require("./sample-image.jpg");
const sample_image_mfaaca_c_scale_w_200 = require("./srcset-images/sample-image_mfaaca_c_scale,w_200.jpg");
const sample_image_mfaaca_c_scale_w_437 = require("./srcset-images/sample-image_mfaaca_c_scale,w_437.jpg");
const sample_image_mfaaca_c_scale_w_598 = require("./srcset-images/sample-image_mfaaca_c_scale,w_598.jpg");
const sample_image_mfaaca_c_scale_w_728 = require("./srcset-images/sample-image_mfaaca_c_scale,w_728.jpg");
const sample_image_mfaaca_c_scale_w_846 = require("./srcset-images/sample-image_mfaaca_c_scale,w_846.jpg");
const sample_image_mfaaca_c_scale_w_937 = require("./srcset-images/sample-image_mfaaca_c_scale,w_937.jpg");
const sample_image_mfaaca_c_scale_w_1023 = require("./srcset-images/sample-image_mfaaca_c_scale,w_1023.jpg");
const sample_image_mfaaca_c_scale_w_1100 = require("./srcset-images/sample-image_mfaaca_c_scale,w_1100.jpg");
const sample_image_mfaaca_c_scale_w_1179 = require("./srcset-images/sample-image_mfaaca_c_scale,w_1179.jpg");
const sample_image_mfaaca_c_scale_w_1244 = require("./srcset-images/sample-image_mfaaca_c_scale,w_1244.jpg");
const sample_image_mfaaca_c_scale_w_1318 = require("./srcset-images/sample-image_mfaaca_c_scale,w_1318.jpg");
const sample_image_mfaaca_c_scale_w_1388 = require("./srcset-images/sample-image_mfaaca_c_scale,w_1388.jpg");
const sample_image_mfaaca_c_scale_w_1400 = require("./srcset-images/sample-image_mfaaca_c_scale,w_1400.jpg");

const imageSrcSet = `
${sample_image_mfaaca_c_scale_w_200} 200w,
${sample_image_mfaaca_c_scale_w_437} 437w,
${sample_image_mfaaca_c_scale_w_598} 598w,
${sample_image_mfaaca_c_scale_w_728} 728w,
${sample_image_mfaaca_c_scale_w_846} 846w,
${sample_image_mfaaca_c_scale_w_937} 937w,
${sample_image_mfaaca_c_scale_w_1023} 1023w,
${sample_image_mfaaca_c_scale_w_1100} 1100w,
${sample_image_mfaaca_c_scale_w_1179} 1179w,
${sample_image_mfaaca_c_scale_w_1244} 1244w,
${sample_image_mfaaca_c_scale_w_1318} 1318w,
${sample_image_mfaaca_c_scale_w_1388} 1388w,
${sample_image_mfaaca_c_scale_w_1400} 1400w
`


const imageSizes = '(max-width: 1400px) 100vw, 1400px';

const DemoApp = () => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ paddingBottom: "100px" }} className="app">
        <MagnifierExample image={image} />
        <GlassExample image={image} />
        <PictureExample image={image} />
        <SideExample image={image} />
        <SrcSetExample imageSrcSet={imageSrcSet} imageSizes={imageSizes} />
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<DemoApp />, document.getElementById("root"));

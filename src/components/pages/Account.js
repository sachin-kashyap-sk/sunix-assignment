import React, { useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { Box, Container } from "@mui/material";
import classes from "../styleContainer/Account.module.css";
const Account = () => {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileType = useRef(null);
  const imageRef = useRef(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.includes("image")) {
        const imageElement = imageRef.current;
        imageElement.src = URL.createObjectURL(file);

        setLoading(true);
        const model = await cocoSsd.load();
        const predictions = await model.detect(imageElement);
        setPredictions(predictions);
        setLoading(false);
      }
      if (file.type.includes("video")) {
        const imageElement = fileType.current;
        imageElement.src = URL.createObjectURL(file);

        setLoading(true);
        const model = await cocoSsd.load();
        const predictions = await model.detect(imageElement);
        setPredictions(predictions);
        setLoading(false);
      }
    }
  };

  return (
    <Container maxWidth="false">
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleImageUpload}
      />
      <Box className={classes.firstContainer}>
        <img width="100%" height="100%" ref={imageRef} alt="" />
        <video
          width="100%"
          height="100%"
          ref={fileType}
          src={fileType}
          controls
        />
      </Box>
      <Box>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Box>
            {predictions.map((prediction, index) => (
              <Box
                key={index}
                className={classes.predictContainer}
                style={{
                  left: prediction.bbox[0],
                  top: prediction.bbox[1],
                  width: prediction.bbox[2],
                  height: prediction.bbox[3],
                }}
              >
                <p className={classes.text}>
                  {prediction.class} - : {(prediction.score * 100).toFixed(2)}%
                </p>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Account;

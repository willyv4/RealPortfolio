import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import "./cardSlides.css";

const images = [
  {
    label: "Budget Tracker",
    imgPath: "316F84AF-49C6-4E81-BA82-D35ADDADC8EF_1_105_c.jpeg",
    link: "https://budget-tracker4.netlify.app/",
    code: "https://github.com/willyv4/Budget-Tracker",
    codeLabel: "CODE",
  },
  {
    label: "Weather App",
    imgPath: "C0C3C7E1-E4BC-4706-99A7-60E709E698B3_1_105_c.jpeg",
    link: "https://stunning-donut-5370df.netlify.app/",
    code: "https://github.com/willyv4/weatherApi",
    codeLabel: "CODE",
  },
  {
    label: "Sound Sculpt",
    imgPath: "C0083082-482C-423F-9278-12AAB95EB8AC_1_105_c.jpeg",
    link: "https://ss-market.netlify.app/",
    codeLabel: "PRIVATE",
  },
  {
    label: "Roc Wheels ecommerce",
    imgPath: "6A816318-5576-4C4F-B3C7-8C450B5B6F0B_1_105_c.jpeg",
    link: "https://jbm.582.myftpupload.com/",
    codeLabel: "WORDPRESS",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        minWidth: 400,
        maxWidth: 400,
        flexGrow: 1,
        boxShadow: 5,
        borderRadius: 2,
        mt: 11,
        mr: -40,
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#1a2639",
          height: 70,
          justifyContent: "center",
          bgcolor: "#d9dad7",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <a href={images[activeStep].link} target="blank">
          <button className="picButtons">{images[activeStep].label}</button>
        </a>
        <a href={images[activeStep].code} target="blank">
          <button className="picButtons">{images[activeStep].codeLabel}</button>
        </a>
      </Paper>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 3 ? (
              <Box
                component="img"
                sx={{
                  height: 280,
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        sx={{
          bgcolor: "#d9dad7",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          height: 60,
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="large"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <svg
                stroke="black"
                fill="black"
                stroke-width="2"
                viewBox="0 0 1024 1024"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="11 17 6 12 11 7"></polyline>
                <polyline points="18 17 13 12 18 7"></polyline>
              </svg>
            ) : (
              <svg
                stroke="#1a2639"
                fill="#1a2639"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.536,21.886C5.682,21.962,5.841,22,6,22c0.2,0,0.398-0.06,0.569-0.178l13-9C19.839,12.635,20,12.328,20,12 s-0.161-0.635-0.431-0.822l-13-9C6.264,1.966,5.864,1.941,5.536,2.114C5.206,2.287,5,2.628,5,3v18 C5,21.372,5.206,21.713,5.536,21.886z M7,4.909L17.243,12L7,19.091V4.909z"></path>
              </svg>
            )}
          </Button>
        }
        backButton={
          <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <svg
                stroke="black"
                fill="black"
                stroke-width="2"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="11 17 6 12 11 7"></polyline>
                <polyline points="18 17 13 12 18 7"></polyline>
              </svg>
            ) : (
              <svg
                stroke="#1a2639"
                fill="#1a2639"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.464,2.114c-0.329-0.174-0.728-0.148-1.033,0.063l-13,9C4.161,11.365,4,11.672,4,12s0.161,0.635,0.431,0.822l13,9 C17.602,21.94,17.8,22,18,22c0.159,0,0.318-0.038,0.464-0.114C18.794,21.713,19,21.372,19,21V3 C19,2.628,18.794,2.287,18.464,2.114z M17,19.091L6.757,12L17,4.909V19.091z"></path>
              </svg>
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;

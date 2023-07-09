import styled from "@emotion/styled";

const AboutStyles = {
  Container: styled("div")({
    minHeight: "100vh",
  }),
  SubContainer: styled("div")({
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  Desc: styled("p")({
    margin: "0 5em",
    textAlign: "center",
  }),
};

export default AboutStyles;

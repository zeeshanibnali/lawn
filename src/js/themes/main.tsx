import { useEffect, useState } from "react";
import styled from '@emotion/styled'

import {
  subscribeBackgroundColor,
} from "../lib/utils/bolt";

const Container = styled.div`
  color: hotpink;
`
import "./main.scss";
import NavBar from "../components/navBar";

const Main = () => {
  const [bgColor, setBgColor] = useState("#282c34");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.cep) {
      subscribeBackgroundColor(setBgColor);
    }
  }, []);

  return (
    <div>
      <NavBar />
      <Container></Container>
      Main as
    </div>
  );
};

export default Main;

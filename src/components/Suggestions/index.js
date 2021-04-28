import React from "react";

import img1 from "../../images/01.png";
import img2 from "../../images/02.png";
import img3 from "../../images/03.png";
import img4 from "../../images/04.png";
import img5 from "../../images/05.png";
import img6 from "../../images/06.png";
import img7 from "../../images/07.png";

import { Container, Option, Img, Label } from "./styles";

export default function Suggestions() {
  return (
    <Container>
      <Option>
        <Img source={img1} />
        <Label>Recarga</Label>
      </Option>
      <Option>
        <Img source={img2} />
        <Label>Uber</Label>
      </Option>
      <Option>
        <Img source={img3} />
        <Label>Ônibus</Label>
      </Option>
      <Option>
        <Img source={img4} />
        <Label>TV</Label>
      </Option>
      <Option>
        <Img source={img5} />
        <Label>Doações</Label>
      </Option>
      <Option>
        <Img source={img6} />
        <Label>Barras</Label>
      </Option>
      <Option>
        <Img source={img7} />
        <Label>FAQ</Label>
      </Option>
    </Container>
  );
}

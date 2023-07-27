import React from "react";
import { Carousel } from "@mantine/carousel";
import Barang from "./barang";
import { Box, Group } from "@mantine/core";

function BarangCarousel() {
  return (
    <>
      <Box pt={25}>
        <Carousel
          withIndicators
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={1}
        >
          <Carousel.Slide>
            <Barang />
          </Carousel.Slide>
          <Carousel.Slide>
            <Barang />
          </Carousel.Slide>
          <Carousel.Slide>
            <Barang />
          </Carousel.Slide>
          <Carousel.Slide>
            <Barang />
          </Carousel.Slide>
        </Carousel>
      </Box>
    </>
  );
}

export default BarangCarousel;

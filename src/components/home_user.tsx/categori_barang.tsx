import {
  ActionIcon,
  Box,
  Button,
  Card,
  Group,
  Image,
  Paper,
  Rating,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Barang from "./barang";

function CategoriBarang() {
  return (
    <>
      <Box pt={30}>
        <Text fw={700} fz={20}>
          Headphones For You!
        </Text>
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: "62rem", cols: 3, spacing: "md" },
            { maxWidth: "48rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
          pt={15}
        >
          <Box>
            <Barang />
          </Box>
          <Box>
            <Barang />
          </Box>
          <Box>
            <Barang />
          </Box>
          <Box>
            <Barang />
          </Box>
          <Box>
            <Barang />
          </Box>
          <Box>
            <Barang />
          </Box>
          <Box>
            <Barang />
          </Box>
          <Box>
            <Barang />
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default CategoriBarang;

import {
  ActionIcon,
  Box,
  Button,
  Group,
  Image,
  Rating,
  Text,
} from "@mantine/core";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

function Barang() {
  return (
    <>
      <Box pb={10}>
        <Box
          sx={{
            backgroundColor: "#F5F6F6",
            padding: 10,
            borderRadius: 10,
          }}
          pl={20}
          pr={20}
        >
          <Group position="right">
            <ActionIcon color="dark">
              <AiOutlineHeart size={30} color />
            </ActionIcon>
          </Group>
          <Image maw={200} mx="auto" src="/kategori1.png" alt="kategori" />
        </Box>
        <Group position="apart" pt={10}>
          <Text fw={700} fz={14}>
            Bose BT Earphones
          </Text>
          <Text fw={700} fz={14}>
            Rp. 500,000
          </Text>
        </Group>
        <Text mt={5} fz={10}>
          Wired Stereo Headsets With Mic
        </Text>
        <Rating mt={5} defaultValue={2} color="teal" size="xs" />
        <Button mt={20} variant="outline" color="cyan.9" w={130} radius={20}>
          Add to cart
        </Button>
      </Box>
    </>
  );
}

export default Barang;

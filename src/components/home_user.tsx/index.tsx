import { UserButton } from "@clerk/nextjs";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  Image,
  Text,
} from "@mantine/core";
import React from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import HeadersAtas from "./headers_atas";
import ColorFun from "@/fun/COLOR";
import CategoriBarang from "./categori_barang";
import BarangCarousel from "./barang_carousel";

function HomeUserTsx() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          height: "100vh",
        }}
      >
        <Box pl={30} pr={30}>
          <Group position="apart">
            <Image maw={80} radius="md" src="/logo.png" alt="logo" />
            <Box>
              <Group>
                <ActionIcon color="dark" component="a" href="/sign-in">
                  <AiOutlineUser size={20} color />
                  <UserButton afterSignOutUrl="/" />
                </ActionIcon>
                <ActionIcon color="dark" component="a" href="/keranjang">
                  <BsCartPlus size={20} color />
                </ActionIcon>
              </Group>
            </Box>
          </Group>
          <HeadersAtas />
          <BarangCarousel />
          <CategoriBarang />
        </Box>
      </Box>
    </>
  );
}

export default HomeUserTsx;

import { UserButton } from "@clerk/nextjs";
import { ActionIcon, Box, Group, Image } from "@mantine/core";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

function Layout({ children }: { children: React.ReactNode }) {
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
            <Box component="a" href="/">
              <Image maw={80} radius="md" src="/logo.png" alt="logo" />
            </Box>
            <Box>
              <Group>
                <ActionIcon color="dark" component="a" href="/sign-in">
                  <AiOutlineUser size={20} color />
                  <UserButton afterSignOutUrl="/" />
                </ActionIcon>
              </Group>
            </Box>
          </Group>
          {children}
        </Box>
      </Box>
    </>
  );
}

export default Layout;

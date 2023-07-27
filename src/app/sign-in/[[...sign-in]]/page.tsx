"use client";
import ColorFun from "@/fun/COLOR";
import { SignIn } from "@clerk/nextjs";
import { Box, Flex, Group, Image } from "@mantine/core";

export default function Page() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
        }}
      >
        <Flex
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
          h={"100%"}
        >
            <Box component="a" href="/">
              <Image maw={200} radius="md" src="/logo.png" alt="logo" />
            </Box>
          <SignIn />
        </Flex>
      </Box>
    </>
  );
}

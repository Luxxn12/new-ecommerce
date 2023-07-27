"use client";
import { SignUp } from "@clerk/nextjs";
import { Box, Flex, Image, Text } from "@mantine/core";

export default function Page() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
        }}
      >
        <Flex
          gap={"lg"}
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
          h={"100%"}
        >
          <Box component="a" href="/">
            <Image maw={400} radius="md" src="/logo.png" alt="logo" />
          </Box>
          <Box>
            <Text>Lukman ganteng</Text>
            <SignUp />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

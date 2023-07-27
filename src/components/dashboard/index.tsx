"use client";
import { UserButton } from "@clerk/nextjs";
import { Box, Group, Text } from "@mantine/core";
import React from "react";

function Dashboard() {
  return (
    <Box
      sx={{
        backgroundColor: "#461959",
        height: "100vh",
      }}
    >
      <Box p={20}>
        <Group position="apart">
          <Text color="white" fw={700}>Dashboard</Text>
          <UserButton afterSignOutUrl="/" />
        </Group>
      </Box>
    </Box>
  );
}

export default Dashboard;

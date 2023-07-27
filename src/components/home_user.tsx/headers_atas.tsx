import ColorFun from "@/fun/COLOR";
import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";

function HeadersAtas() {
  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundColor: "#FBEFE3",
          }}
        >
          <SimpleGrid
            cols={2}
            spacing="lg"
            breakpoints={[
              { maxWidth: "md", cols: 3, spacing: "md" },
              { maxWidth: "sm", cols: 2, spacing: "sm" },
              { maxWidth: "xs", cols: 1, spacing: "sm" },
            ]}
          >
            <Box>
              <Center pt={40}>
                <Container>
                  <Text color={ColorFun.hijauTua} fw={700} fz={30}>
                    Grab Upto 50% Off on
                  </Text>
                  <Text color={ColorFun.hijauTua} fw={700} fz={30}>
                    Seleted Headhone
                  </Text>
                  <Button
                    w={110}
                    color="cyan.9"
                    bg={ColorFun.hijauTua}
                    mt={20}
                    radius={20}
                  >
                    Buy Now
                  </Button>
                </Container>
              </Center>
            </Box>
            <Box>
              <Image
                src="/gambar1.png"
                alt="foto"
                maw={350}
                mx="auto"
                radius="md"
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default HeadersAtas;

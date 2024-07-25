import "../src/App.css";
import { Box, Center, VStack } from "@chakra-ui/react";

export default function Info() {
  return (
    <Center className="w-screen h-screen absolute">
      <VStack spacing={1} className="absolute z-10 p-3.5 text-black font-saira">
        <Box className="text-6xl font-black">Contract Address:</Box>
        <Box className="text-3xl font-black"></Box>
      </VStack>
    </Center>
  );
}

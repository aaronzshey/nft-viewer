import "../src/App.css";
import { Box, Center, VStack } from "@chakra-ui/react";
import {ReactNode} from "react";
interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function Info({ children }: Props) {
  return (
    <Center className="w-screen h-screen absolute">
      <VStack spacing={1} className="absolute z-10 p-3.5 text-black font-saira">
        <Box className="text-6xl font-black">Contract Address:</Box>
        <Box className="text-3xl font-black">{children}</Box>
      </VStack>
    </Center>
  );
}

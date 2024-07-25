import "../src/App.css";
import { Box, Center, VStack, Text } from "@chakra-ui/react";

export default function OwnersList({ owners }: { owners: string[] }) {
  return (
    <Center className="w-screen h-screen absolute ">
      <Box className="z-10 w-3/4 h-3/4 outline-2 outline-white outline rounded-xl p-4 bg-gray-100 border-opacity-70 bg-opacity-50">
        <VStack className="w-max text-left">
          {owners.map((x: string) => {
            return <Text>{x}</Text>;
          })}
        </VStack>
      </Box>
    </Center>
  );
}

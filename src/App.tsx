import React from "react";
import clsx from "clsx/lite";
import "./App.css";
import { SimpleGrid, Box, Center, VStack, Text } from "@chakra-ui/react";

function returnRandomColor(): string {
  const colors = [
    "bg-orange-400",
    "bg-amber-400",
    "bg-yellow-400",
    "bg-lime-400",
    "bg-green-400",
    "bg-emerald-400",
    "bg-teal-400",
    "bg-cyan-400",
    "bg-sky-400",
    "bg-blue-400",
    "bg-indigo-400",
    "bg-violet-400",
    "bg-purple-400",
    "bg-fuchsia-400",
    "bg-pink-400",
    "bg-rose-400",
    "bg-orange-200",
    "bg-amber-200",
    "bg-yellow-200",
    "bg-lime-200",
    "bg-green-200",
    "bg-emerald-200",
    "bg-teal-200",
    "bg-cyan-200",
    "bg-sky-200",
    "bg-blue-200",
    "bg-indigo-200",
    "bg-violet-200",
    "bg-purple-200",
    "bg-fuchsia-200",
    "bg-pink-200",
    "bg-rose-200",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function App() {
  return (
    <>
      <Center className="w-screen h-screen absolute ">
        <Box className="z-10 w-3/4 h-3/4 outline-2 outline-white outline rounded-xl p-4 bg-gray-100 border-opacity-70 bg-opacity-50">
          <VStack className="w-max text-left">
            <Text>A</Text>
            <Text>B</Text>
            <Text>C</Text>
          </VStack>
        </Box>
      </Center>
      {/*
      <Center className="w-screen h-screen absolute">
        <VStack
          spacing={1}
          className="absolute z-10 p-3.5 text-black font-saira"
        >
          <Box className="text-6xl font-black">Contract Address:</Box>
          <Box className="text-3xl font-black">
            0x06b0ED5338e36623b859081B0692F7dE33aF67E5
          </Box>
        </VStack>
      </Center>
      */}
      <SimpleGrid columns={4} className="h-screen w-screen bg-black blur-md">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((x) => {
          return (
            <Box
              key={x}
              className={clsx(
                returnRandomColor(),
                "duration-1000 grayscale hover:grayscale-0",
              )}
            ></Box>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default App;

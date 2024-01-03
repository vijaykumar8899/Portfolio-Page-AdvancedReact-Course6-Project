import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Hema Raja Vijay Kumar Vellanki.";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* The UI for the landing section */}
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar
          src="https://firebasestorage.googleapis.com/v0/b/birthday-4d579.appspot.com/o/profileImage.jpeg?alt=media&token=9775bc66-881a-48d8-8cd4-0483a72b61f1"
          size="2xl"
          name="Profile Logo"
        />
        <Heading as="h4" size="md" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="4xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="4xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
    {/* The UI for the landing section */}
  </FullScreenSection>
);

export default LandingSection;

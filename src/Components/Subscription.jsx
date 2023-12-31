import { Box, Heading, Text, Button, Input } from "@chakra-ui/react";
import { IoMdArrowDropright } from "react-icons/io";

function Subscription() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      marginBottom={0}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={{ base: "1rem", md: "1.5rem" }}
        alignItems="left"
        justifyContent="center"
        padding={{ base: "3rem", md: "6rem" }}
        width={{ base: "100%", md: "68%" }}
      >
        <Heading
          fontSize={{ base: "1.5rem", md: "2.5rem" }}
          color="#12406F"
        >
          Subscribe
        </Heading>
        <Text
          color="black"
          fontSize={{ base: "1rem", md: "1.5rem" }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </Text>
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} gap="1rem" className="subscribe-section-input-container">
          <Input
            w={{ base: "100%", md: "60%" }}
            placeholder="Enter your Email Address"
            type="email"
          />
          <Button background="#12406F" color="white">
            Subscribe Now
            <IoMdArrowDropright />
          </Button>
        </Box>
      </Box>
      <Box>
        <img
          src="https://www.theirmindia.org/assets/images/irm_home/section7_container2_img.svg"
          alt="subscribe"
        />
      </Box>
    </Box>
  );
}

export default Subscription;

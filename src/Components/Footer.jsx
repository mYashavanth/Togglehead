import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import { FaQuora } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";
import { FaTrainSubway } from "react-icons/fa6";
import img from "../Images/Footer.png";

export default function Footer() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
        gap={"3rem"}
        p={"4rem"}
        backgroundImage={{
          base: "none",
          md: `none`,
          lg: `none`,
          xl: `url(${img})`,
        }}
        backgroundRepeat={"no-repeat"}
        backgroundColor={{
          base: "#092751",
          md: "#092751",
          lg: "#092751",
          xl: "white",
        }}
        backgroundSize={"contain"}
        color={"white"}
        justifyContent={"space-around"}
        mt={"-3rem"}
        mb={"-3.2rem"}
      >
        <Box
          textAlign={"left"}
          w={{ base: "100%", md: "100%", lg: "30%", xl: "30%" }}
        >
          <Heading>Contact Us</Heading>
          <Text>Address: amet, consetetur sadipscing elitr, sed diam</Text>
          <Text>Email id: eirmod tempor invidunt ut labore et dolore</Text>
          <Text>Phone no: 123456789</Text>
        </Box>
        <Box  w={{ base: "100%", md: "100%", lg: "30%", xl: "30%" }}>
          <Heading textAlign={"center"} mb={"1.5rem"}>
            Follow us
          </Heading>
          <Center display={"flex"} gap={"1.5rem"}>
            <FaFacebookF fontSize={"2rem"} />
            <FaLinkedinIn fontSize={"2rem"} />
            <FaInstagram fontSize={"2rem"} />
            <TiSocialTwitter fontSize={"2rem"} />
            <CiYoutube fontSize={"2rem"} />
            <FaQuora fontSize={"2rem"} />
          </Center>
        </Box>
        <Box
          textAlign={"left"}
          w={{ base: "100%", md: "100%", lg: "30%", xl: "30%" }}
        >
          <Heading>Head Office</Heading>
          <Box display={"flex"} gap={"1rem"}>
            <CiLocationOn fontSize={"3rem"} />
            <Text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elits, sed diam
              nonumy eirmod tempor invidunt ut.
            </Text>
          </Box>
          <Box display={"flex"} gap={"1rem"}>
            <CiStopwatch fontSize={"1.8rem"} />
            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
          </Box>
          <Box display={"flex"} gap={"1rem"}>
            <CiStopwatch fontSize={"1.8rem"} />
            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
          </Box>
          <Box display={"flex"} gap={"1rem"}>
            <FaTrainSubway fontSize={"1.3rem"} style={{ marginLeft: "0.4rem" }} />
            <Text>Lorem ipsum asd asdsaweeq Lorem Ipsum</Text>
          </Box>
        </Box>
      </Box>
      <Box
        backgroundColor={"#092751"}
        p={"1rem"}
        color={"white"}
        textAlign={"center"}
      >
        <Text m={"0.5rem"}>© 2021 All Rights Reserved. Privacy Policy</Text>
      </Box>
    </>
  );
}

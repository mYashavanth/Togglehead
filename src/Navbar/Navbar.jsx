import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import {
  AddIcon,
  CloseIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { useState } from "react";

export default function Navbar() {
  const [flag, setFlag] = useState(false);
  const data = [
    { title: "Qualifications" },
    { title: "Organizations" },
    { title: "Research & Analysis" },
    { title: "Lorem ipsum" },
    { title: "Lorem ipsum" },
  ];
  return (
    <>
      <Flex
        backgroundColor={"#12406F"}
        color={"white"}
        p={"1rem"}
        display={{ base: "none", md: "none", lg: "none", xl: "flex" }}
        position={"sticky"}
        top={0}
        zIndex={"999"}
      >
        <Box>
          <Heading ml={"6rem"}>LOGO</Heading>
        </Box>
        <Spacer />
        <Box display={"flex"} flexDirection={"row"} gap={"1.5rem"}>
          {data.map((ele, index) => (
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
              key={index}
            >
              <Text>{ele.title}</Text>
              <Box mt={"0.2rem"}>
                <IoIosArrowDown />
              </Box>
            </Box>
          ))}
        </Box>
        <Center m={"0 1.5rem"}>
          <MdOutlineSearch fontSize={"1.5rem"} />
        </Center>
        <Button
          colorScheme="gray"
          color={"#12406F"}
          mr={"2rem"}
          fontWeight={"bold"}
          letterSpacing={"0.1rem"}
          p={"0 1.5rem"}
        >
          Enrolment
        </Button>
      </Flex>

      <Flex
        backgroundColor={"#12406F"}
        color={"white"}
        p={"1rem"}
        justifyContent={"space-between"}
        display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
        position={"sticky"}
        top={0}
        zIndex={"999"}
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={
              flag ? (
                <CloseIcon fontSize={"1.4rem"} />
              ) : (
                <HamburgerIcon fontSize={"2rem"} />
              )
            }
            variant="outline"
            border={"0.1rem solid #12406F"}
            color={"white"}
            _hover={{ backgroundColor: "#12406F", color: "gray.300" }}
            _active={{ backgroundColor: "#12406F", color: "gray.300" }}
            onClick={() => setFlag(!flag)}
          />
          <MenuList background={"#12406F"}>
            {data.map((ele, index) => (
              <MenuItem
                icon={<IoIosArrowDown />}
                background={"transparent"}
                key={index}
              >
                {ele.title}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Box>
          <Heading ml={{ base: "1rem", md: "2rem", lg: "2rem", xl: "6rem" }}>
            LOGO
          </Heading>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          <Center m={"0 1.5rem"}>
            <MdOutlineSearch fontSize={"1.5rem"} />
          </Center>
          <Button
            colorScheme="gray"
            color={"#12406F"}
            mr={"2rem"}
            fontWeight={"bold"}
            letterSpacing={"0.1rem"}
            p={"0 1.5rem"}
          >
            Enrolment
          </Button>
        </Box>
      </Flex>
    </>
  );
}

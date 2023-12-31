import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { TbCalendarStats } from "react-icons/tb";

export default function UpcomingExaminations() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={{
          base: "column",
          md: "column",
          lg: "column",
          xl: "row",
        }}
        gap={"1rem"}
        width={"90%"}
        m={"auto"}
        p={"1rem"}
        mt={"3rem"}
        mb={"3rem"}
      >
        <Box
          borderRight={{
            base: "none",
            md: "none",
            lg: "none",
            xl: "1px solid gray",
          }}
          borderBottom={{
            base: "1px solid gray",
            md: "1px solid gray",
            lg: "1px solid gray",
            xl: "none",
          }}
          p={"1rem"}
          w={{ base: "100%", md: "100%", lg: "100%", xl: "25%" }}
        >
          <Heading color={"#12406F"}>Upcoming Examinations</Heading>
          <Text>Enquire about the examination & register for the exam</Text>
        </Box>
        <Box display={"flex"} flexDirection={{ base: "column", md: "column", lg: "column", xl: "row" }} gap={"3rem"}>
          <Box display={"flex"} flexDirection={"row"} gap={"1rem"} p={"1rem"}>
            <Box>
              <TbCalendarStats fontSize={"3rem"} color="#12406F" />
            </Box>
            <Box>
              <Heading size={"md"} color={"#12406F"}>
                02th October 2014
              </Heading>
              <Text>Level 1 exam</Text>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"1rem"} p={"1rem"}>
            <Box>
              <TbCalendarStats fontSize={"3rem"} color="#12406F" />
            </Box>
            <Box>
              <Heading size={"md"} color={"#12406F"}>
                Nov-Dec 2016
              </Heading>
              <Text>Level 2</Text>
              <Text>Lorem Ipsum</Text>
              <Text>Lorem Ipsum</Text>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"1rem"} p={"1rem"}>
            <Box>
              <TbCalendarStats fontSize={"3rem"} color="#12406F" />
            </Box>
            <Box>
              <Heading size={"md"} color={"#12406F"}>
                Ongoing this year
              </Heading>
              <Text>Level 3 (Grad)</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

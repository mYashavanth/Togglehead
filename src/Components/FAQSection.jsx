// FAQSection.jsx
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";
import { AiFillMinusCircle } from "react-icons/ai";

const FAQSection = ({ faqData }) => {
  const [openItems, setOpenItems] = useState(Array(faqData.length).fill(false));
  console.log(openItems);

  const handleToggle = (index) => {
    const newOpenItems = [...openItems];
    openItems.forEach((item, i) => {
      if (i !== index) {
        newOpenItems[i] = false;
      }
    });
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <>
      <Box>
        <Heading textAlign={"center"} color={"#12406F"} m={"3rem"}>
          FAQ
        </Heading>
        <Accordion allowToggle w={"90%"} m={"auto"}>
          {faqData.map((faq, index) => (
            <AccordionItem key={index} p={"0.6rem"}>
              <h2>
                <AccordionButton
                  onClick={() => handleToggle(index)}
                  color={openItems[index] ? "#12406F" : "black"}
                >
                  <Box flex="1" textAlign="left" fontWeight={"500"}>
                    {faq.question}
                  </Box>
                  <Box>
                    {openItems[index] ? (
                      <AiFillMinusCircle fontSize={"1.5rem"} />
                    ) : (
                      <FiPlusCircle fontSize={"1.5rem"} />
                    )}
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </>
  );
};

export default FAQSection;

import Navbar from "./Navbar/Navbar";
import VerticalSlider from "./Components/VerticalSlider";
import Statistics from "./Components/Statistics";
import FAQSection from "./Components/FAQSection";
import UpcomingExaminations from "./Components/UpcomingExaminations";
import HorizontalScrolling from "./Components/HorizontalScrolling";
import Subscription from "./Components/Subscription";
import Footer from "./Components/Footer";

function App() {
  const counts = [
    {
      start: 0,
      end: 123,
    },
    {
      start: 0,
      end: 12,
    },
    {
      start: 0,
      end: 12,
    },
    {
      start: 0,
      end: 123,
    },
  ];
  const slides = [
    {
      heading: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit odio in turpis hendrerit, nec elementum velit blandit. Integer vel nunc sit amet eros interdum tincidunt.",
      imageUrl:
        "https://www.theirmindia.org/assets/images/homepage/hbanner_6.png",
    },
    {
      heading: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit odio in turpis hendrerit, nec elementum velit blandit. Integer vel nunc sit amet eros interdum tincidunt.",
      imageUrl:
        "https://www.theirmindia.org/assets/images/homepage/hbanner_2.png",
    },
    {
      heading: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit odio in turpis hendrerit, nec elementum velit blandit. Integer vel nunc sit amet eros interdum tincidunt.",
      imageUrl:
        "https://www.theirmindia.org/assets/images/homepage/hbanner_3.png",
    },
    {
      heading: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit odio in turpis hendrerit, nec elementum velit blandit. Integer vel nunc sit amet eros interdum tincidunt.",
      imageUrl:
        "https://www.theirmindia.org/assets/images/homepage/hbanner_14.png",
    },
    {
      heading: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit odio in turpis hendrerit, nec elementum velit blandit. Integer vel nunc sit amet eros interdum tincidunt.",
      imageUrl:
        "https://www.theirmindia.org/assets/images/homepage/hbanner_5.png",
    },
  ];
  const faqData = [
    {
      question: "How does an investor gain access to MF Utility?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question:
        "Will investors be able to have multiple Common Account Numbers?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "How does an investor gain access to MF Utility?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <>
      <Navbar />
      <VerticalSlider slides={slides} />
      <UpcomingExaminations />
      <HorizontalScrolling />
      <Statistics counts={counts} />
      <FAQSection faqData={faqData} />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import FlashContainer from "../components/FlashContainer";
import NavigateButton from "../components/NavigateButton";
import Flashcard from "../components/FlashCard";
import { useCards } from "../hooks/cards";
import { Loader } from "../components/Loader";

let index = 0;
const Home = () => {
  const { loading, cards } = useCards();
  const [content, setcontent] = useState(null);
  useEffect(() => {
    if (cards.length > 0) {
      setcontent(cards[0]);
    }
  }, [cards]);
  
  if (loading) {
    return (
      <FlashContainer>
        <div className="absolute z-50 left-0 right-0 bottom-0 h-full w-full md:col-span-2 mt-20 bg-zinc-800 backdrop-filter backdrop-blur-sm bg-opacity-30 grid place-content-center">
          <Loader></Loader>
        </div>
      </FlashContainer>
    );
  }
  if (cards.length === 0) {
    return <div>No flashcards available at the moment</div>;
  }
  return (
    <div className="w-full">
      <FlashContainer>
        <p className="text-3xl font-bold mt-5 mx-auto text-center">
          Guess the Answer!
        </p>
        <div className="mt-8 flex justify-center items-center gap-5">
          <NavigateButton
            onclick={() => {
              if (index == 0) return;
              else {
                index--;
                setcontent(cards[index]);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b1aaaa"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </NavigateButton>
          <Flashcard question={content?.question} answer={content?.answer} />
          <NavigateButton
            onclick={() => {
              if (index == cards.length - 1) return;
              else {
                index++;
                setcontent(cards[index]);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b1aaaa"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </NavigateButton>
        </div>
      </FlashContainer>
    </div>
  );
};

export default Home;

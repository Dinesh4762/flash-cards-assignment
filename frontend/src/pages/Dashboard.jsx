import React, { useState } from "react";
import FlashContainer from "../components/FlashContainer";
import WhiteButton from "../components/WhiteButton";
import { useCards } from "../hooks/cards";
import Card from "../components/Card";
import { Loader } from "../components/Loader";
import CreatePopup from "../components/CreatePopup";

const Dashboard = () => {
  const { loading, cards } = useCards();
  const [popupVisible, setPopupVisible] = useState(false);
  return (
    <>
      <FlashContainer>
        {/* admin-navbar */}
        {popupVisible && (
          <div
            onClick={() => setPopupVisible(false)}
            className="w-full h-full z-50 fixed top-0 left-0 right-0 bg-zinc-800 backdrop-filter backdrop-blur-sm bg-opacity-30"
          >
            <CreatePopup setPopupVisible={setPopupVisible} />
          </div>
        )}
        <div className="border-b-2 border-zinc-500/30 p-2 flex justify-around items-center">
          <span className="font-medium text-xl max-[450px]:text-base">Admin Dashboard</span>
          <WhiteButton label="Add Card" onclick={() => setPopupVisible(true)} />
        </div>
        {/* flashcards-area */}
        <div className="w-full grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 items-center py-4">
          {loading && (
            <div className="h-full w-full md:col-span-2 mt-20">
              {" "}
              <Loader />
            </div>
          )}
          {!loading && cards?.length == 0 && (
            <div className="h-full w-full md:col-span-2 mt-20 text-center">
              {" "}
              Sorry no cards to show...
            </div>
          )}
          {cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </FlashContainer>
    </>
  );
};

export default Dashboard;

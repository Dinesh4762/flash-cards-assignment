import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { BASE_URL } from "../../config";

export const useCards = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    try {
      axios.get(`${BASE_URL}/cards`).then((res) => {
        // console.log(res.data);
        setCards(res.data.cards);
        setLoading(false);
      });
    } catch (error) {
      toast.error("Something's wrong!");
      setLoading(false);
    }
  }, []);

  return { loading, cards };
};

export const useCard = (id) => {
  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState({ question: "", answer: "" });

  useEffect(() => {
    try {
      axios.get(`${BASE_URL}/${id}`).then((res) => {
        // console.log(res.data);
        setLoading(false);
        setCard(res.data.card);
      });
    } catch (error) {
      toast.error("Something's wrong!");
      setLoading(false);
    }
  }, []);
  return { loading, card, setCard };
};

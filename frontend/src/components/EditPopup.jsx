import axios from "axios";
import { toast } from "sonner";
import InputDiv from "./InputDiv";
import Backdrop from "./Backdrop";
import { useNavigate, useParams } from "react-router-dom";
import { useCard } from "../hooks/cards";
import { Loader } from "./Loader";
import FlashContainer from "./FlashContainer";

const EditPopup = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, card, setCard } = useCard(id);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!card.question || !card.answer) {
      toast.error("Inputs can't be left empty");
      return;
    }
    axios
      .put(`${import.meta.env.VITE_URL}/edit/${id}`, card)
      .then((res) => {
        if (res.data.success) {
          toast.success("updated successfully");
          setTimeout(() => {
            navigate("/dashboard");
          }, 500);
        } else {
          toast.error("Failed to update!");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("something went wrong");
      });
  };
  return (
    <FlashContainer>
      <div className="w-full h-full z-10 absolute top-0 left-0 bg-zinc-800 backdrop-filter backdrop-blur-sm bg-opacity-30">
        {loading && (
          <div className="absolute z-50 left-0 right-0 bottom-0 h-full w-full md:col-span-2 mt-20 bg-zinc-800 backdrop-filter backdrop-blur-sm bg-opacity-30 grid place-content-center">
            <Loader></Loader>
          </div>
        )}
        <div className="text-center mt-5">Edit your changes!</div>
        <Backdrop>
          <InputDiv
            label={"Question"}
            value={card.question}
            onchange={(e) => setCard({ ...card, question: e.target.value })}
            placeholder={"How many medals india won at Olympics?"}
          />
          <InputDiv
            label={"Answer"}
            value={card.answer}
            onchange={(e) => setCard({ ...card, answer: e.target.value })}
            placeholder={"6"}
          />

          <button
            type="submit"
            className="px-3 py-2 mt-5 bg-[#039124] rounded-lg text-white active:scale-95"
            onClick={onSubmitHandler}
          >
            Save Changes
          </button>
        </Backdrop>
      </div>
    </FlashContainer>
  );
};

export default EditPopup;

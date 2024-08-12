import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import InputDiv from "./InputDiv";
import Backdrop from "./Backdrop";
import { BASE_URL } from "../../config";

const CreatePopup = ({ setPopupVisible }) => {
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!ques || !ans) {
      toast.error("Inputs can't be left empty");
      return;
    }
    axios
      .post(`${BASE_URL}`, { question: ques, answer: ans })
      .then((res) => {
        toast.success("created");
        setPopupVisible(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error("something went wrong");
      });
  };
  return (
    <Backdrop>
      <InputDiv
        label={"Question"}
        value={ques}
        onchange={(e) => setQues(e.target.value)}
        placeholder={"How many medals india won at Olympics?"}
      />
      <InputDiv
        label={"Answer"}
        value={ans}
        onchange={(e) => setAns(e.target.value)}
        placeholder={"6"}
      />

      <button
        type="submit"
        className="px-3 py-2 mt-5 bg-[#E11D48] rounded-lg text-white active:scale-95"
        onClick={onSubmitHandler}
      >
        Create
      </button>
    </Backdrop>
  );
};

export default CreatePopup;

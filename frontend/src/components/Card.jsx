import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import { toast } from "sonner";
import axios from "axios";

const Card = ({ card }) => {
  const navigate = useNavigate();
  const editHandler = () => {
    navigate(`/edit/${card.id}`);
  };
  const deleteCardHandler = () => {
    console.log(1);
    axios.delete(`${BASE_URL}/${card.id}`).then((res) => {
      if (res.data.success) {
        toast.success("Card deleted!");
        window.location.reload();
      } else {
        toast.error("Could not perform deletion");
      }
    });
  };
  return (
    <div className="flex w-[85%] md:max-w-[400px] bg-[#151515] border border-zinc-500/10 px-5 py-3 gap-2 rounded-md text-white">
      <div>
        <p className="">{card.question}</p>
        <p className="mt-2">
          <span className="text-[#4DB925] font-bold">Ans: </span>
          {card.answer}
        </p>
      </div>
      <div className="ml-auto flex flex-col justify-start items-end gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b1aaaa"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-trash-2 hover:scale-125 transition-all duration-200 ease-in-out cursor-pointer"
          onClick={deleteCardHandler}
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1="10" x2="10" y1="11" y2="17" />
          <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b1aaaa"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-square-pen hover:scale-125 transition-all duration-200 ease-in-out cursor-pointer"
          onClick={editHandler}
        >
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
        </svg>
      </div>
    </div>
  );
};

export default Card;

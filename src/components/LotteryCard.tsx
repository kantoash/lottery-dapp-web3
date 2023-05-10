import { useNavigate } from "react-router";
import { truncate } from "../services/blockchain";
import { Lottery } from "../typings";

interface LotteryCardProps {
  lottery: Lottery;
}

const LotteryCard: React.FC<LotteryCardProps> = ({ lottery }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="w-full h-full flex flex-col justify-between cursor-pointer ">
        <div className="flex justify-start items-center space-x-2">
          <img src={lottery?.image} alt="icon" className="rounded-lg w-20" />
          <div>
            <p className="text-green-300">Upto: {lottery?.prize} ETH</p>
            <p className="text-sm text-gray-300">
              Days left: {lottery?.drawsAt}
            </p>
            <p className="text-sm text-gray-300">
              participants: {lottery?.participants}
            </p>
          </div>
        </div>
        <div className="py-5">
          <p className="font-semibold pb-2 text-green-300">{lottery?.title}</p>
          <p className="text-sm leading-5 text-gray-300">
            {truncate(lottery?.description, 90, 3, 0)}
          </p>
        </div>
        <div
        onClick={()=>navigate(`/jackpots/${lottery.id}/`)}
          className="bg-green-500 hover:bg-opacity-75 py-2 px-5
              rounded-md text-white font-semibold"
        >
          PLAY NOW
        </div>
      </div>{" "}
    </div>
  );
};

export default LotteryCard;

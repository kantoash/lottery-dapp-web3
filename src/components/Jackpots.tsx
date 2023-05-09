
import LotteryCard from "./LotteryCard";
import { Lottery } from "../typings";

interface JackpotsProps {
  lotteries?: Lottery[]
}

const Jackpots: React.FC<JackpotsProps> = ({
  lotteries
}) => {
  
  return (
    <div className="bg-slate-100 pt-5 overflow-hidden">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-800 py-5">
          Lottery Jackpots
        </h1>
        <p className="text-center text-sm text-slate-600">
          We bring a persolan and effective every project we work on. <br />
          which is why our client love why they keep coming back.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6 py-10 w-4/5 mx-auto ">
        
        {lotteries && lotteries.map((lottery: Lottery) => (
        <LotteryCard lottery={lottery} key={lottery?.id} />
      ))}
      </div>
    </div>
  );
};

export default Jackpots;

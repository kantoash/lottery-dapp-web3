import { useEffect, useState } from "react";
import Header from "../components/Header";
import Jackpots from "../components/Jackpots";
import { getLotteries } from "../services/ssrblockchain";
import { Lottery } from "../typings";

const Home = () => {
  const [lotteries, setLotteries] = useState<Lottery[]>()

  useEffect(() => {
    const fetchLotteries = async () => {
      const Lotteries = await getLotteries();
      setLotteries(Lotteries)
    };
    fetchLotteries();
  }, [lotteries]);  

  

  return (
    <div>
      <Header />
      <Jackpots lotteries={lotteries} />
    </div>
  );
};

export default Home;

import networking from '../assets/networking.png'
import background from "../assets/background.jpg";
import { useSelector } from "react-redux";
import {
  walletConnect,
  truncate,
} from "../services/blockchain";
import { RootState } from "../store";
import { useNavigate } from 'react-router';

const Header = () => {
  const { wallet } = useSelector((state: RootState) => state.counter);
  const navigate = useNavigate();
  
  return (
    <div
      className="px-5 md:px-20"
      style={{ background: `url('${background}') fixed no-repeat top/cover` }}
    >
      <div className="flex items-center justify-between text-white py-5">
        <a onClick={()=>navigate('/')}>
          <h1 className="text-xl font-bold cursor-pointer">DappLottery</h1>
        </a>

        <div className="hidden lg:flex items-center space-x-3 font-semibold">
          <p>Home</p>
          <p>How To Play</p>
          <p>All Lottery</p>
          <p>Contact</p>
        </div>

        {wallet.length > 0 ? (
          <button
            className="clickBtn"
          >
            {truncate(wallet, 4, 4, 11)}
          </button>
        ) : (
          <button
            onClick={walletConnect}
            className="clickBtn"
          >
            Connect Wallet
          </button>
        )}
      </div>
      <div className="flex items-center justify-between pb-5">
        <div>
          <div className="text-white py-5">
            <h2 className="text-4xl font-bold py-4 ">
              Take the chance to <br /> change your life
            </h2>

            <p className="text-xl">
              We bring a persolan and effective to every project we work on.{" "}
              <br />
              Which is why our client love why they keep coming back.
            </p>
          </div>
        </div>
        <div className="py-5 hidden sm:block">
          <img src={networking} alt="network" className="rounded-lg w-80" />
        </div>
      </div>

      <div className="pb-10">
        <div
          onClick={()=>navigate('/create')}
          className="bg-amber-500 hover:bg-rose-600 text-white rounded-md
        cursor-pointer font-semibold py-3 px-5"
        >
          Create Jackpot
        </div>
      </div>
    </div>
  );
};

export default Header;

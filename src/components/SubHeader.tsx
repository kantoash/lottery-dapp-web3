import background from "../assets/background.jpg";
import { useSelector } from "react-redux";
import {
  walletConnect,
  truncate,
} from "../services/blockchain";
import { RootState } from "../store";
import { useNavigate } from "react-router";

const SubHeader = () => {
  const { wallet } = useSelector((state: RootState) => state.counter);
  const navigate = useNavigate();
  return (
    <div
      className="px-5 md:px-20"
      style={{ background: `url('${background}') fixed no-repeat top/cover` }}
    >
      <div className="flex items-center justify-between text-white py-5">
      <div onClick={() => navigate('/')}>
          <h1 className="text-xl font-bold cursor-pointer">DappLottery</h1>
        </div>

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
            className="clickBtnm"
          >
            Connect Wallet
          </button>
        )}
      </div>
     
    </div>
  );
};

export default SubHeader;

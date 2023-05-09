import { toast } from "react-hot-toast";
import { BigNumberish, ethers } from "ethers";
import { Abi, Address } from './contract'
import { setWallet } from "../store/storeSlices";
import { store } from "../store";
import { createJackpotProps } from "../typings";

export const toWei = (num: string) => ethers.utils.parseEther(num);
export const fromWei = (num: BigNumberish) => ethers.utils.formatEther(num);

let tx, ethereum: any;

if (typeof window !== "undefined") {
  ethereum = window.ethereum;
}

const reportError = (error:any) => {
  console.log(error.message)
}

// css Ethereum contract
const EthereumContract = async () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const Contract = new ethers.Contract(
    Address,
    Abi.abi,
    signer
  );
  return Contract;
};

export const walletConnect = async () => {
  try {
    if (!ethereum) {
      toast("please install metamask");
    }
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    store.dispatch(setWallet(accounts[0]));
  } catch (error) {
    reportError(error)
  }
};

export const isWallectConnected = async () => {
  try {
    if (!ethereum) toast("please install metamask");
    const accounts = await ethereum.request({ method: "eth_accounts" });

    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async () => {
      store.dispatch(setWallet(accounts[0]));
      await isWallectConnected();
    });

    if (accounts.length) {
      store.dispatch(setWallet(accounts[0]));
    } else {
      store.dispatch(setWallet(""));
      toast("please connect wallet.");
      console.log('No accounts found')
    }
  } catch (error) {
    reportError(error)
  }
};

export const createJackpot = async ({title, description, imageUrl, prize, ticketPrice, expiresAt}: createJackpotProps ) => {
  try {
    if (!ethereum) return  toast("please install metamask");
    const connectedAccount = store.getState().counter.wallet
    const contract = await EthereumContract();
    
    tx = await contract.createLottery(
      title,
      description,
      imageUrl,
      toWei(prize),
      toWei(ticketPrice),
      expiresAt,
      {
        from: connectedAccount,
      }
    )
    
    await tx.wait()
  } catch (error) {
    reportError(error);
  }
}

export const buyTicket = async (
  id: string,
  luckyNumberId: number,
  ticketPrice: string
) => {
  try {
    if (!ethereum) {
      toast("please install metamask");
    }
    const wallet = store.getState().counter.wallet;
    const contract = await EthereumContract();
    tx = await contract.buyTicket(id, luckyNumberId, {
      from: wallet,
      value: toWei(ticketPrice),
    });
    await tx.wait();
  } catch (error) {
    reportError(error)
  }
};

export const performDraw = async (id: string, numOfWinners: number) => {
  if (!ethereum) {
    toast("please install metamask");
  }
  const wallet = store.getState().counter.wallet;
  const contract = await EthereumContract();
  tx = await contract.randomlySelectWinners(id, numOfWinners, {
    from: wallet
  });
  await tx.wait();
}

export const exportLuckyNumber = async (id: string, luckyNumbers: string[]) => {
  try {
    if (!ethereum) toast("please install metamask");
    const wallet = store.getState().counter.wallet;
    const contract = await EthereumContract();
    tx = await contract.importLuckyNumbers(id, luckyNumbers, {
      from: wallet,
    });
    await tx.wait();
  } catch (error) {
    toast("Generate Lucky Number Error");
  }
};

export const truncate = (
  text: string,
  startChars: number,
  endChars: number,
  maxLength: number
) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars);
    let end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
};

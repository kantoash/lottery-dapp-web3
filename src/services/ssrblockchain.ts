import { Abi, Address } from './contract'
import { ethers } from "ethers";
import { fromWei } from "./blockchain";

let ethereum: any;

if (typeof window !== "undefined") {
  ethereum = window.ethereum;
}

export const EthereumContract = async () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const wallet = ethers.Wallet.createRandom();
  const signer = provider.getSigner(wallet.address);
  const Contract = new ethers.Contract(
    Address,
    Abi.abi,
    signer
  );
  return Contract;
};

export const getLotteries = async () => {
  const contract = await EthereumContract();
  const Lotteries = await contract.getLotteries();
  return structureLotteries(Lotteries);
};

export const getLottery = async (id: string) => {
  const lottery = await (await EthereumContract()).functions.getLottery(id);
  return structureLotteries(lottery)[0];
};

export const getLuckyNumbers = async (id: string) => {
  const luckyNumbers = await (
    await EthereumContract()
  ).functions.getLotteryLuckyNumbers(id);
  return luckyNumbers[0];
};

export const getLotteryResult = async (id: string) => {
  const lotterResult = await (
    await EthereumContract()
  ).functions.getLotteryResult(id);
  return structuredResult(lotterResult[0]);
};

export const getParticipants = async (id: string) => {
  const participants = await (
    await EthereumContract()
  ).functions.getLotteryParticipants(id);
  return structuredParticipants(participants[0]);
};

export const getPurchasedNumbers = async (id: string) => {
  const participants = await (
    await EthereumContract()
  ).functions.getLotteryParticipants(id);
  return structuredNumbers(participants[0]);
};

export function formatDate(timestamp: any) {
  const date = new Date(timestamp);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const monthOfYear = monthsOfYear[date.getMonth()];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  return `${dayOfWeek} ${monthOfYear} ${dayOfMonth}, ${year}`;
}

const structuredParticipants = (participants: []) =>
  participants.map((participant: any) => ({
    account: participant.account,
    lotteryNumber: participant.lotteryNumber,
    paid: participant.paid,
  }));

const structuredNumbers = (participants: []) => {
  const purchasedNumbers: [] = [];
  for (let index = 0; index < participants.length; index++) {
    const purchasedNumber = participants[index][1];
    purchasedNumbers.push(purchasedNumber);
  }
  return purchasedNumbers;
};

const structureLotteries = (lotteries: []) =>
  lotteries.map((lottery: any) => ({
    id: Number(lottery.id),
    title: lottery.title,
    description: lottery.description,
    owner: lottery.owner.toLowerCase(),
    prize: fromWei(lottery.prize),
    ticketPrice: fromWei(lottery.ticketPrice),
    image: lottery.image,
    createdAt: formatDate(Number(lottery.createdAt + "000")),
    drawsAt: formatDate(Number(lottery.expiresAt)),
    expiresAt: Number(lottery.expiresAt),
    participants: Number(lottery.participants),
    drawn: lottery.drawn,
  }));

const structuredResult = (result: any) => {
  let onlyWinners = []
  for (let i = 0; i < result.winners.length; i++) {
    const winner = result.winners[i][1]
    onlyWinners.push(winner)
  }
  const LotteryResult = {
    id: result.id,
    completed: result.completed,
    paidout: result.paidout,
    timestamp: Number(result.timestamp + "000"),
    sharePerWinner: fromWei(result.sharePerWinner),
    winners: onlyWinners
  };

  return LotteryResult;
};

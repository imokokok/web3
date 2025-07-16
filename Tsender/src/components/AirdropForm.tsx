"use client";

import InputField from "@/ui/inputField";
import { useState } from "react";
import { chainsToTSender, tsenderAbi, erc20Abi } from "@/constants";
import { useChainId, useConfig, useAccount } from "wagmi";
import { readContract } from "wagmi/actions";

export default function AirdropForm() {
  const [tokenAddress, setTokenAddress] = useState("");
  const [recipients, setRecipients] = useState("");
  const [amounts, setAmounts] = useState("");
  const chainId = useChainId();
  const config = useConfig();
  const account = useAccount();

  async function getApprovedAmount(
    tSenderAddress: string | null
  ): Promise<number> {
    if (!tSenderAddress) {
      alert("No address found,please use a supported chain");
      return 0;
    }
    const response = await readContract(config, {
      abi: erc20Abi,
      address: tokenAddress as `0x${string}`,
      functionName: "allowance",
      args: [account.address, tSenderAddress as `0x${string}`],
    });
    return response as number;
  }

  async function handleSubmit() {
    const tSenderAddress = chainsToTSender[chainId]["tsender"];
    const approvedAmount = await getApprovedAmount(tSenderAddress);
  }

  return (
    <div>
      <InputField
        label="Token Address"
        placeholder="0x"
        value={tokenAddress}
        type="Address"
        onChange={(e) => setTokenAddress(e.target.value)}
      />
      <InputField
        label="Recipients"
        placeholder="0x12314,0x12342342"
        value={recipients}
        type="Address"
        onChange={(e) => setRecipients(e.target.value)}
        large={true}
      />
      <InputField
        label="Amount"
        placeholder="100,200,300,..."
        value={amounts}
        type="Address"
        onChange={(e) => setAmounts(e.target.value)}
        large={true}
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors duration-200"
      >
        Send tokens
      </button>
    </div>
  );
}

"use client";

import InputField from "@/ui/inputField";
import { useState } from "react";

export default function AirdropForm() {
  const [tokenAddress, setTokenAddress] = useState("");
  const [recipients, setRecipients] = useState("");
  const [amounts, setAmounts] = useState("");

  async function handleSubmit() {
    console.log(tokenAddress);
    console.log(recipients);
    console.log(amounts);
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
      <button onClick={handleSubmit}>Send tokens</button>
    </div>
  );
}

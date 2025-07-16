"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, mainnet, zksync } from "viem/chains";

export default getDefaultConfig({
  appName: "Tsender",
  projectId: "0d65ff76d5a904e8b0177e6b0686ae0b",
  chains: [anvil, zksync, mainnet],
  ssr: false,
});

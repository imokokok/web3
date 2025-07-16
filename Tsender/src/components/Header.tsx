import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/imokokok/web3.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-colors"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <h1 className="text-xl font-bold text-gray-900">tsender</h1>
      </div>
      <div>
        <ConnectButton
          showBalance={false}
          accountStatus="address"
          chainStatus="icon"
        />
      </div>
    </header>
  );
}

import React, { useState } from "react";
import { useConnect, useDisconnect, useAccount } from "wagmi";
import { shortenAddress } from "../ui/ShortenAddress";
import { FaWallet } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";

const ConnectBtn = () => {
  const { connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected,address } = useAccount();
  // const address = "oxfrbfbcbjbcffrbecsjdbjfhbbvf";
  const [showProfile, setShowProfile] = useState(false);

  const metaMaskConnector = connectors.find(
    (connector) => connector.name === "MetaMask"
  );
  const toggleProfile = () => {
    setShowProfile((pre) => !pre);
  };
  const connectBtn = (connector: any) => {
    try {
      connector.connect();
    } catch (error) {
      console.log("can't cannect");
      
    }
  };

  return (
    <div className=" relative"> {/* Add 'relative' to parent container */}
     {isConnected && address ? (
      <> 
        <div
          className="flex gap-2 items-center justify-center cursor-pointer bg-connectButton px-5 py-2 bg-[rgb(159,149,231)] rounded-full"
          onClick={toggleProfile}
        >
          {address && <p>{shortenAddress(address)}</p>}
          <div className="border border-black rounded-full p-2">
            <FaWallet className="text-lg text-black" />
          </div>
          <RiArrowDropDownLine />
        </div>
        {showProfile && (
          <div
            className="absolute right-0 mt-2 bg-white shadow-lg text-black rounded-lg p-4 z-10 w-40"
            onClick={() => disconnect()}
          >
            <div className="flex items-center gap-2">
              <IoIosLogOut className="text-lg" />
              <span>Disconnect</span>
            </div>
          </div>
       )}
      </>
    ) : (
      metaMaskConnector && (
        <div
          className="p-4 cursor-pointer bg-black text-white rounded-lg"
          onClick={() => connectBtn(metaMaskConnector)}
        >
          Connect Wallet
        </div>
      )
    )}
  </div>
);
};
export default ConnectBtn;

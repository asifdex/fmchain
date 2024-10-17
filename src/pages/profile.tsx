import Image from "next/image";
import React from "react";
import { useAccount, useEnsAvatar, useEnsName } from "wagmi";
import Blockies from "react-blockies"; // npm install react-blockies

function profile() {
  // Get connected wallet address
  const { address } = useAccount();
  // Get ENS name (if the wallet has one)
  const { data: ensName } = useEnsName({ address });
  // Get ENS avatar (if the ENS name has one)
  const { data: ensAvatar } = useEnsAvatar({ name: ensName || undefined });

  return (
    <div className="w-full pt-36  flex felx-col items-center">
      <div className="w-full flex flex-col px-2 ">
        <div className="w-full min-h-64 bg-black rounded-xl" />
        <div className="relative -mt-16 ml-6 ">
          {ensAvatar ? (
            <Image
              src={ensAvatar}
              alt="ENS Avatar"
              width={70}
              height={70}
              className="rounded-full border-4 border-gray  object-contain"
            />
            ) : (
              <Blockies
                seed={address?.toLowerCase() || ""}
                size={24}
                scale={6}
                className="blockie-avatar border-4 border-gray shadow-2xl rounded-full"
              />
            )}
          
        </div>
      </div>
    </div>
  );
}

export default profile;

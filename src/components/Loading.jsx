import React from "react";
import { VscLoading } from "react-icons/vsc";

function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin w-min h-min">
        <VscLoading size={40} />
      </div>
    </div>
  );
}

export default Loading;

import React from "react";
import { CgSpinner } from "react-icons/cg";

function Loading() {
  return (
    <div
      className="z-50 absolute bottom-2 right-1/2 h-12 w-32 bg-neutral-500/50 rounded-xl
      flex justify-center items-center"
    >
      <CgSpinner size={40} className="text-neutral-50 animate-spin" />
    </div>
  );
}
export default Loading;

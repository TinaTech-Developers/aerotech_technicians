import Image from "next/image";
import React from "react";

function Ndege() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-10">
      <div className="col-span-1 p-4">
        <Image src={"/ndege1.gif"} alt="" height={600} width={600} />
      </div>
    </div>
  );
}

export default Ndege;

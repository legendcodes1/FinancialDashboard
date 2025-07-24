"use client";
import React from "react";

export default function MainHub() {
  return (
    <>
      <div className="grid grid-cols-3 gap-10">
        <div className="border rounded-md py-10">
          {" "}
          <p> Portofolio value</p>
        </div>
        <div className="border rounded-md py-10">
          <p> Balance</p>{" "}
        </div>
        <div className="border rounded-md py-10">Investments</div>
      </div>
    </>
  );
}

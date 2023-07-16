import React from "react";
import Menu from "components/Menu";
import Canvas from "components/Canvas";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center">
        <section className="w-fit h-fit rounded-3xl shadow-section">
          <Menu />
          <Canvas />
        </section>
      </main>
    </>
  );
}

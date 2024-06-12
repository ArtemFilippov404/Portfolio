'use client';

import Header from "@/components/Header/Header";
import TypingText from "@/components/TypingText/TypingText";

export default function Home() {
  
  return (
    <>
      <Header />    
      <main className="section">
        <div className="container">

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <TypingText text="JavaScript, TypeScript, ReactJS, NextJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, StyledComponents"/>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>PHP</p>
            </li>
          </ul>

        </div>
      </main>
    </>
  );
}

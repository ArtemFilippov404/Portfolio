'use client';

import Header from "@/components/Header/Header";

export default function Home() {

  return (
    <>
      <Header />    
      <main className="section">
        <div className="container">

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, TypeScript, ReactJS, NextJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, StyledComponents</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>MySQL, PHP</p>
            </li>
          </ul>

        </div>
      </main>
    </>
  );
}

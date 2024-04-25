import React from "react";
import firstSection from "../Helper/FirstSection.jsx";
import secondSection from "../Helper/SecondSection.jsx";
import thirdSection from "../Helper/ThirdSection.jsx";
import forthSection from "../Helper/ForthSection.jsx";
import fifthSection from "../Helper/FifthSection.jsx";
import img5 from "../Images/img-5.webp";

export const Main = () => {
  return (
    <>
      <div className="section" id="firstSection">
        {firstSection.map((item, index) => {
          return (
            <div key={index}>
              <div className="heading" key={index}>
                <h1>{item.sectionTitle}</h1>
              </div>
              <div className="content">
                <div>
                  <img src={item.img} alt="img" loading="lazy" />
                </div>
                <div>
                  <h2>{item.blockTitle}</h2>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section" id="secondSection">
        {secondSection.map((item, index) => {
          return (
            <div key={index}>
              <div className="heading" key={index}>
                <h1>{item.sectionTitle}</h1>
              </div>
              <div className="content">
                <div id="contentImg">
                  <img src={item.img} alt="img" loading="lazy" />
                </div>
                <div id="contentText">
                  <h2>{item.blockTitle}</h2>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section" id="thirdSection">
        {thirdSection.map((item, index) => {
          return (
            <div key={index} id="thirdSection">
              <div className="heading">
                <h1>{item.sectionTitle}</h1>
              </div>
              <div>
                <h2>{item.blockTitle}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section" id="forthSection">
        {forthSection.map((item, index) => {
          return (
            <div key={index}>
              <div className="heading">
                <h1>{item.sectionTitle}</h1>
              </div>
              <div>
                <img src={item.img} alt="img" loading="lazy" />
              </div>
              <div>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section">
        <div className="heading">
          <h1>Section heading</h1>
        </div>
        <div id="fifthSection">
          {fifthSection.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <div>
                    <div>
                      <img src={item.img} alt="img" loading="lazy"/>
                    </div>
                    <div>
                      <p>{item.articleTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer>
        <img src={img5} alt="img footer" loading="lazy" />
      </footer>
    </>
  );
};

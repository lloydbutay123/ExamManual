import React from "react";
import firstSection from "../Helper/FirstSection.jsx";
import secondSection from "../Helper/SecondSection.jsx";
import thirdSection from "../Helper/ThirdSection.jsx";
import forthSection from "../Helper/ForthSection.jsx";
import fifthSection from "../Helper/FifthSection.jsx";
import img5 from "../Images/img-5.jpg";

export const Main = () => {
  return (
    <div>
      <div className="section" id="firstSection">
        {firstSection.map((item, index) => {
          return (
            <div key={index}>
              <div className="heading" key={index}>
                <h1>{item.sectionTitle}</h1>
              </div>
              <div className="content">
                <div>
                  <img src={item.img} alt="img" />
                </div>
                <div>
                  <h3>{item.blockTitle}</h3>
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
                <div>
                  <img src={item.img} alt="img" />
                </div>
                <div>
                  <h3>{item.blockTitle}</h3>
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
              <h3>{item.blockTitle}</h3>
              <p>{item.content}</p>
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
                <img src={item.img} alt="img" />
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
                      <img src={item.img} alt="img" />
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
        <img src={img5} alt="img footer" />
      </footer>
    </div>
  );
};

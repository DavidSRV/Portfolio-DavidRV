import React from "react";
import "./_CvStyle.scss";

function Cv() {
  return (
    <article id="skills">
      <div className="cv">
        <div className="wrap">
          <p className="cv__title">Mira mi Curriculum vitae</p>
          <a
            className="cv__link"
            href="https://drive.google.com/file/d/1hyvQFtGf3X7locdj1VsdxgYMD_zNoohP/view?usp=sharing"
            download="David Ruiz Vargas - CV"
            rel="noreferrer"
            target="_blank"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </article>
  );
}

export default Cv;

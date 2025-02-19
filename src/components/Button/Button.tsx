import React, { useState } from "react";
import "./Button.scss";
import Dropdown from "../Dropdown/Dropdown";

//Definera typ för props
interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  color?: string;
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  color = "blue",
  size = "medium",
}) => {
  const [showImages, setShowImages] = useState<boolean>(false);

  const options1 = [{ name: "Alice", age: 15 }];
  const options2 = [{ name: "Triples", age: 17 }];
  const options3 = [{ name: "Eveva", age: 16 }];

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
    setShowImages(!showImages);
  };

  return (
    <div className="button-container">
      <button
        className={`btn btn-${size} btn-${color}`}
        onClick={handleButtonClick}
      >
        {children}
      </button>

      {showImages && (
        <div className="image-gallery">
          <div className="image-item">
            <img
              src="https://th.bing.com/th?id=OIP.1zbZegRuArY3Em1EfW-2pwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
              alt="image 1"
            />
            <Dropdown options={options1} />
          </div>

          <div className="image-item">
            <img
              src="https://th.bing.com/th?id=OIP.HjnHuQt3FSDh9fvoPm4LsAHaHQ&w=252&h=247&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
              alt="image 2"
            />
            <Dropdown options={options2} />
          </div>

          <div className="image-item">
            <img
              src="https://th.bing.com/th/id/OIP.ZztWdFJ2tY65ZnfmDQ_urgHaJm?w=122&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="image 3"
            />
            <Dropdown options={options3} />
          </div>
        </div>
      )}

      <div className="video-container">
        <iframe
          width="100%"
          height="auto"
          src="https://www.youtube.com/embed/bBeZSuHI4Qc?si=kSBRo-w-ET4XuTJ0"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Button;

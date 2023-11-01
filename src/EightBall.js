import React, { useState } from "react";
import "./Eightball.css";
import { choice } from "./random";

const EightBall = () => {
  const [answer, setAnswer] = useState("Think of a question");
  const [color, setColor] = useState("black");

  const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ];

  const handleClick = () => {
    const randomAnswer = choice(answers);
    setAnswer(randomAnswer.msg);
    setColor(randomAnswer.color); // Ensure 'setColor' is properly declared with useState
  };

  return (
    <div
      className="EightBall"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <b> {answer}</b>
    </div>
  );
};

export default EightBall;

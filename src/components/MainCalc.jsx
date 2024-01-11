import "../styles/mainCalc.css";
import Header from "./Header";
import Button from "./Button";
import { useState } from "react";
const buttons = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
export default function MainCalc() {
  const [currentScreen, setcurrentScreen] = useState(0);
  const [prevScreen, setprevScreen] = useState(0);
  const [todoOP, settodoOP] = useState("");
  const [dotBool, setdotBool] = useState("false");
  const [opBool, setopBool] = useState("false");
  const [equal, setequal] = useState("false");
  function pressedButton(val){
    switch (val){
      case "AC"
    }
  }
}


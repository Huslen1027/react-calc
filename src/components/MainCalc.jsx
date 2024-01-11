import { useState } from "react";
import "../styles/MainCalc";
import Button from "./Button";
import Header from "./Header";
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
}

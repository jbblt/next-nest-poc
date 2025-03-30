"use client";

import { MemoPage } from "@/pages/MemoPage";
import dotenv from "dotenv";
dotenv.config();
export default function Home() {
  const TOKEN = process.env;

  console.log(JSON.stringify(TOKEN, null, 2));
  return <MemoPage />;
}

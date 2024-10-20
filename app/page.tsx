"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

const initialJobs = [
  {
    id: 1,
    date: "29-10-2023",
    title: "Project Manager",
    link: "https://jobs.un.org/1",
  },
  {
    id: 2,
    date: "28-10-2023",
    title: "Data Analyst",
    link: "https://jobs.un.org/2",
  },
  {
    id: 3,
    date: "27-10-2023",
    title: "Software Engineer",
    link: "https://jobs.un.org/3",
  },
  {
    id: 4,
    date: "26-10-2023",
    title: "Human Rights Officer",
    link: "https://jobs.un.org/4",
  },
  {
    id: 5,
    date: "25-10-2023",
    title: "Environmental Specialist",
    link: "https://jobs.un.org/5",
  },
  {
    id: 6,
    date: "24-10-2023",
    title: "Peacekeeping Operations Officer",
    link: "https://jobs.un.org/6",
  },
  {
    id: 7,
    date: "23-10-2023",
    title: "Humanitarian Affairs Officer",
    link: "https://jobs.un.org/7",
  },
  {
    id: 8,
    date: "22-10-2023",
    title: "Public Information Officer",
    link: "https://jobs.un.org/8",
  },
  {
    id: 9,
    date: "21-10-2023",
    title: "Legal Officer",
    link: "https://jobs.un.org/9",
  },
  {
    id: 10,
    date: "20-10-2023",
    title: "Economic Affairs Officer",
    link: "https://jobs.un.org/10",
  },
].sort((a, b) => {
  const dateA = new Date(a.date.split("-").reverse().join("-")).getTime();
  const dateB = new Date(b.date.split("-").reverse().join("-")).getTime();
  return dateB - dateA;
});

export default function UNJobCMS() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        <MainContent initialJobs={initialJobs} />
      </div>
      <Footer />
    </div>
  );
}

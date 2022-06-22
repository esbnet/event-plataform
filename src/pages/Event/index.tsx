import { ReactNode } from 'react';

import { Header } from "../../components/Header"
import { Lesson } from "../../components/Lesson"
import { Sidebar } from "../../components/Sidebar"
import { Video } from "../../components/Video"

interface EventProps {
  children: ReactNode;
}

function Event({ children }: EventProps) {
  return (
    <>
      <Header></Header>
      <Video></Video>
      <Sidebar></Sidebar>
      <Lesson></Lesson>

    </>
  );
};

export default Event;

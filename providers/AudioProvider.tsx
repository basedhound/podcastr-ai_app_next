'use client';
//
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AudioContextType, AudioProps } from "@/types";

// Types
const AudioContext = createContext<AudioContextType | undefined>(undefined);

//! Context
const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [audio, setAudio] = useState<AudioProps | undefined>()
  const pathname = usePathname();

  useEffect(() => {
    if(pathname === '/create-podcast') setAudio(undefined);
  }, [pathname])

  return (
    <AudioContext.Provider value={{ audio, setAudio}}>
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = () => {
  const context = useContext(AudioContext);

  if(!context) throw new Error('useAudio must be used within an AudioProvider');

  return context;
}

export default AudioProvider;
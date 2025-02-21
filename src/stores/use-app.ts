import { dataListApp } from "@/components/layout/app-sidebar/data";
import type { CurrApp } from "@/types/app-sidebar";
import { create } from "zustand";

export type AppName = (typeof dataListApp)[number]["name"];

interface CurrentAppStore {
  currentApp: CurrApp;
  setCurrentApp: (_appName: AppName) => { name: string; link: string } | null;
}

export const useCurrentAppStore = create<CurrentAppStore>((set, get) => ({
  currentApp: dataListApp[0],
  setCurrentApp: (appName) => {
    if (get().currentApp.name === appName) return null;

    const newApp = dataListApp.find((a) => a.name === appName) ?? dataListApp[0];
    set({ currentApp: newApp });

    return {
      name: newApp.name,
      link: newApp.link
    };
  },
}));

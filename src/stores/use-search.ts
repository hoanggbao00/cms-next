import { create } from "zustand";

type Updater = (updater: boolean | ((open: boolean) => boolean)) => void;

interface SearchStore {
  open: boolean;
  setOpen: Updater;
}

export const useSearchStore = create<SearchStore>((set) => ({
  open: false,
  setOpen: (updater) =>
    set((state) => ({
      open: typeof updater === "function" ? (updater as (open: boolean) => boolean)(state.open) : updater,
    })),
}));

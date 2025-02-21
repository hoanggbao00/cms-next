import { create } from "zustand";

interface BreadcrumbStore {
  breadcrumb: string | null;
  setBreadcrumb: (breadcrumb: string | null) => void;
}

export const useBreadcrumbStore = create<BreadcrumbStore>((set) => ({
  breadcrumb: null,
  setBreadcrumb: (breadcrumb) => set({ breadcrumb }),
}));

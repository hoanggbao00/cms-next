import img_logo_bca from "@/assets/images/logo/logo_bca.png";
import img_logo_diary from "@/assets/images/logo/logo_diary.png";
import img_logo_lw from "@/assets/images/logo/logo_lw.png";
import img_logo_note from "@/assets/images/logo/logo_note.png";
import img_logo_plant_identifier from "@/assets/images/logo/logo_plant_net.png";
import { dataSidebarBatteryCharging } from "./battery-charging";
import { dataSidebarDiary } from "./diary-me";
import { dataSidebarLiveWallpaper } from "./live-wallpaper";
import { dataSidebarNote } from "./note-app";
import { dataSidebarPlantIdentifier } from "./plant-identifier";

export const dataListApp = [
  {
    name: "DIARY ME",
    link: "/",
    dataSidebar: dataSidebarDiary,
    icon: img_logo_diary.src,
  },
  {
    name: "LIVE WALLPAPER",
    link: "/live-wallpaper",
    dataSidebar: dataSidebarLiveWallpaper,
    icon: img_logo_lw.src,
  },
  {
    name: "BATTERY CHARGING",
    link: "/battery-charging",
    icon: img_logo_bca.src,
    dataSidebar: dataSidebarBatteryCharging,
  },
  {
    name: "NOTE APP",
    link: "/note",
    icon: img_logo_note.src,
    dataSidebar: dataSidebarNote,
  },
  {
    name: "PLANT IDENTIFIER",
    link: "/plant-identifier",
    icon: img_logo_plant_identifier.src,
    dataSidebar: dataSidebarPlantIdentifier,
  },
] as const;

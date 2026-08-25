import {
  CircleAlert,
  PackageCheck,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";

import type { UrgencyLevel } from "../../../repository/inventory/dto.ts";

interface UrgencyStyle {
  Icon: LucideIcon;
  bgClassName: string;
  colorClassName: string;
  title: string;
}

export const urgencyStyle: Record<UrgencyLevel, UrgencyStyle> = {
  critical: {
    Icon: TriangleAlert,
    bgClassName: "bg-[#FF0000]/30",
    colorClassName: "text-[#FF0000]",
    title: "Critical",
  },
  warning: {
    Icon: CircleAlert,
    bgClassName: "bg-[#FFEE00]/30",
    colorClassName: "text-black",
    title: "Warning",
  },
  normal: {
    Icon: PackageCheck,
    bgClassName: "bg-green-500/20",
    colorClassName: "text-green-700",
    title: "Low",
  },
  unknown: {
    Icon: CircleAlert,
    bgClassName: "bg-gray-200",
    colorClassName: "text-gray-600",
    title: "Unknown",
  },
};

import { CalendarDays, ShoppingBasket, Warehouse } from "lucide-react";

export const summaryData = [
  {
    id: 1,
    Icon: ShoppingBasket,
    className: "text-green-700",
    title: "Products",
    amount: 7,
    desc: "Need Restock",
  },
  {
    id: 2,
    Icon: Warehouse,
    className: "text-orange-700",
    title: "Pcs",
    amount: 777,
    desc: "To Restock",
  },
  {
    id: 3,
    Icon: CalendarDays,
    className: "text-neutral-900",
    title: "Days",
    amount: 3,
    desc: "Soonest Runout",
  },
];

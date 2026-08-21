import {CalendarDays, CircleAlert, ShoppingBasket, TriangleAlert, Warehouse} from "lucide-react";

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

export const reccomData = [
  {
    id: 1,
    Icon: TriangleAlert,
    bgClassName: "bg-[#FF0000]/30",
    colorClassName: "text-[#FF0000]",
    title: "Critical",
    product: "Indomie Goreng",
    runsout: "3",
    stock: "6",
    restock: "45",
  },
  {
    id: 2,
    Icon: CircleAlert,
    bgClassName: "bg-[#FFEE00]/30",
    colorClassName: "text-black",
    title: "Warning",
    product: "Ultra Milk",
    runsout: "10",
    stock: "14",
    restock: "89",
  },
  {
    id: 3,
    Icon: CircleAlert,
    bgClassName: "bg-[#FFEE00]/30",
    colorClassName: "text-black",
    title: "Warning",
    product: "Kecap Manis",
    runsout: "14",
    stock: "20",
    restock: "130",
  },
]
import { Globe2, LockKeyhole, Zap } from "lucide-react";

export const texture = `${import.meta.env.BASE_URL}images/aether/card-grain.jpg`;
export const sculpture = `${import.meta.env.BASE_URL}images/aether/card-sculpture.webp`;
export const invoices = [
  {
    id: "024",
    client: "Studio North",
    project: "Brand identity",
    amount: 2450,
    date: "08 Oct",
    initials: "SN",
  },
  {
    id: "025",
    client: "Fieldwork",
    project: "Editorial direction",
    amount: 1800,
    date: "10 Oct",
    initials: "FW",
  },
  {
    id: "026",
    client: "Common Ground",
    project: "Website design",
    amount: 3200,
    date: "12 Oct",
    initials: "CG",
  },
];
export type Invoice = (typeof invoices)[number];
export const accountBalance = (invoice: Invoice) => 10030.5 + invoice.amount;
export const money = (amount: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    amount,
  );
export const benefits = [
  {
    icon: Zap,
    title: "Get paid. Get on with it.",
    copy: "Beautiful invoices, quick payments, and fewer awkward follow-ups.",
  },
  {
    icon: Globe2,
    title: "Your work goes everywhere.",
    copy: "Hold and spend in multiple currencies. Work beyond borders.",
  },
  {
    icon: LockKeyhole,
    title: "Peace of mind, built in.",
    copy: "Thoughtful controls keep your money in your hands.",
  },
];

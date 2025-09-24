import { NotificationItem } from "@/types/notification";

export const notification: NotificationItem[] = [
  {
    type: "Reimbursement",
    status: "paid",
    description:
      'Your submission "Lorem ipsum dolor sit amet..." with the total cost of 50,000 has been paid. please check your BRIMO application, Thankyou',
    date: "Today",
    icon: "material-symbols:check",
    image: "/assets/coin.png",
    exception: true,
  },
  {
    type: "Reimbursement",
    status: "rejected",
    description:
      'Your submission "description" has been rejected, please click for details.',
    date: "Yesterday",
    icon: "material-symbols:close",
    image: "/assets/coin.png",
  },
  {
    type: "Reimbursement",
    status: "in-progress",
    description:
      "Your submission will be processed according to the reimbursement schedule. Please wait",
    date: "2022-10-06",
    icon: "si:arrow-right-fill",
    image: "/assets/coin.png",
    exception: true,
  },
  {
    type: "Sickness",
    status: "approved",
    description: "Your submission has been approved by the Superior.",
    date: "2022-10-05",
    icon: "material-symbols:check",
    image: "/assets/medic.png",
    exception: true,
  },
  {
    type: "Sickness",
    status: "rejected",
    description:
      "Your submission has been rejected, please confirm with your Superior.",
    date: "2022-10-05",
    icon: "material-symbols:close",
    image: "/assets/medic.png",
  },
  {
    type: "Sickness",
    status: "in-review",
    description:
      "Your submission is being reviewed to the Superior for the approval process, please wait.",
    date: "2022-10-05",
    icon: "si:arrow-right-fill",
    image: "/assets/medic.png",
  },
  {
    type: "Overtime",
    status: "approved",
    description: "Your submission has been approved by the Superior.",
    date: "2022-10-05",
    icon: "material-symbols:check",
    image: "/assets/time.png",
    exception: true,
  },
  {
    id: 8,
    type: "Overtime",
    status: "rejected",
    description:
      "Your submission has been rejected, please confirm with your Superior.",
    date: "2022-10-05",
    icon: "material-symbols:close",
    image: "/assets/time.png",
  },
  {
    id: 9,
    type: "Overtime",
    status: "in-review",
    description:
      "Your submission is being reviewed to the Superior for the approval process, please wait.",
    date: "2022-10-05",
    icon: "si:arrow-right-fill",
    image: "/assets/time.png",
  },
];

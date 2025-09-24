export interface NotificationItem {
  id?: number;
  type: "Reimbursement" | "Sickness" | "Overtime";
  status: "paid" | "rejected" | "in-progress" | "approved" | "in-review";
  description: string;
  date: string;
  icon: string;
  image: string;
  exception?: boolean;
}

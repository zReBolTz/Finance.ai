import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NavBar from "../_components/navBar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import { getDashboard } from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";

interface homeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: homeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect("/?month=11");
  }
  const Dashboard = await getDashboard(month);
  return (
    <>
      <NavBar />
      <div className="flex h-full flex-col space-y-6 overflow-hidden p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
        <div className="grid grid-cols-[2fr,1fr]">
          <div className="flex flex-col gap-6">
            <SummaryCards month={month} {...Dashboard} />
            <div className="grid h-full grid-cols-3 grid-rows-1 gap-6 overflow-hidden">
              <TransactionsPieChart {...Dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={Dashboard.totalExpensePerCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

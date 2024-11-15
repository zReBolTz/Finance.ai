import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NavBar from "../_components/navBar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
// import TransactionsPieChart from "./_components/transactions-pie-chart";
import getDeshboard from "../_data/get-dashboard";

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

  const Dashboard = await getDeshboard(month);

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect("/?month=11");
  }
  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
        <div className="grid grid-cols-[2fr,1fr]">
          <SummaryCards month={month} {...Dashboard} />
        </div>

        <div className="grid grid-cols-3 grid-rows-1 gap-6">
          {/* <TransactionsPieChart {...Dashboard} /> */}
        </div>
      </div>
    </>
  );
};

export default Home;

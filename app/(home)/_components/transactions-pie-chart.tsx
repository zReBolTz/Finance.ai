"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";

import { TransactionsType } from "@prisma/client";
import { TransactionsPercentagePerType } from "@/app/_data/get-dashboard/type";
import { TrendingUpIcon } from "lucide-react";

const chartConfig = {
  [TransactionsType.INVESTIMENT]: {
    label: "Investido",
    color: "#FFFFFF",
  },
  [TransactionsType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionsType.EXPENSE]: {
    label: "Despesas",
    color: "#E93030",
  },
} satisfies ChartConfig;

interface TransactionsPieChartProps {
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  typesPertentage: TransactionsPercentagePerType;
}

const TransactionsPieChart = ({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  typesPertentage,
}: TransactionsPieChartProps) => {
  const chartData = [
    {
      type: TransactionsType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionsType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030",
    },
    {
      type: TransactionsType.INVESTIMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
  ];
  return (
    <Card className="flex flex-col p-6">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUpIcon className="text-primary" size={16} />
              <p className="text-sm text-muted-foreground">Receita</p>
            </div>
            <p>{typesPertentage[TransactionsType.DEPOSIT]}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsPieChart;

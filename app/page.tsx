export const dynamic = 'force-dynamic';

import { DataTable } from "../components/stocks/markets/data-table";
import yahooFinance from "yahoo-finance2";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import FearGreedIndex from "../components/stocks/fear-greed-index";
import SectorPerformance from "../components/stocks/SectorPerformance";
import MarketsChart from "../components/chart/MarketsChart";
import { columns } from "../components/stocks/markets/columns";

async function getData() {
  const indexes = [
    "^GSPC", // S&P 500
    "^DJI", // Dow Jones Industrial Average
    "^IXIC", // Nasdaq Composite
    "^RUT", // Russell 2000
    "^VIX", // Volatility Index
  ];
  return await yahooFinance.quote(indexes);
}

export default async function IndexPage() {
  const data = await getData();
  return (
    <div className="grid gap-6">
      <div className="grid gap-2 md:grid-cols-2">
        <FearGreedIndex />
        <SectorPerformance />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>US Markets</CardTitle>
          <CardDescription>
            US Stock market information and data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MarketsChart ticker="^GSPC" range="1mo" interval="1d" />
          <DataTable data={data} columns={columns} />
        </CardContent>
      </Card>
    </div>
  );
}

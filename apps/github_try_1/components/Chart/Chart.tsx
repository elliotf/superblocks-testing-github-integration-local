import {
  type CustomComponentProps,
  Prop,
  registerComponent,
  Theme,
} from "@superblocksteam/library";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Chart.css";
const properties = {
  title: Prop.string().propertiesPanel({
    label: "Title",
    controlType: "INPUT_TEXT",
  }),
  // Expected data format:
  // { name: string, [key: string]: number }[]
  // Example:
  // [
  //   {
  //     name: string,    // X-axis label (e.g. "Jan", "Feb", etc.)
  //     revenue: number, // data series 1 value
  //     users: number    // data series 2 value
  //   },
  //   ...
  // ]
  // Only include more than one data series if you want to show multiple lines on the chart.
  data: Prop.any().propertiesPanel({
    label: "Data",
    isJSConvertible: false,
    controlType: "COMPUTED_CODE_EDITOR",
  }),
};
type ComponentProps = CustomComponentProps<typeof properties>;
const Chart = ({ title = "Chart Title", height, data }: ComponentProps) => {
  const chartStyle: React.CSSProperties = {
    borderRadius: Theme.borderRadius.value,
    "--color-neutral": Theme.colors.neutral,
    "--color-neutral-100": Theme.colors.neutral100,
    "--color-neutral-200": Theme.colors.neutral200,
    "--color-neutral-300": Theme.colors.neutral300,
    "--color-neutral-400": Theme.colors.neutral400,
    "--color-neutral-500": Theme.colors.neutral500,
    "--color-neutral-700": Theme.colors.neutral700,
    "--color-neutral-900": Theme.colors.neutral900,
    "--color-primary-500": Theme.colors.primary500,
    "--color-primary-600": Theme.colors.primary600,
    "--color-primary-700": Theme.colors.primary700,
    "--color-primary-highlight": Theme.colors.primaryHighlight,
    "--color-success": Theme.colors.success,
    "--color-danger": Theme.colors.danger,
  } as React.CSSProperties;
  const chartClassName = "chart";

  // Safety check for data array and extract series keys
  const dataSeriesKeys: string[] =
    data && Array.isArray(data) && data.length > 0
      ? Object.keys(data[0]).filter((key) => key !== "name")
      : [];
  return (
    <div
      className={chartClassName}
      style={{
        ...chartStyle,
        height: height?.mode === "px" ? `${height.value}px` : "100%",
      }}
    >
      <div className="chart__header">
        <h3 className="chart__title">{title}</h3>
      </div>
      <div className="chart__content">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              left: 20,
              right: 20,
              top: 5,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="4 4"
              horizontal={true}
              vertical={false}
              stroke="var(--color-neutral-100)"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--color-neutral-400)",
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-neutral)",
                borderRadius: Theme.borderRadius.value,
                border: `1px solid var(--color-neutral-100)`,
                padding: "8px 16px",
                color: "var(--color-neutral-900)",
                fontSize: "15px",
                fontWeight: 400,
              }}
              labelStyle={{
                color: "var(--color-neutral-700)",
                fontSize: "14px",
                fontWeight: 500,
                marginBottom: "0px",
                marginTop: "0px",
                padding: "0px",
              }}
              itemStyle={{
                fontSize: "14px",
                fontWeight: 400,
                padding: "2px 0",
              }}
            />
            {dataSeriesKeys.map((key, index) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stackId="1"
                stroke={["#8884d8", "#82ca9d"][index % 2]}
                fill={`url(#gradient${(index % 2) + 1})`}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default registerComponent("Chart", properties, Chart);

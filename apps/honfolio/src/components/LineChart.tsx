"use client";

import { ResponsiveLine } from "@nivo/line";

export function LineChart(props: { className: string }) {
  return (
    <div {...props}>
      <ResponsiveLine
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        axisRight={null}
        axisTop={null}
        colors={["#2563eb", "#e11d48"]}
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        gridYValues={6}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        pointSize={6}
        role="application"
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        useMesh
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
      />
    </div>
  );
}

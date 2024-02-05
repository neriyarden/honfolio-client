"use client";

import { ResponsivePie } from "@nivo/pie";

export function PieChart(props: { className: string }) {
  return (
    <div {...props}>
      <ResponsivePie
        arcLabel={(d) => `${d.id}`}
        arcLabelsRadiusOffset={0.65}
        arcLabelsTextColor="#ffffff"
        borderColor="#ffffff"
        borderWidth={1}
        colors={["#2563eb"]}
        cornerRadius={0}
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        enableArcLinkLabels={false}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        padAngle={0}
        role="application"
        sortByValue
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
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
        }}
      />
    </div>
  );
}

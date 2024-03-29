import "./barChartBox.scss";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

type props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};
function BarChartBox(props: props) {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <ResponsiveContainer width="99%" height={150}>
        <BarChart width={150} height={40} data={props.chartData}>
          <Tooltip
            contentStyle={{ backgroundColor: "#2a3447", borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor= {{display : 'none'}}
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartBox;

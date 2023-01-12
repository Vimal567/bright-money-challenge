import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";


const Chart = ({billData}) => {
    return(
        <div>
            <BarChart
                width={800}
                height={300}
                data={billData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                }}
                barSize={20}
                >
                <XAxis
                    dataKey="date"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="amount" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>
        </div>
    )
}

export default Chart;
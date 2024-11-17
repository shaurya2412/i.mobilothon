import { useState } from "react";
import { motion } from "framer-motion";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	
} from "recharts";

const performanceData = [
	{ time: "Day 1", efficiency: 85, downtime: 2 },
	{ time: "Day 2", efficiency: 90, downtime: 1 },
	{ time: "Day 3", efficiency: 78, downtime: 4 },
	{ time: "Day 4", efficiency: 92, downtime: 0 },
	{ time: "Day 5", efficiency: 88, downtime: 3 },
];


const RevenueChart = () => {
	const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Machine Performance Analysis</h2>

				<select
					className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
					value={selectedTimeRange}
					onChange={(e) => setSelectedTimeRange(e.target.value)}
				>
					<option>This Week</option>
					<option>This Month</option>
					<option>This Quarter</option>
					<option>This Year</option>
				</select>
			</div>

			{/* Bar Chart for Machine Performance (Efficiency and Downtime) */}
			<div style={{ width: "100%", height: 400 }}>
				<ResponsiveContainer>
					<BarChart data={performanceData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='time' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey='efficiency' fill='#8B5CF6' />
						<Bar dataKey='downtime' fill='#FF6347' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default RevenueChart;

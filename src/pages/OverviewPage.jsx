import { BarChart2, ShoppingBag, TimerIcon, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import { FaExclamationTriangle } from "react-icons/fa"; // Import icon for warning symbol


import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
// import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import RevenueChart from "../components/analytics/RevenueChart";

const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='i.mobiliothon 4.0' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
						className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Machine Health' icon={Zap} value='92%' color='#6366F1' />
					<StatCard
			name="Maintenance Alert"
			icon={FaExclamationTriangle}
			value="Bearing replacement needed in 7 days"
			color="rgb(234, 179, 8)" // Use a color similar to the yellow warning icon
		/>					<StatCard name='Total Uptime' icon={TimerIcon} value='5 hours' color='#EC4899' />
					<StatCard name='Total Alerts' icon={BarChart2} value='2' color='#10B981' />
				</motion.div>
				

				{/* CHARTS */}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<RevenueChart />
					<CategoryDistributionChart />
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;

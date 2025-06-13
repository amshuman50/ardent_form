import { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js'
import { Pie, Line } from 'react-chartjs-2'

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title)

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedRestaurant, setSelectedRestaurant] = useState("Demo's Restaurant")

  // Sales data for pie chart
  const salesData = {
    labels: ['Paid Sales', 'Credit Sales', 'Discount', 'Credit Settlements'],
    datasets: [{
      data: [5530, 1900, 0, 0],
      backgroundColor: [
        'rgb(34, 197, 94)', // green-500
        'rgb(234, 179, 8)', // yellow-500
        'rgb(239, 68, 68)', // red-500
        'rgb(59, 130, 246)', // blue-500
      ],
      borderWidth: 1,
    }],
  }

  const pieOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `Rs. ${context.raw}`;
          }
        }
      }
    }
  }

  // Peak time data for line chart
  const peakTimeData = {
    labels: ['10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM'],
    datasets: [{
      label: 'Occupancy %',
      data: [15, 45, 30, 25, 60, 75, 40],
      borderColor: 'rgb(79, 70, 229)', // indigo-600
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      tension: 0.4,
      fill: true,
    }],
  }

  const peakTimeOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleRestaurantChange = (newRestaurant) => {
    setSelectedRestaurant(newRestaurant)
  }

  return (
    <>
      <Sidebar 
        restaurantName={selectedRestaurant}
        onOpenChange={setSidebarOpen}
        onRestaurantChange={handleRestaurantChange}
      />
      <Navbar 
        sidebarOpen={sidebarOpen} 
        restaurantName={selectedRestaurant}
      />
      <div className={`min-h-screen bg-gray-50 p-6 pt-20 transition-all duration-300 ${
        sidebarOpen ? 'ml-[260px]' : 'ml-0'
      }`}>
        <div className="max-w-7xl mx-auto space-y-6"> {/* Adjusted max-width and spacing for more content */}
          {/* Top row: Welcome, Occupancy, Peak Time */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Using grid for layout */}
            {/* Welcome Section */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between md:col-span-1"> {/* Adjusted column span */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome, {user?.name || 'User'}!
                </h1>
                <p className="text-gray-600 text-sm">Fresh morning updates with our app.</p> {/* Added text from image */}
              </div>
              <div className="mt-4">
                <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm"> {/* Added button from image */}
                  End Day
                </button>
                <p className="text-gray-500 text-xs mt-2">Please close the previous day business session.</p> {/* Added text from image */}
              </div>
            </div>

            {/* Current Occupancy */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center md:col-span-1"> {/* Adjusted column span and centering */}
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Current Occupancy</h2>
              <p className="text-4xl font-bold text-indigo-600">20%</p> {/* Placeholder */}
            </div>

            {/* Peak Time */}
            <div className="bg-white rounded-lg shadow p-6 md:col-span-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Peak Time</h2>
              <div className="h-32">
                <Line data={peakTimeData} options={peakTimeOptions} />
              </div>
            </div>
          </div>

          {/* Middle row: Sales Summary, Order Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Using grid for layout */}
            {/* Today's Sales Summary */}
            <div className="bg-white rounded-lg shadow p-6 md:col-span-1 flex flex-col sm:flex-row gap-6"> {/* Adjusted column span and added flex */}
              <div className="sm:w-1/2"> {/* Added width */}
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Today's Sales Summary</h2>
                <p className="text-2xl font-bold text-gray-900 mb-4">Rs. 7,430</p> {/* Placeholder */}
                <p className="text-sm text-gray-600 mb-4">Yesterday's (Rs.0) 100% ↑</p> {/* Placeholder */}
                <div className="space-y-2 text-sm"> {/* Added spacing */}
                  <p><span className="inline-block w-3 h-3 mr-2 rounded-full bg-green-500"></span> Paid Sales Rs. 5,530</p> {/* Placeholder */}
                  <p><span className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-500"></span> Credit Sales Rs. 1,900</p> {/* Placeholder */}
                  <p><span className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></span> Discount Rs. 0</p> {/* Placeholder */}
                  <p><span className="inline-block w-3 h-3 mr-2 rounded-full bg-blue-500"></span> Credit Settlements Rs. 0</p> {/* Placeholder */}
                </div>
              </div>
              <div className="sm:w-1/2 flex items-center justify-center">
                <div className="w-32 h-32">
                  <Pie data={salesData} options={pieOptions} />
                </div>
              </div>
            </div>

            {/* Today's Order Detail */}
            <div className="bg-white rounded-lg shadow p-6 md:col-span-1"> {/* Adjusted column span */}
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Today's Order Detail</h2>
              <div className="flex justify-around text-center mb-4"> {/* Added flex for layout */}
                <div>
                  <p className="text-xl font-bold text-gray-900">0</p> {/* Placeholder */}
                  <p className="text-sm text-gray-600"><span className="inline-block w-2 h-2 mr-1 rounded-full bg-pink-500"></span> Takeaway</p> {/* Placeholder */}
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">0</p> {/* Placeholder */}
                  <p className="text-sm text-gray-600"><span className="inline-block w-2 h-2 mr-1 rounded-full bg-purple-500"></span> Delivery</p> {/* Placeholder */}
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">5</p> {/* Placeholder */}
                  <p className="text-sm text-gray-600"><span className="inline-block w-2 h-2 mr-1 rounded-full bg-indigo-500"></span> Dine In</p> {/* Placeholder */}
                </div>
              </div>
              {/* Placeholder for bar graphs */}
              <div className="space-y-4"> {/* Added spacing */}
                <div className="h-6 bg-pink-500 rounded-md w-1/4"></div> {/* Placeholder bar */}
                {/* <div className="h-6 bg-purple-500 rounded-md w-1/4"></div> */}
                <div className="h-6 bg-indigo-500 rounded-md w-3/4"></div> {/* Placeholder bar */}
              </div>
              <div className="flex justify-around text-center mt-2 text-sm text-gray-600"> {/* Added flex for layout */}
                <p>Rs.0<br />Takeaway</p> {/* Placeholder */}
                <p>Rs.0<br />Delivery</p> {/* Placeholder */}
                <p>Rs.7,430<br />Dine In</p> {/* Placeholder */}
              </div>
            </div>
          </div>

          {/* Bottom row: Outstanding Revenue, Sales by Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Using grid for layout */}
            {/* Outstanding Revenue */}
            <div className="bg-white rounded-lg shadow p-6 md:col-span-1"> {/* Adjusted column span */}
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Outstanding Revenue</h2>
              <p className="text-2xl font-bold text-gray-900">Rs. 1,900</p> {/* Placeholder */}
              {/* Placeholder for details */}
              <div className="flex justify-between mt-4 text-sm"> {/* Added flex for layout */}
                <div>
                  <p className="text-gray-600">DRINKS</p> {/* Placeholder */}
                  <p className="font-semibold">Rs.0</p> {/* Placeholder */}
                </div>
                <div>
                  <p className="text-gray-600">FOOD</p> {/* Placeholder */}
                  <p className="font-semibold">Rs.1,900</p> {/* Placeholder */}
                </div>
                <div>
                  <p className="text-gray-600">SMOKE</p> {/* Placeholder */}
                  <p className="font-semibold">Rs.0</p> {/* Placeholder */}
                </div>
              </div>
            </div>

            {/* Sales by Area */}
            <div className="bg-white rounded-lg shadow p-6 md:col-span-2"> {/* Adjusted column span */}
              <div className="flex justify-between items-center mb-4"> {/* Added flex for layout */}
                <h2 className="text-xl font-semibold text-gray-800">Sales by Area</h2>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">GROUND FLOOR</span> {/* Added tag */}
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">Rs. 7,430</p> {/* Placeholder */}
              <p className="text-sm text-gray-600 mb-4">Yesterday's (Rs. 0) 100% ↑</p> {/* Placeholder */}
              <div className="flex justify-between mt-4 text-sm mb-4"> {/* Added flex for layout */}
                <div>
                  <p className="text-gray-600">DRINKS</p> {/* Placeholder */}
                  <p className="font-semibold">Rs. 480</p> {/* Placeholder */}
                </div>
                <div>
                  <p className="text-gray-600">FOOD</p> {/* Placeholder */}
                  <p className="font-semibold">Rs. 6,500</p> {/* Placeholder */}
                </div>
                <div>
                  <p className="text-gray-600">SMOKE</p> {/* Placeholder */}
                  <p className="font-semibold">Rs. 450</p> {/* Placeholder */}
                </div>
              </div>
              <div className="space-y-2 text-sm"> {/* Added spacing */}
                <p><span className="inline-block w-3 h-3 mr-2 rounded-full bg-blue-500"></span> Paid Sales Rs. 5,530</p> {/* Placeholder */}
                <p><span className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></span> Discount Rs. 0</p> {/* Placeholder */}
                <p><span className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-500"></span> Credit Sales Rs. 0</p> {/* Placeholder */}
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center mt-6">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Load More
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Dashboard
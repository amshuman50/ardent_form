// import { useEffect, useState } from 'react'

// const Dashboard = () => {
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user')
//     if (storedUser) {
//       setUser(JSON.parse(storedUser))
//     }
//   }, [])

//   // Example data for stats, projects, and activity
//   const stats = [
//     { label: 'Projects', value: 3 },
//     { label: 'Tasks', value: 12 },
//     { label: 'Messages', value: 5 },
//     { label: 'Notifications', value: 2 },
//   ]

//   const projects = [
//     { name: 'Task 1', progress: 80 },
//     { name: 'Task 2', progress: 45 },
//     { name: 'Task 3', progress: 60 },
//   ]

//   const activities = [
//     { time: '2 min ago', text: 'Logged in to dashboard' },
//     { time: '1 hour ago', text: 'Updated profile information' },
//     { time: 'Yesterday', text: 'Completed task "Design Navbar"' },
//   ]

//   return (
//     <div className="min-h-screen bg-gray-50 p-6 pt-20">
//       <div className="max-w-5xl mx-auto space-y-8">
//         {/* Welcome Section */}
//         <div className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900 mb-2">
//               Welcome, {user?.name || 'User'}!
//             </h1>
//             <p className="text-gray-600">Here’s an overview of your account and recent activity.</p>
//           </div>
//           <div className="mt-4 sm:mt-0">
//             <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium">
//               {user?.email}
//             </span>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//           {stats.map((stat) => (
//             <div key={stat.label} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
//               <span className="text-2xl font-bold text-indigo-600">{stat.value}</span>
//               <span className="text-gray-500">{stat.label}</span>
//             </div>
//           ))}
//         </div>

//         {/* Projects Section */}
//         <div className="bg-white rounded-lg shadow p-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Projects</h2>
//           <div className="space-y-4">
//             {projects.map((project) => (
//               <div key={project.name}>
//                 <div className="flex justify-between mb-1">
//                   <span className="font-medium text-gray-700">{project.name}</span>
//                   <span className="text-sm text-gray-500">{project.progress}%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div
//                     className="bg-indigo-600 h-2.5 rounded-full"
//                     style={{ width: `${project.progress}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="bg-white rounded-lg shadow p-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
//           <ul className="divide-y divide-gray-200">
//             {activities.map((activity, idx) => (
//               <li key={idx} className="py-2 flex justify-between">
//                 <span className="text-gray-700">{activity.text}</span>
//                 <span className="text-sm text-gray-400">{activity.time}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Quick Actions */}
//         <div className="bg-white rounded-lg shadow p-6 flex flex-wrap gap-4 justify-center">
//           <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
//             New Project
//           </button>
//           <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
//             Edit Profile
//           </button>
//           <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
//             Delete Account
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard

// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

// const Dashboard = () => {
//   const navigate = useNavigate()
//   const user = JSON.parse(localStorage.getItem('user'))

//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn')
//     toast.success('Logged out successfully!',{
//       position: "bottom-right"
//     })
//     navigate('/')
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-lg shadow p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.name}!</h1>
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//             >
//               Logout
//             </button>
//           </div>
//           <div className="space-y-4">
//             <p className="text-gray-600">Email: {user?.email}</p>
//             {/* Add more dashboard content here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard

import { useEffect, useState } from 'react'

const Dashboard = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-20">
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
          <div className="bg-white rounded-lg shadow p-6 md:col-span-1"> {/* Adjusted column span */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Peak Time</h2>
            {/* Placeholder for graph */}
            <div className="h-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              Graph Placeholder
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
            <div className="sm:w-1/2 flex items-center justify-center"> {/* Added width and centering */}
              {/* Placeholder for pie chart */}
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                Pie Chart
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
                <div className="h-6 bg-purple-500 rounded-md w-1/4"></div> {/* Placeholder bar */}
                <div className="h-6 bg-indigo-500 rounded-md w-3/4"></div> {/* Placeholder bar */}
            </div>
            <div className="flex justify-around text-center mt-2 text-sm text-gray-600"> {/* Added flex for layout */}
                <p>Rs.0<br/>Takeaway</p> {/* Placeholder */}
                <p>Rs.0<br/>Delivery</p> {/* Placeholder */}
                <p>Rs.7,430<br/>Dine In</p> {/* Placeholder */}
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

         {/* Load More Button */}
        <div className="flex justify-center mt-6"> {/* Centering the button */}
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Load More
            </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
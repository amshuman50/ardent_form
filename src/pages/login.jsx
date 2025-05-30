import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import InputField from '../ui/components/input_field'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Get stored credentials from localStorage
    const storedUser = localStorage.getItem('user')

    if (storedUser) {
      const user = JSON.parse(storedUser)

      // Check if credentials match
      if (user.email === formData.email && user.password === formData.password) {
        // Set logged in status
        localStorage.setItem('isLoggedIn', 'true')
        toast.success('Login successful!', {
          position: "bottom-right"
        })
        // Redirect to dashboard or home page
        navigate('/dashboard')
      } else {
        toast.error('Invalid email or password!', {
          position: "bottom-right"
        })
      }
    } else {
      toast.error('No registered user found!', {
        position: "bottom-right"
      })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Content */}
      <div
        className="hidden lg:flex lg:w-1/2 items-center justify-center p-12 relative bg-indigo-600"
        style={{
          backgroundImage: 'url(/cinema.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Semi-transparent overlay to improve text readability */}
        {/* <div className="absolute inset-0 bg-indigo-900 bg-opacity-70"></div> */}

        <div className="max-w-lg text-white relative z-10">
          <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
          <p className="text-lg mb-8">
            Access your account to manage your profile, track your progress, and connect with others.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Secure and reliable authentication</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Access your data from anywhere</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>24/7 customer support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                create a new account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  label="Email address"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <InputField
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  showPasswordToggle
                  onTogglePassword={togglePasswordVisibility}
                  showPassword={showPassword}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login 
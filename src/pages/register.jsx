import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import InputField from '../ui/components/input_field'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!', {
        position: "bottom-right"
      })
      return
    }

    // Store user data in localStorage
    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }

    localStorage.setItem('user', JSON.stringify(userData))
    toast.success('Registration successful!', {
      position: "bottom-right"
    })
    navigate('/')
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

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
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
          <h1 className="text-4xl font-bold mb-6">Join Our Community</h1>
          <p className="text-lg mb-8">
            Create an account to get started with our platform and unlock all features.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Create your personalized profile</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Connect with other members</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Access exclusive content</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                sign in to your account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <InputField
                  id="name"
                  name="name"
                  type="text"
                  label="Full name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
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
              <div>
                <InputField
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirm password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  showPasswordToggle
                  onTogglePassword={toggleConfirmPasswordVisibility}
                  showPassword={showConfirmPassword}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}

export default Register 
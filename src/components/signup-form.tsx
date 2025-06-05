"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Crown, Mail, Lock, User, Building, ArrowLeft } from "lucide-react"

export function SignupForm() {
  const [isOrganization, setIsOrganization] = useState(false)
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
    console.log({ email, username, password, isOrganization, acceptTerms })
  }

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in-up">
      {/* Back to home */}
      <Link
        href="/"
        className="inline-flex items-center text-gray-400 hover:text-[#68EDFF] transition-colors duration-300 mb-8 group"
      >
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
        Back to Home
      </Link>

      <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm animate-scale-in">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#68EDFF] to-[#5726BF] flex items-center justify-center animate-pulse-glow">
              <Crown className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-[#68EDFF] via-[#789eff] to-[#5726BF] bg-clip-text text-transparent"
            style={{ 
              backgroundSize: "400% 400%", 
              textShadow: "0 0 15px rgba(104, 237, 255, 0.2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStrokeWidth: "0.1px",
              WebkitTextStrokeColor: "rgba(104, 237, 255, 0.1)",
              animation: "gradient-x 3s ease infinite"
            }}
          >
            Join RoyalVente
          </CardTitle>
          <CardDescription className="text-gray-400">
            Create your account and start building your digital empire
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Account Type Switch */}
          <div
            className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 border border-gray-700 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center space-x-3">
              {isOrganization ? (
                <Building className="h-5 w-5 text-[#68EDFF]" />
              ) : (
                <User className="h-5 w-5 text-[#68EDFF]" />
              )}
              <div>
                <Label className="text-white font-medium">
                  {isOrganization ? "Organization Account" : "Personal Account"}
                </Label>
                <p className="text-sm text-gray-400">
                  {isOrganization ? "For teams and businesses" : "For individual users"}
                </p>
              </div>
            </div>
            <Switch
              checked={isOrganization}
              onCheckedChange={setIsOrganization}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#68EDFF] data-[state=checked]:to-[#5726BF]"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e:any) => setEmail(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#68EDFF] transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Username Field */}
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <Label htmlFor="username" className="text-white">
                {isOrganization ? "Organization Name" : "Username"}
              </Label>
              <div className="relative">
                {isOrganization ? (
                  <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                ) : (
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                )}
                <Input
                  id="username"
                  type="text"
                  placeholder={isOrganization ? "Enter organization name" : "Enter username"}
                  value={username}
                  onChange={(e:any) => setUsername(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#68EDFF] transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e:any) => setPassword(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#68EDFF] transition-all duration-300"
                  required
                />
              </div>
              <p className="text-xs text-gray-400">Password must be at least 8 characters long</p>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-2 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                className="border-gray-600 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#68EDFF] data-[state=checked]:to-[#5726BF] data-[state=checked]:border-transparent"
              />
              <Label htmlFor="terms" className="text-sm text-gray-400">
                I agree to the{" "}
                <Link href="/terms" className="text-[#68EDFF] hover:text-[#5726BF] transition-colors duration-300">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[#68EDFF] hover:text-[#5726BF] transition-colors duration-300">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!acceptTerms}
              className="w-full bg-gradient-to-r from-[#68EDFF] to-[#5726BF] hover:from-[#5726BF] hover:to-[#68EDFF] text-white font-semibold py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#68EDFF]/25 disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in-up"
              style={{ animationDelay: "700ms" }}
            >
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "800ms" }}>
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-900 px-2 text-gray-400">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: "900ms" }}>
            <Button
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800 hover:border-[#68EDFF] transition-all duration-300"
            >
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800 hover:border-[#68EDFF] transition-all duration-300"
            >
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </Button>
          </div>

          {/* Sign In Link */}
          <div className="text-center text-sm text-gray-400 animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#68EDFF] hover:text-[#5726BF] transition-colors duration-300 font-medium"
            >
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

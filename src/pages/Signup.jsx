import { useState } from "react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const [step, setStep] = useState("signin");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sentOtp, setSentOtp] = useState("");

  const API_URL = "http://localhost:2000/api/v1/auth";

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/adminlogin?email=${email}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) throw new Error(data?.message || "Login failed");

      setSentOtp(data.otp);
      setStep("otp");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Debug OTP values
    console.log("Entered OTP:", otp);
    console.log("Stored OTP:", sentOtp);
    console.log("Types:", {
      enteredType: typeof otp,
      storedType: typeof sentOtp,
    });

    try {
      // Convert both to strings and trim for comparison
      const cleanedEnteredOtp = String(otp).trim();
      const cleanedStoredOtp = String(sentOtp).trim();
      if (otp === sentOtp) {
        toast.success("Login successful!");
        console.log("OTP Verified");
      } else {
        toast.error("Login failed!");
        setError(`OTP does not match`);
      }
    } catch (err) {
      console.error("Verification error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className=" min-h-screen flex items-center justify-center px-4 sm:px-6 bg-cover bg-center bg-no-repeat min-w-screen"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/medium-shot-man-playing-basketball_23-2150903117.jpg?ga=GA1.1.482852627.1738911374&semt=ais_authors_boost')",
      }}
    >
      <Toaster />
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative w-full max-w-md bg-black/70 border border-gray-700 shadow-xl rounded-lg backdrop-blur-md p-5 sm:p-8">
        <div className="text-left">
          <h2 className="text-lg sm:text-2xl font-semibold text-white">
            {step === "signin" ? "Sign In to Your Account" : "Enter OTP"}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            {step === "signin"
              ? "Access your account securely."
              : `We sent an OTP to ${email}`}
          </p>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="mt-4">
          {step === "signin" ? (
            <form className="space-y-4" onSubmit={handleSignIn}>
              <div>
                <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1 text-left">
                  Email Address :
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg py-2 px-3 sm:py-2.5 sm:px-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg"
                disabled={loading}
              >
                {loading ? "Processing..." : "Continue"}
              </button>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handleVerifyOtp}>
              <div>
                <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1 text-left">
                  Enter OTP :
                </label>
                <input
                  type="phone"
                  placeholder="Enter 6-digit OTP"
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg py-2 px-3 sm:py-2.5 sm:px-4 tracking-widest text-center"
                  maxLength={6}
                  minLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

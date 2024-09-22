// "use client";
import Navbar from "@/components/base/Navbar";
import HeroSection from "@/components/base/HeroSection";
import FeatureSection from "@/components/base/FeatureSection";
import UserReviews from "@/components/base/UserReviews";
import Footer from "@/components/base/Footer";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
export default async function LandingPage() {
  const session: CustomSession | null = await getServerSession(authOptions);
  console.log("session ", session);

  return (
    // <SessionProvider>
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      {/* <Navbar user={session?.user ?? null} /> */}
      <Navbar
        user={
          session
            ? session.user !== undefined && session.user !== null
              ? session.user
              : null
            : null
        }
      />
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Footer */}
      <Footer />
    </div>
    // </SessionProvider>
  );
}

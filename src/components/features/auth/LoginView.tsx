"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function LoginView() {
  const { login: handleLogin, loading: authLoading, isLoggedIn } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!authLoading) {
      if (isLoggedIn) {
        window.location.href = "/";
      } else {
        handleLogin();
      }
    }
  }, [authLoading, isLoggedIn, handleLogin]);

  return (
    <div className="login-page-wrapper position-relative min-vh-100 overflow-hidden d-flex align-items-center justify-content-center">
      {/* Background Elements */}
      <div className="bg-blur-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
      
      {/* Logo Top Left */}
      <div className="login-logo-container position-absolute top-0 start-0 p-lg-10 p-6">
        <Link href="/">
          <img 
            src="/images/gameforsmartlogo.webp" 
            alt="GameForSmart Logo" 
            className="login-header-logo mb-4"
            style={{ width: "240px", height: "auto" }}
          />
        </Link>
        <div className="login-breadcrumbs">
          <Breadcrumbs />
        </div>
      </div>

      {/* Main Content */}
      <div className="container position-relative z-1">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
            <div className="login-card p-xl-10 p-lg-8 p-6 rounded-5 border border-white border-opacity-10 shadow-2xl text-center">
              <div className="ti ti-loader animate-spin display-three tcp-1 mb-6"></div>
              <h2 className="display-five tcn-1 fw-bold mb-3">
                {isLoggedIn ? "Sudah Masuk" : "Sedang Dialihkan"}
              </h2>
              <p className="tcn-6 fs-five">
                {isLoggedIn 
                  ? "Anda sudah masuk. Mengalihkan ke Beranda..." 
                  : "Mohon tunggu sebentar, kami sedang mengalihkan Anda ke halaman login aman kami."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .login-page-wrapper {
          background-color: #0a0c12;
          color: #fff;
        }
        
        .bg-blur-circles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }
        
        .circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }
        
        .circle-1 {
          width: 400px;
          height: 400px;
          background: var(--bgp-1, #ff8c00);
          top: -100px;
          right: -100px;
        }
        
        .circle-2 {
          width: 300px;
          height: 300px;
          background: #4f46e5;
          bottom: -50px;
          left: -50px;
        }
        
        .login-card {
          background: rgba(22, 25, 32, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .login-header-logo {
          filter: drop-shadow(0 0 8px rgba(0,0,0,0.5));
          transition: transform 0.3s ease;
        }
        .login-header-logo:hover {
          transform: scale(1.05);
        }

        @media (max-width: 991px) {
          .login-header-logo { width: 180px !important; }
          .login-logo-container { padding: 30px !important; }
        }
      `}</style>
    </div>
  );
}

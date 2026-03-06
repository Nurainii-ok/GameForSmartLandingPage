"use client";
import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Footer from "@/components/shared/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan Anda telah terkirim! Terima kasih.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Header />
      <main
        className="main-container container-fluid d-flex align-items-start pt-sm-20 pt-15 pb-20 px-0 position-relative"
        style={{ overflow: "visible" }}
      >
        <Sidebar />
        <article className="main-content mt-lg-10">
          <section className="contact-section pb-120">
            <div className="container-fluid px-lg-15 px-md-10 px-6">
              {/* Breadcrumbs + Title */}
              <div className="mb-10 mb-lg-15">
                <Breadcrumbs />
                <h1
                  className="display-two text-white fw-bold mt-4 text-uppercase"
                  style={{ letterSpacing: "4px" }}
                >
                  Contact Us
                </h1>
              </div>

              {/* Two-Column Layout */}
              <div className="row g-6 align-items-stretch">
                {/* Left: Contact Form */}
                <div className="col-lg-7 col-md-7">
                  <div
                    className="contact-form-card p-lg-10 p-6 rounded-4 h-100"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <h2 className="fs-three text-white fw-bold mb-3">
                      Get In Touch
                    </h2>
                    <p
                      className="tcn-6 fs-base mb-8"
                      style={{ lineHeight: "1.7" }}
                    >
                      Hubungi kami melalui formulir di bawah ini atau melalui
                      saluran resmi kami.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="d-flex flex-column gap-5"
                    >
                      {/* Name */}
                      <div>
                        <label className="tcn-6 fs-sm mb-2 d-block">Name</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          className="w-100 py-3 px-4 rounded-3 tcn-1 fs-base bg-transparent border-0 border-b border-white/15 focus-visible:ring-0 focus-visible:border-orange-500 rounded-none h-12"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="tcn-6 fs-sm mb-2 d-block">
                          Email
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          required
                          className="w-100 py-3 px-4 rounded-3 tcn-1 fs-base bg-transparent border-0 border-b border-white/15 focus-visible:ring-0 focus-visible:border-orange-500 rounded-none h-12"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="tcn-6 fs-sm mb-2 d-block">
                          Subject
                        </label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                          required
                          className="w-100 py-3 px-4 rounded-3 tcn-1 fs-base bg-transparent border-0 border-b border-white/15 focus-visible:ring-0 focus-visible:border-orange-500 rounded-none h-12"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="tcn-6 fs-sm mb-2 d-block">
                          Message
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write your message here..."
                          required
                          rows={5}
                          className="w-100 py-3 px-4 rounded-3 tcn-1 fs-base bg-transparent border-0 border-b border-white/15 focus-visible:ring-0 focus-visible:border-orange-500 rounded-none min-h-[120px] resize-y"
                        />
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        className="btn-half-border position-relative d-inline-flex py-5 px-8 rounded-pill text-nowrap text-dark fw-bold hover-lift transition-all shadow-btn align-self-start border-none hover:opacity-90"
                        style={{
                          background:
                            "linear-gradient(135deg, #ff8c00, #e67e00)",
                          letterSpacing: "1px",
                        }}
                      >
                        Send Now
                      </Button>
                    </form>
                  </div>
                </div>

                {/* Right: Contact Info Cards */}
                <div className="col-lg-5 col-md-5">
                  <div className="d-flex flex-column gap-4 h-100 justify-content-between">
                    {/* Phone Number */}
                    <div
                      className="contact-info-card p-6 rounded-4 text-center hover-lift transition-all"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle"
                        style={{
                          width: "60px",
                          height: "60px",
                          background:
                            "linear-gradient(135deg, #ff8c00, #ff6600)",
                        }}
                      >
                        <i className="ti ti-phone text-white fs-2xl"></i>
                      </div>
                      <h5 className="text-white fw-bold mb-2">Phone Number</h5>
                      <span className="tcn-6 fs-base">+62 812-3456-7890</span>
                    </div>

                    {/* Email Address */}
                    <div
                      className="contact-info-card p-6 rounded-4 text-center hover-lift transition-all"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle"
                        style={{
                          width: "60px",
                          height: "60px",
                          background:
                            "linear-gradient(135deg, #ff8c00, #ff6600)",
                        }}
                      >
                        <i className="ti ti-mail text-white fs-2xl"></i>
                      </div>
                      <h5 className="text-white fw-bold mb-2">Email Address</h5>
                      <span className="tcn-6 fs-base">
                        info@gameforsmart.com
                      </span>
                    </div>

                    {/* Social Media */}
                    <div
                      className="contact-info-card p-6 rounded-4 text-center hover-lift transition-all"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle"
                        style={{
                          width: "60px",
                          height: "60px",
                          background:
                            "linear-gradient(135deg, #ff8c00, #ff6600)",
                        }}
                      >
                        <i className="ti ti-brand-instagram text-white fs-2xl"></i>
                      </div>
                      <h5 className="text-white fw-bold mb-2">Social Media</h5>
                      <span className="tcn-6 fs-base">@gameforsmart</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

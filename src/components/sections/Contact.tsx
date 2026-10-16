import { useState, type FormEvent } from "react";
import { CONTACT_INFO } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Invalid email address";
  }
  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }
  return errors;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-elevated/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          subtitle="Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours."
        />

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
          {/* Contact info cards */}
          <div className="space-y-4">
            {[
              {
                label: "Email",
                value: CONTACT_INFO.email,
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
              },
              {
                label: "Phone",
                value: CONTACT_INFO.phone,
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
              },
              {
                label: "Location",
                value: CONTACT_INFO.location,
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-lg border border-border bg-surface-elevated p-4 hover:border-electric/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-muted font-mono">{item.label}</p>
                  <p className="text-sm text-text-primary font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-lg bg-surface-elevated border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-colors ${
                    errors.name ? "border-red-500" : "border-border"
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-lg bg-surface-elevated border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-colors ${
                    errors.email ? "border-red-500" : "border-border"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg bg-surface-elevated border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-colors resize-none ${
                  errors.message ? "border-red-500" : "border-border"
                }`}
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-electric text-white font-semibold text-sm hover:bg-electric-dim transition-colors shadow-lg shadow-electric/20"
            >
              Send message
            </button>

            {/* Submission feedback */}
            {submitted && (
              <div className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3">
                <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-green-400">
                  Message sent successfully! I'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

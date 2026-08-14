"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  channelUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  message: z.string().min(20, "Please tell us a bit more (at least 20 characters)"),
});

type FormData = z.infer<typeof schema>;

const services = [
  "YouTube Automation (Full Package)",
  "Video Editing",
  "Thumbnail Design",
  "Script Writing",
  "Channel Management",
  "Not sure, need advice",
];

const budgets = [
  "Under $500/month",
  "$500 to $1,000/month",
  "$1,000 to $2,000/month",
  "$2,000 to $4,000/month",
  "$4,000+/month",
  "One time project",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please email us directly at info@runtimegurus.com");
    }
  };

  if (submitted) {
    return (
      <div className="p-10 rounded-2xl bg-[#0B1230] border border-green-600/30 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-green-600/15 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
        <p className="text-[#94A3B8] max-w-sm leading-relaxed">
          Message sent successfully. We will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 rounded-2xl bg-[#0B1230] border border-[#1A2548] space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name *" error={errors.name?.message}>
          <input {...register("name")} placeholder="Your name" className={inputCls(!!errors.name)} />
        </Field>
        <Field label="Email Address *" error={errors.email?.message}>
          <input {...register("email")} type="email" placeholder="you@example.com" className={inputCls(!!errors.email)} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Company / Brand" error={errors.company?.message}>
          <input {...register("company")} placeholder="Optional" className={inputCls(false)} />
        </Field>
        <Field label="YouTube Channel URL" error={errors.channelUrl?.message}>
          <input {...register("channelUrl")} placeholder="https://youtube.com/..." className={inputCls(!!errors.channelUrl)} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Service Interested In *" error={errors.service?.message}>
          <select {...register("service")} className={inputCls(!!errors.service)}>
            <option value="">Select a service...</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
        <Field label="Monthly Budget *" error={errors.budget?.message}>
          <select {...register("budget")} className={inputCls(!!errors.budget)}>
            <option value="">Select budget range...</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Tell Us About Your Goals *" error={errors.message?.message}>
        <textarea {...register("message")} rows={5}
          placeholder="Describe your channel goals, current situation, or any specific questions you have..."
          className={cn(inputCls(!!errors.message), "resize-none")} />
      </Field>

      {serverError && (
        <p className="text-red-400 text-sm bg-red-600/10 border border-red-600/20 px-4 py-3 rounded-xl">{serverError}</p>
      )}

      <button type="submit" disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed glow-purple-sm hover:scale-[1.02] active:scale-[0.98]">
        {isSubmitting ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-5 h-5" /> Send Message</>
        )}
      </button>

      <p className="text-center text-xs text-[#64748B]">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a>.
        We never share your data.
      </p>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#94A3B8]">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full px-4 py-3 rounded-xl bg-[#06091C] border text-white text-sm placeholder-[#3A3A5A] focus:outline-none focus:ring-2 focus:ring-blue-700/50 transition-all duration-200",
    hasError ? "border-red-600/50" : "border-[#1A2548] hover:border-[#243268] focus:border-blue-700/50"
  );
}

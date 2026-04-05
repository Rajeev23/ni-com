"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"

import {
  initialLeadState,
  submitContactRequest,
  submitDemoRequest,
  submitSignupRequest,
  submitTcoReport,
} from "@/app/actions"

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground disabled:opacity-60"
      disabled={pending}
    >
      {pending ? "Submitting..." : label}
    </button>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string
  name: string
  type?: string
  placeholder: string
  required?: boolean
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium">{label}</span>
      <input
        className="h-10 rounded-lg border bg-background px-3 text-sm"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </label>
  )
}

function Message({ message, ok }: { message: string; ok: boolean }) {
  if (!message) {
    return null
  }

  return (
    <p
      className={`text-sm ${ok ? "text-emerald-600 dark:text-emerald-500" : "text-destructive"}`}
    >
      {message}
    </p>
  )
}

export function DemoForm() {
  const [state, formAction] = useActionState(
    submitDemoRequest,
    initialLeadState
  )

  return (
    <form
      action={formAction}
      className="grid gap-4 rounded-xl border bg-card p-6"
    >
      <Field label="Full name" name="fullName" placeholder="Jane Doe" />
      <Field
        label="Work email"
        name="email"
        type="email"
        placeholder="jane@company.com"
      />
      <Field label="Company" name="company" placeholder="Acme Corp" />
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium">Use case</span>
        <select
          name="useCase"
          className="h-10 rounded-lg border bg-background px-3 text-sm"
          required
        >
          <option value="">Select one</option>
          <option value="remote-work">Remote & Hybrid Work</option>
          <option value="contractor-access">Contractor Access</option>
          <option value="secure-byod">Secure BYOD</option>
          <option value="developer-workspaces">Developer Workspaces</option>
          <option value="legacy-vdi-migration">Legacy VDI Migration</option>
          <option value="business-continuity">Business Continuity</option>
          <option value="privileged-access">Privileged User Access</option>
          <option value="call-center">Call Center / BPO</option>
          <option value="data-residency">Data Residency</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium">Company size</span>
        <select
          name="companySize"
          className="h-10 rounded-lg border bg-background px-3 text-sm"
        >
          <option value="">Select one</option>
          <option value="1-50">1-50</option>
          <option value="51-200">51-200</option>
          <option value="201-1000">201-1000</option>
          <option value="1001-5000">1001-5000</option>
          <option value="5000+">5000+</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium">Current stack (optional)</span>
        <textarea
          name="currentStack"
          className="min-h-24 rounded-lg border bg-background px-3 py-2 text-sm"
          placeholder="e.g., Citrix, AVD, Island, VMware Horizon, Windows 365"
        />
      </label>
      <Message message={state.message} ok={state.ok} />
      <SubmitButton label="Request Demo" />
    </form>
  )
}

export function SignupForm() {
  const [state, formAction] = useActionState(
    submitSignupRequest,
    initialLeadState
  )

  return (
    <form
      action={formAction}
      className="grid gap-4 rounded-xl border bg-card p-6"
    >
      <Field label="Full name" name="fullName" placeholder="Jane Doe" />
      <Field
        label="Work email"
        name="email"
        type="email"
        placeholder="jane@company.com"
      />
      <Field label="Company" name="company" placeholder="Acme Corp" />
      <Field label="Team size" name="teamSize" type="number" placeholder="50" />
      <Message message={state.message} ok={state.ok} />
      <SubmitButton label="Start Free Trial" />
    </form>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(
    submitContactRequest,
    initialLeadState
  )

  return (
    <form
      action={formAction}
      className="grid gap-4 rounded-xl border bg-card p-6"
    >
      <Field label="Full name" name="fullName" placeholder="Jane Doe" />
      <Field
        label="Work email"
        name="email"
        type="email"
        placeholder="jane@company.com"
      />
      <Field label="Company" name="company" placeholder="Acme Corp" />
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium">Message</span>
        <textarea
          name="message"
          className="min-h-32 rounded-lg border bg-background px-3 py-2 text-sm"
          placeholder="Tell us how we can help."
          required
        />
      </label>
      <Message message={state.message} ok={state.ok} />
      <SubmitButton label="Send Message" />
    </form>
  )
}

export function TcoReportForm() {
  const [state, formAction] = useActionState(submitTcoReport, initialLeadState)

  return (
    <form
      action={formAction}
      className="grid gap-4 rounded-xl border bg-card p-6"
    >
      <Field
        label="Work email"
        name="email"
        type="email"
        placeholder="jane@company.com"
      />
      <Field label="Company" name="company" placeholder="Acme Corp" />
      <Message message={state.message} ok={state.ok} />
      <SubmitButton label="Get Full Report" />
    </form>
  )
}

"use server"

type LeadState = {
  ok: boolean
  message: string
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function normalizeField(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim()
}

async function validateCommonLeadFields(formData: FormData) {
  const fullName = normalizeField(formData, "fullName")
  const email = normalizeField(formData, "email")
  const company = normalizeField(formData, "company")

  if (fullName.length < 2) {
    return {
      ok: false,
      message: "Please provide your full name.",
    } satisfies LeadState
  }

  if (!isValidEmail(email)) {
    return {
      ok: false,
      message: "Please provide a valid work email.",
    } satisfies LeadState
  }

  if (company.length < 2) {
    return {
      ok: false,
      message: "Please provide your company name.",
    } satisfies LeadState
  }

  return {
    ok: true,
    message: "Valid lead data.",
  } satisfies LeadState
}

export async function submitDemoRequest(
  _: LeadState,
  formData: FormData
): Promise<LeadState> {
  const valid = await validateCommonLeadFields(formData)
  if (!valid.ok) {
    return valid
  }

  const useCase = normalizeField(formData, "useCase")
  if (useCase.length < 2) {
    return {
      ok: false,
      message: "Please select a use case for the demo.",
    }
  }

  return {
    ok: true,
    message: "Demo request submitted. Our team will contact you shortly.",
  }
}

export async function submitSignupRequest(
  _: LeadState,
  formData: FormData
): Promise<LeadState> {
  const valid = await validateCommonLeadFields(formData)
  if (!valid.ok) {
    return valid
  }

  const teamSize = Number.parseInt(normalizeField(formData, "teamSize"), 10)
  if (!Number.isFinite(teamSize) || teamSize < 1) {
    return {
      ok: false,
      message: "Please provide a valid team size.",
    }
  }

  return {
    ok: true,
    message: "Trial request submitted. Check your email for next steps.",
  }
}

export async function submitContactRequest(
  _: LeadState,
  formData: FormData
): Promise<LeadState> {
  const valid = await validateCommonLeadFields(formData)
  if (!valid.ok) {
    return valid
  }

  const message = normalizeField(formData, "message")
  if (message.length < 20) {
    return {
      ok: false,
      message: "Please add more detail so we can route your request correctly.",
    }
  }

  return {
    ok: true,
    message: "Thanks for contacting us. We will get back to you soon.",
  }
}

export async function submitTcoReport(
  _: LeadState,
  formData: FormData
): Promise<LeadState> {
  const email = normalizeField(formData, "email")
  const company = normalizeField(formData, "company")
  if (!isValidEmail(email) || company.length < 2) {
    return {
      ok: false,
      message: "Please provide a valid email and company name.",
    }
  }

  return {
    ok: true,
    message:
      "Report request submitted. We sent a full model summary to your inbox.",
  }
}

export const initialLeadState: LeadState = {
  ok: false,
  message: "",
}

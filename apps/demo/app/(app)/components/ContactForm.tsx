"use client";

import { useState } from "react";
import { Occasion } from "@automotive/core";

interface ContactFormProps {
    occasion: Occasion;
    formattedPrice: string;
}

type FormState = "idle" | "open" | "submitting" | "success" | "error";

export function ContactForm({ occasion, formattedPrice }: ContactFormProps) {
    const [state, setState] = useState<FormState>("idle");
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: `Ik heb interesse in de ${occasion.make} ${occasion.model} (${occasion.year}) voor ${formattedPrice}. Kunt u mij meer informatie geven?`,
    });

    const updateField = (field: keyof typeof form, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        if (!form.name || !form.email || !form.message) return;
        setState("submitting");

        // Simulate API call, replace with real email service in production
        try {
            await new Promise((resolve) => setTimeout(resolve, 1200));
            setState("success");
        } catch (error) {
            console.error("Form submission error:", error);
            setState("error");
        }
    };

    const inputStyle = {
        width: "100%",
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "8px",
        padding: "10px 14px",
        color: "var(--color-text)",
        fontSize: "0.9rem",
        outline: "none",
        boxSizing: "border-box" as const,
        fontFamily: "inherit",
    };
    const labelStyle = {
        display: "block" as const,
        color: "var(--color-muted)",
        fontSize: "0.75rem",
        textTransform: "uppercase" as const,
        letterSpacing: "0.05em",
        marginBottom: "6px",
    };
    if (state === "success") {
        return (
            <div
                style={{
                    background: "var(--color-accent-dim)",
                    border: "1px solid var(--color-accent)",
                    borderRadius: "8px",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <p style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "4px" }}>Message sent!</p>
                <p style={{ color: "var(--color-muted)", fontSize: "0.85rem" }}>The dealer will contact you shortly.</p>
            </div>
        );
    }

    if (state === "idle") {
        return (
            <button
                onClick={() => setState("open")}
                style={{
                    width: "100%",
                    background: "var(--color-accent)",
                    border: "none",
                    borderRadius: "8px",
                    padding: "14px",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    letterSpacing: "0.05em",
                }}
            >
                CONTACT DEALER
            </button>
        );
    }
    {
        state === "error" && <p style={{ color: "#ef4444", fontSize: "0.85rem", textAlign: "center" }}>Something went wrong. Please try again.</p>;
    }

    return (
        <div
            style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <h3 style={{ color: "var(--color-text)", fontWeight: 700, fontSize: "0.95rem" }}>Contact Dealer</h3>
                <button
                    onClick={() => setState("idle")}
                    style={{ background: "none", border: "none", color: "var(--color-muted)", cursor: "pointer", fontSize: "1.2rem", lineHeight: 1 }}
                >
                    ×
                </button>
            </div>

            {/* Name */}
            <div>
                <label style={labelStyle}>Name *</label>
                <input
                    type="text"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Your full name"
                    style={inputStyle}
                />
            </div>

            {/* Email */}
            <div>
                <label style={labelStyle}>Email *</label>
                <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="your@email.com"
                    style={inputStyle}
                />
            </div>

            {/* Phone */}
            <div>
                <label style={labelStyle}>Phone (optional)</label>
                <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+31 6 12345678"
                    style={inputStyle}
                />
            </div>

            {/* Message */}
            <div>
                <label style={labelStyle}>Message *</label>
                <textarea
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                />
            </div>

            {/* Submit */}
            <button
                onClick={handleSubmit}
                disabled={state === "submitting" || !form.name || !form.email || !form.message}
                style={{
                    background: "var(--color-accent)",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    cursor: state === "submitting" || !form.name || !form.email ? "not-allowed" : "pointer",
                    opacity: !form.name || !form.email || !form.message ? 0.5 : 1,
                    letterSpacing: "0.05em",
                }}
            >
                {state === "submitting" ? "Sending..." : "SEND MESSAGE"}
            </button>

            <p style={{ color: "var(--color-muted)", fontSize: "0.75rem", textAlign: "center" }}>* Required fields</p>
        </div>
    );
}

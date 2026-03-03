"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useVehicleComparison } from "@automotive/react";

export function Nav() {
    const pathname = usePathname();
    const { selectedVehicles } = useVehicleComparison();

    const links = [
        { href: "/", label: "Catalogue" },
        {
            href: "/compare",
            label: "Compare",
            count: selectedVehicles.length,
        },
    ];

    return (
        <nav
            aria-label="Main navigation"
            style={{
                borderBottom: "1px solid var(--color-border)",
                backgroundColor: "var(--color-carbon)",
                position: "sticky",
                top: 0,
                zIndex: 50,
                backdropFilter: "blur(12px)",
            }}
        >
            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "0 24px",
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Wordmark */}
                <Link href="/" style={{ textDecoration: "none" }}>
                    <span
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "22px",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            color: "var(--color-text)",
                        }}
                    >
                        AUTO
                        <span style={{ color: "var(--color-accent)" }}>
                            FRAME
                        </span>
                    </span>
                </Link>

                {/* Links */}
                <ul
                    style={{
                        display: "flex",
                        gap: "32px",
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        alignItems: "center",
                    }}
                >
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    aria-current={isActive ? "page" : undefined}
                                    style={{
                                        textDecoration: "none",
                                        fontSize: "13px",
                                        fontWeight: 500,
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase",
                                        color: isActive
                                            ? "var(--color-accent)"
                                            : "var(--color-muted)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        transition: "color 0.2s",
                                    }}
                                >
                                    {link.label}
                                    {link.count && link.count > 0 ? (
                                        <span
                                            style={{
                                                backgroundColor:
                                                    "var(--color-accent)",
                                                color: "var(--color-carbon)",
                                                fontSize: "11px",
                                                fontWeight: 700,
                                                width: "18px",
                                                height: "18px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {link.count}
                                        </span>
                                    ) : null}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

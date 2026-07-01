"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface BreadcrumbProps {
    homeLabel?: string;
}

export default function Breadcrumbs({ homeLabel = "Home" }: BreadcrumbProps) {
    const pathname = usePathname();

    // Split path into individual nested segments, filtering out empty strings
    const pathSegments = pathname.split("/").filter((segment) => segment);

    return (
        <nav aria-label="Breadcrumb" className="my-4 px-7">
            <ol className="flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {/* Root Link */}
                <li className="flex items-center">
                    <Link
                        href="/"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        {homeLabel}
                    </Link>
                </li>

                {/* Dynamic Nested Links */}
                {pathSegments.map((segment, index) => {
                    // Construct the cumulative href for the current segment hierarchy
                    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathSegments.length - 1;

                    // Replace hyphens/underscores with spaces and capitalize words for readability
                    const label = segment
                        .replace(/[-_]/g, " ")
                        .replace(/\b\w/g, (char) => char.toUpperCase());

                    return (
                        <li key={href} className="flex items-center">
                            {/* Separator / Slash */}
                            <span className="mx-2 text-gray-400 dark:text-gray-600" aria-hidden="true">
                                /
                            </span>

                            {isLast ? (
                                // Current Active Page (not clickable)
                                <span
                                    className="font-semibold text-gray-900 dark:text-gray-100"
                                    aria-current="page"
                                >
                                    {label}
                                </span>
                            ) : (
                                // Parent Link
                                <Link
                                    href={href}
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

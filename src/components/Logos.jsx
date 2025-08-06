// src/components/InfiniteLogos.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for class merging

// Array of logos for the scroll
const logos = [
    { name: "Airtable", src: "/logos/airtable.svg" },
    { name: "Asana", src: "/logos/asana.svg" },
    { name: "Trello", src: "/logos/trello.svg" },
    { name: "Gmail", src: "/logos/gmail.svg" },
    { name: "HubSpot", src: "/logos/hubspot.svg" },
    { name: "n8n", src: "/logos/n8n.svg" },
    { name: "Notion", src: "/logos/notion.svg" },
    { name: "Supabase", src: "/logos/supabase.svg" },
    { name: "OpenAI", src: "/logos/openai.svg" },
    { name: "Monday", src: "/logos/monday.svg" },
    { name: "Slack", src: "/logos/slack.svg" },
    { name: "Facebook", src: "/logos/facebook.svg" },
];

export function Logos() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-full overflow-hidden py-12 bg-transparent pointer-events-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={cn(
                    "flex items-center gap-[67px] animate-scroll will-change-transform",
                    isHovered && "animation-paused"
                )}
            >
                {/* Duplicate the logo list to create a seamless loop */}
                {[...logos, ...logos].map((logo, index) => (
                    <div key={index} className="flex-shrink-0">
                        <Image
                            src={logo.src}
                            alt={`${logo.name} Logo`}
                            width={100}
                            height={50}
                            className="h-12 w-auto transition-all duration-300 drop-shadow-lg hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

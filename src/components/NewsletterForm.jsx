// src/components/NewsletterForm.jsx
"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                toast.success(
                    "You have successfully subscribed to our newsletter!"
                );
                setEmail("");
            } else {
                toast.error("Failed to subscribe. Please try again.");
            }
        } catch (error) {
            console.error("Subscription error:", error);
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                    Subscribe
                </button>
            </div>
        </form>
    );
}

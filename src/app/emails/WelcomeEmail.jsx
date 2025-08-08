import * as React from "react";

const WelcomeEmail = ({ subscriberEmail }) => {
    const mainStyle = {
        fontFamily: "sans-serif, Arial, Helvetica, sans-serif",
        backgroundColor: "#f8fafc",
        padding: "40px 20px",
        color: "#333",
    };

    const containerStyle = {
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        overflow: "hidden",
        padding: "30px",
        textAlign: "center",
    };

    const headingStyle = {
        fontSize: "28px",
        fontWeight: "bold",
        color: "#1a202c", // Set to a dark color for visibility
        margin: "0 0 10px 0",
    };

    const paragraphStyle = {
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#4b5563",
        marginBottom: "20px",
    };

    const buttonStyle = {
        display: "inline-block",
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: "600",
        color: "#ffffff",
        borderRadius: "8px",
        textDecoration: "none",
        background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
    };

    const footerStyle = {
        marginTop: "20px",
        fontSize: "12px",
        color: "#9ca3af",
    };

    const logoImageStyle = {
        maxWidth: "180px", // Adjust size as needed
        height: "auto",
        marginBottom: "20px",
    };

    return (
        <div style={mainStyle}>
            <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                role="presentation"
            >
                <tr>
                    <td align="center">
                        <div style={containerStyle}>
                            {/* Insert the logo image here */}
                            <img
                                src="https://res.cloudinary.com/dijjudk6z/image/upload/v1754611763/Logo_and_Name_no_background_rhhfwg.png"
                                alt="SmartNode Solutions Logo"
                                style={logoImageStyle}
                            />

                            <h2 style={headingStyle}>
                                Welcome to the <br />
                                <span>SmartNode Family!</span>
                            </h2>

                            <p style={paragraphStyle}>
                                Thank you for subscribing to our newsletter.
                                We're excited to share our latest insights and
                                stories on AI automation to help you streamline
                                your workflow.
                            </p>
                            <a
                                href="https://www.smartnode.solutions/blog"
                                style={buttonStyle}
                            >
                                Read Our Latest Posts
                            </a>
                            <p style={{ ...paragraphStyle, marginTop: "20px" }}>
                                If you have any questions, feel free to reply to
                                this email!
                            </p>
                        </div>
                        <p style={footerStyle}>
                            This email was sent to {subscriberEmail}.
                        </p>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default WelcomeEmail;

import * as React from "react";

// The component now accepts a 'lang' prop to determine the language.
const WelcomeEmail = ({ subscriberEmail, lang = "en" }) => {
    // 1. Translations now include the subject line.
    const translations = {
        en: {
            subject: "Welcome to SmartNode Solutions!",
            heading: "Get Ready for Smarter Workflows",
            paragraph1:
                "Thank you for subscribing to our newsletter. We're excited to share our latest insights and stories on AI automation to help you streamline your workflow.",
            button: "Read Our Latest Posts",
            paragraph2:
                "If you have any questions, feel free to reply to this email!",
            footer: `This email was sent to ${subscriberEmail}.`,
        },
        es: {
            subject: "¡Bienvenido/a a SmartNode Solutions!",
            heading: "Prepárate para flujos de trabajo más inteligentes",
            paragraph1:
                "Gracias por suscribirte a nuestro boletín. Estamos emocionados de compartir nuestras últimas ideas e historias sobre automatización con IA para ayudarte a optimizar tu flujo de trabajo.",
            button: "Lee Nuestras Últimas Publicaciones",
            paragraph2:
                "Si tienes alguna pregunta, ¡no dudes en responder a este correo!",
            footer: `Este correo fue enviado a ${subscriberEmail}.`,
        },
    };

    // 2. Select the correct text based on the 'lang' prop.
    const t = translations[lang] || translations.en;

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
        color: "#1a202c",
        margin: "0 0 10px 0",
        lineHeight: "1.3",
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
        backgroundColor: "#6d28d9",
        background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
    };

    const footerStyle = {
        marginTop: "20px",
        fontSize: "12px",
        color: "#9ca3af",
    };

    const logoImageStyle = {
        maxWidth: "180px",
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
                {/* **FIX:** Added the required <tbody> tag */}
                <tbody>
                    <tr>
                        <td align="center">
                            <div style={containerStyle}>
                                <img
                                    src="https://res.cloudinary.com/dijjudk6z/image/upload/v1754611763/Logo_and_Name_no_background_rhhfwg.png"
                                    alt="SmartNode Solutions Logo"
                                    style={logoImageStyle}
                                />

                                <h2 style={headingStyle}>{t.heading}</h2>

                                <p style={paragraphStyle}>{t.paragraph1}</p>
                                <a
                                    href={`https://www.smartnode.solutions/${lang}/blog`}
                                    style={buttonStyle}
                                >
                                    {t.button}
                                </a>
                                <p
                                    style={{
                                        ...paragraphStyle,
                                        marginTop: "20px",
                                    }}
                                >
                                    {t.paragraph2}
                                </p>
                            </div>
                            <p style={footerStyle}>{t.footer}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

// Add the translations as a static property to the component so it can be accessed on the server.
WelcomeEmail.translations = {
    en: { subject: "Welcome to SmartNode Solutions!" },
    es: { subject: "¡Bienvenido/a a SmartNode Solutions!" },
};

export default WelcomeEmail;

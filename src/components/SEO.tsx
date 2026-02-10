import { Helmet } from "react-helmet";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalUrl?: string;
}

const SEO = ({
    title = "The Genworks | Custom SaaS, AI Automation & CRM Systems",
    description = "The Genworks builds scalable SaaS platforms, AI automation systems, CRM software, and API-powered digital infrastructure for startups and enterprises.",
    keywords = "Custom SaaS development, AI automation, CRM software, API integration, FinTech development, intelligent business systems, WhatsApp automation, backend architecture",
    canonicalUrl = "https://thegenworks.com/"
}: SEOProps) => {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://thegenworks.com/#organization",
                "name": "The Genworks",
                "url": "https://thegenworks.com/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://thegenworks.com/og-image.png"
                },
                "description": description,
                "sameAs": [
                    "https://www.linkedin.com/company/thegenworks",
                    "https://twitter.com/thegenworks"
                ]
            },
            {
                "@type": "Service",
                "name": "CRM & Lead Management Systems",
                "provider": { "@id": "https://thegenworks.com/#organization" },
                "description": "Enterprise-grade CRM systems with intelligent lead capture, automated follow-ups, and real-time dashboards."
            },
            {
                "@type": "Service",
                "name": "API Integrations & Backend Systems",
                "provider": { "@id": "https://thegenworks.com/#organization" },
                "description": "Secure, scalable backend architectures powered by REST APIs and modern frameworks connecting your digital ecosystem."
            },
            {
                "@type": "Service",
                "name": "WhatsApp & Instagram Automation",
                "provider": { "@id": "https://thegenworks.com/#organization" },
                "description": "AI-powered automation with intelligent chat workflows, lead qualification bots, and CRM synchronization."
            },
            {
                "@type": "Service",
                "name": "FinTech & Business Web Apps",
                "provider": { "@id": "https://thegenworks.com/#organization" },
                "description": "Secure financial dashboards, payment processing systems, and custom business web applications built for scale and compliance."
            }
        ]
    };

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />

            {/* Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;

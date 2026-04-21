import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const cases = [
  {
    id: 1,
    label: "ENTERPRISE UX",
    heading: "Building in\nReal Time",
    body: "Modernize Overtur—a cloud-based application enabling teams to collaborate on door security and openings specification—while preserving the workflows users had come to rely on. The growing popularity demanded an interface that matched the platform's innovative capabilities.",
    metrics: [
      { icon: "↓", text: "TIME TO COMPLETE TASKS" },
      { icon: "↑", text: "SCREEN REAL ESTATE FOR WORK" },
    ],
    cta: "VIEW CASE STUDY",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=90",
    imgSrcMobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=90",
    chromeBg: "#ede8df",
    accent: "#c8913a",
  },
  {
    id: 2,
    label: "PRODUCT DESIGN, LOYALTY, WORKSHOPS, BADGES",
    heading: "Turning In-Store Badges Into a Digital\nEngagement Layer",
    body: "Transform a beloved in-store tradition into a scalable digital engagement platform — giving every participant a personal profile, every badge a digital home, and every family a reason to keep coming back.",
    metrics: [
      { icon: "Rapid", text: "FIRST-WEEK ADOPTION" },
      { icon: "High", text: "REGISTRATION RATE" },
    ],
    cta: "VIEW CASE STUDY",
    imgSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=90",
    imgSrcMobile: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=90",
    chromeBg: "#daeaf7",
    accent: "#3a86c8",
  },
  {
    id: 3,
    label: "DESIGN SYSTEM · SCALABILITY · TOKENS",
    heading: "A Design Language\nfor the Next Decade",
    body: "Built a unified design system adopted across 14 product teams — replacing fragmented patterns with a living, versioned component library that ships faster and breaks less often.",
    metrics: [
      { icon: "14×", text: "TEAMS ONBOARDED" },
      { icon: "60%", text: "FASTER COMPONENT DELIVERY" },
    ],
    cta: "VIEW CASE STUDY",
    imgSrc: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&q=90",
    imgSrcMobile: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=700&q=90",
    chromeBg: "#eae8f8",
    accent: "#7b63d6",
  },
  {
    id: 4,
    label: "DATA VISUALISATION · ANALYTICS · OPS",
    heading: "Making Complex\nData Legible",
    body: "Redesigned a real-time operations dashboard for a logistics network processing 4M+ daily events — turning noise into clarity for operators managing critical infrastructure at scale.",
    metrics: [
      { icon: "4M+", text: "DAILY EVENTS SURFACED" },
      { icon: "3×", text: "FASTER INCIDENT RESPONSE" },
    ],
    cta: "VIEW CASE STUDY",
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=90",
    imgSrcMobile: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=90",
    chromeBg: "#d8f0e8",
    accent: "#26a66e",
  },
  {
    id: 5,
    label: "MOBILE · CONSUMER PRODUCT · FINTECH",
    heading: "Rethinking How\nPeople Bank",
    body: "Led end-to-end product design for a mobile-first banking experience — from onboarding to daily money management — reducing drop-off by half and earning a top fintech UX award.",
    metrics: [
      { icon: "↓50%", text: "ONBOARDING DROP-OFF" },
      { icon: "#1", text: "FINTECH UX AWARD" },
    ],
    cta: "VIEW CASE STUDY",
    imgSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&q=90",
    imgSrcMobile: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=90",
    chromeBg: "#f7dedd",
    accent: "#d64e3e",
  },
];

const E = [0.22, 1, 0.36, 1];

/* ─────────────────────────────────────────────
   BROWSER CHROME (right side mockup)
───────────────────────────────────────────── */
function BrowserChrome({ imgSrc, chromeBg, accent, scrollYProgress }) {
  const rawY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const y = useSpring(rawY, { stiffness: 40, damping: 26, mass: 0.9 });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 16,
        overflow: "hidden",
        background: chromeBg,
        boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
        position: "relative",
        minHeight: 340,
      }}
    >
      {/* chrome titlebar */}
      <div
        style={{
          height: 38,
          background: "rgba(255,255,255,0.88)",
          borderBottom: "1px solid rgba(0,0,0,0.09)",
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          gap: 7,
          backdropFilter: "blur(6px)",
          position: "relative",
          zIndex: 3,
        }}
      >
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "block" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e", display: "block" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "block" }} />
        <div
          style={{
            flex: 1,
            marginLeft: 10,
            height: 22,
            background: "rgba(0,0,0,0.07)",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            fontSize: 11,
            color: "rgba(0,0,0,0.38)",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          ● app.product.io
        </div>
      </div>

      {/* parallax screenshot */}
      <motion.div
        style={{
          y,
          position: "absolute",
          inset: 0,
          top: 38,
          zIndex: 1,
        }}
      >
        <img
          src={imgSrc}
          alt="Product UI"
          style={{ width: "100%", height: "115%", objectFit: "cover", objectPosition: "top", display: "block" }}
          loading="lazy"
        />
      </motion.div>

      {/* bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 90,
          background: `linear-gradient(to top, ${chromeBg} 0%, transparent 100%)`,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* accent dot (like reference) */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          right: 12,
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "#e8c84a",
          zIndex: 4,
          boxShadow: "0 0 8px rgba(232,200,74,0.5)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   PHONE MOCKUP (layered in front of browser)
───────────────────────────────────────────── */
function PhoneMockup({ imgSrc, scrollYProgress }) {
  const rawY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const y = useSpring(rawY, { stiffness: 32, damping: 22, mass: 1.1 });

  return (
    <motion.div
      style={{
        y,
        position: "absolute",
        bottom: -20,
        left: -18,
        zIndex: 10,
        width: 130,
        height: 252,
        borderRadius: 28,
        overflow: "hidden",
        background: "#0e0e0e",
        boxShadow: "0 28px 72px rgba(0,0,0,0.65), 0 0 0 1.5px rgba(255,255,255,0.12)",
      }}
    >
      {/* notch */}
      <div
        style={{
          position: "absolute",
          top: 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 44,
          height: 13,
          background: "#000",
          borderRadius: 7,
          zIndex: 5,
        }}
      />
      <img
        src={imgSrc}
        alt="Mobile UI"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        loading="lazy"
      />
      {/* screen glare */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   CASE STUDY CARD
───────────────────────────────────────────── */
function CaseStudyCard({ item }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const stagger = (d) => ({
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: E, delay: d },
    },
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.009,
        transition: { duration: 0.55, ease: E },
      }}
      style={{
        position: "relative",
        width: "100%",
        borderRadius: 24,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.07)",
        background: "linear-gradient(140deg, #171717 0%, #0f0f0f 55%, #0b0b0b 100%)",
        cursor: "default",
      }}
    >
      {/* Radial inner glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 60% at 25% 50%, rgba(255,255,255,0.022) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: 440,
        }}
      >
        {/* ── TEXT SIDE ───────────────────────── */}
        <div
          style={{
            flex: "0 0 420px",
            maxWidth: 460,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 48px 60px 56px",
          }}
        >
          {/* label */}
          <motion.p
            variants={stagger(0.04)}
            style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.32)",
              fontFamily: "'DM Mono', 'Courier New', monospace",
              marginBottom: 22,
              lineHeight: 1.6,
            }}
          >
            {item.label}
          </motion.p>

          {/* heading */}
          <motion.h2
            variants={stagger(0.11)}
            style={{
              fontSize: "clamp(1.9rem, 3vw, 2.7rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#f3f0ea",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              marginBottom: 26,
              whiteSpace: "pre-line",
            }}
          >
            {item.heading}
          </motion.h2>

          {/* body */}
          <motion.p
            variants={stagger(0.18)}
            style={{
              fontSize: 13.5,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.4)",
              marginBottom: 38,
              fontFamily: "'DM Sans', system-ui, sans-serif",
            }}
          >
            {item.body}
          </motion.p>

          {/* metrics row */}
          <motion.div
            variants={stagger(0.26)}
            style={{ display: "flex", gap: 40, marginBottom: 40 }}
          >
            {item.metrics.map((m, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#f3f0ea",
                    fontFamily: "'Georgia', serif",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {m.icon}
                </div>
                <p
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.26)",
                    fontFamily: "'DM Mono', monospace",
                    lineHeight: 1.5,
                  }}
                >
                  {m.text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            variants={stagger(0.33)}
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#f3f0ea",
              textDecoration: "none",
              fontFamily: "'DM Mono', monospace",
            }}
            whileHover={{ x: 6, transition: { duration: 0.35, ease: E } }}
          >
            {item.cta}
            <span style={{ fontSize: 14, color: item.accent }}>→</span>
          </motion.a>
        </div>

        {/* ── IMAGE SIDE ──────────────────────── */}
        <motion.div
          variants={stagger(0.06)}
          style={{
            flex: 1,
            minWidth: 300,
            minHeight: 360,
            padding: "28px 28px 28px 16px",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 340 }}>
            <BrowserChrome
              imgSrc={item.imgSrc}
              chromeBg={item.chromeBg}
              accent={item.accent}
              scrollYProgress={scrollYProgress}
            />
            <PhoneMockup
              imgSrc={item.imgSrcMobile}
              scrollYProgress={scrollYProgress}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   ROOT PAGE
───────────────────────────────────────────── */
export default function CaseStudies() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap"
        rel="stylesheet"
      />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0b0b0b; }
        @media (max-width: 720px) {
          .cs-text-col { max-width: 100% !important; flex: 0 0 100% !important; padding: 44px 28px 36px !important; }
          .cs-img-col  { min-height: 280px !important; padding: 0 20px 32px !important; }
        }
      `}</style>

      <div style={{ background: "#0b0b0b", minHeight: "100vh", paddingBottom: 80 }}>

        {/* PAGE HEADER */}
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "72px 44px 40px" }}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: E }}
          >
            <p style={{
              fontSize: 10,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.28)",
              fontFamily: "'DM Mono', monospace",
              marginBottom: 14,
            }}>
              Selected Work
            </p>
            <h1 style={{
              fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1,
              color: "#f3f0ea",
              fontFamily: "'Georgia', serif",
            }}>
              Case Studies
            </h1>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.15, ease: E, delay: 0.2 }}
            style={{ height: 1, background: "rgba(255,255,255,0.07)", marginTop: 44 }}
          />
        </div>

        {/* CARDS */}
        <div style={{
          maxWidth: 1300,
          margin: "0 auto",
          padding: "0 44px",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}>
          {cases.map((item, i) => (
            <CaseStudyCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* FOOTER */}
        <div style={{ maxWidth: 1300, margin: "60px auto 0", padding: "0 44px" }}>
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 22,
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.18)",
            fontFamily: "'DM Mono', monospace",
          }}>
            <span>© 2025</span>
            <span>All work confidential</span>
          </div>
        </div>
      </div>
    </>
  );
}

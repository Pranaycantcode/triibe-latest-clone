export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center pointer-events-none"
      style={{ backgroundColor: "#ffffff", padding: "144px 0 64px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 pointer-events-auto">
        <img
          src="/images/TRIIBELOGOS/TRIIBE I00 LOGO.png"
          alt="TRIIBE I00"
          style={{
            width: "auto",
            height: "70px",
            objectFit: "contain",
            margin: "0 auto",
            display: "block",
            marginBottom: "20px",
          }}
        />

        <p
          style={{
            fontSize: "18px",
            color: "#002c19",
            opacity: 0.65,
            fontWeight: 300,
            maxWidth: "max-content",
            margin: "0 auto",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Our index of nonprofit founders under 30 to know.
        </p>
      </div>
    </section>
  );
}
// components/features/competitions/competition-detail/CompetitionTimeline.tsx

interface CompetitionTimelineProps {
  date?: string;
  finalRound?: string;
}

export default function CompetitionTimeline({ date, finalRound }: CompetitionTimelineProps) {
  const steps = [
    {
      label: "Pendaftaran",
      sub: "Dibuka",
      desc: "Preparation",
      icon: <i className="ti ti-rocket text-white fs-xs" />,
      active: true,
      completed: true,
    },
    {
      label: "Penyisihan",
      sub: date ?? "TBA",
      desc: "Data checking",
      icon: <i className="ti ti-check text-white fs-xs" />,
      active: true,
      completed: false,
      current: true,
    },
    {
      label: "Grand Final",
      sub: finalRound ?? "TBA",
      desc: "Completed proof of concept",
      icon: <i className="ti ti-check tcn-4 fs-xs" />,
      active: false,
      completed: false,
    },
  ];

  // How many segments are "filled" — between step 0 and step 1 is filled (both active/completed)
  // We'll compute fill per-segment
  const segmentFilled = (i: number) =>
    steps[i].completed || steps[i].active
      ? steps[i + 1]?.completed || steps[i + 1]?.current || steps[i + 1]?.active
        ? true
        : false
      : false;

  return (
    <div className="col-lg-12">
      <h3 className="section-title mb-8 d-flex align-items-center gap-3">
        <i className="ti ti-calendar-stats text-[#ff8c00] fs-two" />
        Timeline Kompetisi
      </h3>

      <div
        className="p-6 rounded-4 w-100 overflow-x-auto"
        style={{
          background: "rgba(20,20,20,0.6)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Outer wrapper — dates on top, nodes in middle, labels on bottom */}
        <div
          className="position-relative"
          style={{ minWidth: 520, paddingLeft: 16, paddingRight: 16 }}
        >
          {/* ── ROW 1: Dates ───────────────────────────────────────────── */}
          <div className="d-flex" style={{ marginBottom: 12 }}>
            {steps.map((step, i) => (
              <div
                key={`date-${i}`}
                className="text-center"
                style={{ flex: 1 }}
              >
                <span
                  className="fw-bold fs-sm"
                  style={{
                    color:
                      step.completed || step.current
                        ? "#ff8c00"
                        : "var(--tcn-1, #ccc)",
                  }}
                >
                  {step.sub}
                </span>
              </div>
            ))}
          </div>

          {/* ── ROW 2: Track + Nodes ────────────────────────────────────── */}
          <div
            className="d-flex align-items-center position-relative"
            style={{ height: 48 }}
          >
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;

              return (
                <div
                  key={`node-${i}`}
                  className="d-flex align-items-center"
                  style={{ flex: 1, position: "relative" }}
                >
                  {/* Left connector segment (not for first node) */}
                  {i > 0 && (
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        right: "50%",
                        top: "50%",
                        height: 4,
                        transform: "translateY(-50%)",
                        background: segmentFilled(i - 1)
                          ? "#ff8c00"
                          : "rgba(255,255,255,0.12)",
                        zIndex: 0,
                      }}
                    />
                  )}

                  {/* Right connector segment (not for last node) */}
                  {!isLast && (
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        right: 0,
                        top: "50%",
                        height: 4,
                        transform: "translateY(-50%)",
                        background: segmentFilled(i)
                          ? "#ff8c00"
                          : "rgba(255,255,255,0.12)",
                        zIndex: 0,
                      }}
                    />
                  )}

                  {/* Node circle — centred in its flex cell */}
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto position-relative"
                    style={{
                      width: step.current ? 44 : 38,
                      height: step.current ? 44 : 38,
                      borderRadius: "50%",
                      background: step.completed
                        ? "#ff8c00"
                        : step.current
                        ? "#ff8c00"
                        : "rgba(255,255,255,0.08)",
                      border: step.current
                        ? "3px solid rgba(255,140,0,0.35)"
                        : step.completed
                        ? "3px solid rgba(255,140,0,0.25)"
                        : "2px solid rgba(255,255,255,0.15)",
                      boxShadow: step.current || step.completed
                        ? "0 0 18px rgba(255,140,0,0.35)"
                        : "none",
                      zIndex: 2,
                      flexShrink: 0,
                    }}
                  >
                    {step.icon}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── ROW 3: Labels + Descriptions ──────────────────────────── */}
          <div className="d-flex" style={{ marginTop: 12 }}>
            {steps.map((step, i) => (
              <div
                key={`label-${i}`}
                className="text-center px-2"
                style={{ flex: 1 }}
              >
                <div
                  className="fw-bold fs-md mb-1"
                  style={{ color: "var(--tcn-1, #e0e0e0)" }}
                >
                  {step.label}
                </div>
                <div
                  className="fs-sm"
                  style={{ color: "var(--tcn-6, #888)" }}
                >
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
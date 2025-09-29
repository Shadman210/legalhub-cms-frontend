"use client";

export function BackgroundAnimations() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* --- SVG Animations --- */}

      {/* Judge Gavel SVG Animation */}
      <div
        className="absolute top-20 right-20 w-12 h-12 animate-gavel-swing"
        style={{ animationDelay: "0s" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full text-primary/40"
        >
          <path
            d="M3 21h18M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14M9 9h6M9 13h6M9 17h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 3v4M8 3h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Lawyer Hat SVG Animation */}
      <div
        className="absolute top-40 left-20 w-10 h-10 animate-lawyer-hat"
        style={{ animationDelay: "2s" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full text-secondary/40"
        >
          <ellipse
            cx="12"
            cy="20"
            rx="8"
            ry="2"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M12 4c-4 0-6 2-6 6v6c0 2 2 4 6 4s6-2 6-4v-6c0-4-2-6-6-6z"
            fill="currentColor"
            opacity="0.8"
          />
          <ellipse cx="12" cy="4" rx="3" ry="1" fill="currentColor" />
        </svg>
      </div>

      {/* Scales of Justice SVG Animation */}
      <div
        className="absolute bottom-40 right-1/4 w-14 h-14 animate-scales-balance"
        style={{ animationDelay: "1s" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full text-primary/50"
        >
          <path
            d="M12 3v18M8 21h8M12 7l-4 4h8l-4-4zM4 11l4-4v8l-4-4zM20 11l-4-4v8l4-4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="4"
            cy="15"
            r="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="20"
            cy="15"
            r="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Legal Document SVG Animation */}
      <div
        className="absolute top-60 left-0 w-8 h-10 animate-legal-document"
        style={{ animationDelay: "3s" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full text-secondary/40"
        >
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            opacity="0.3"
          />
          <polyline
            points="14,2 14,8 20,8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="16"
            y1="13"
            x2="8"
            y2="13"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="16"
            y1="17"
            x2="8"
            y2="17"
            stroke="currentColor"
            strokeWidth="2"
          />
          <polyline
            points="10,9 9,9 8,9"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Courthouse SVG Animation */}
      <div
        className="absolute top-1/3 right-1/3 w-16 h-16 animate-courthouse"
        style={{ animationDelay: "4s" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full text-primary/30"
        >
          <path
            d="M3 21h18M4 21V9l8-6 8 6v12M8 21V15h8v6M12 3v6M6 9h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 12h6v3H9z" fill="currentColor" opacity="0.4" />
          <circle cx="10" cy="13" r="0.5" fill="currentColor" />
          <circle cx="14" cy="13" r="0.5" fill="currentColor" />
        </svg>
      </div>

      {/* Legal Book SVG Animation */}
      <div
        className="absolute bottom-20 left-1/3 w-12 h-8 animate-legal-book"
        style={{ animationDelay: "5s" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full text-secondary/40"
        >
          <path
            d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M8 7h8M8 11h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Additional Legal Symbols */}
      <div
        className="absolute top-80 right-40 w-10 h-10 animate-legal-pulse"
        style={{ animationDelay: "6s" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full text-primary/35"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M8 12h8M12 8v8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-60 right-20 w-8 h-8 animate-tech-glow"
        style={{ animationDelay: "7s" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full text-secondary/35"
        >
          <polygon
            points="12,2 15.09,8.26 22,9 17,14.74 18.18,21.02 12,17.77 5.82,21.02 7,14.74 2,9 8.91,8.26"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* --- DIV-based Animations (Dots, Shapes, Gradients) --- */}

      {/* From Section 1 */}
      <div
        className="absolute top-10 left-1/4 w-3 h-3 bg-primary rounded-full animate-tech-glow"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-32 right-1/4 w-2 h-2 bg-secondary rounded-full animate-legal-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-2.5 h-2.5 bg-primary rounded-full animate-tech-glow"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 right-1/2 w-3 h-3 bg-secondary rounded-full animate-legal-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-1/2 left-10 w-2 h-2 bg-primary rounded-full animate-data-flow"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-16 right-16 w-8 h-8 border-2 border-primary/30 rotate-45 animate-legal-pulse"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute bottom-32 left-16 w-6 h-6 border-2 border-secondary/30 rotate-12 animate-tech-glow"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* From Section 2 */}
      <div
        className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full animate-data-flow opacity-50"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full animate-legal-pulse opacity-50"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-24 h-24 bg-primary/5 rounded-full animate-tech-glow"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute top-20 right-1/3 w-16 h-0.5 bg-primary/20 animate-data-flow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-0.5 h-16 bg-secondary/20 animate-legal-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* From Section 3 */}
      <div
        className="absolute top-20 right-20 w-24 h-24 bg-primary/5 rounded-full animate-tech-glow"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-20 h-20 bg-secondary/5 rounded-full animate-legal-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/3 w-16 h-16 bg-primary/3 rounded-full animate-data-flow opacity-50"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/4 left-1/4 w-12 h-12 border border-primary/20 rounded-full animate-legal-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-10 h-10 border border-secondary/20 rounded-full animate-tech-glow"
        style={{ animationDelay: "4s" }}
      ></div>
    </div>
  );
}

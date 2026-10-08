export function LearningIllustration() {
  return (
    <svg
      viewBox="0 0 280 210"
      className="bloom-learning-illustration"
      aria-hidden="true"
    >
      <ellipse cx="160" cy="173" rx="108" ry="12" fill="#c3d18f" />
      <path
        d="M88 92c-15-21 12-67 42-65 44-4 65 34 54 59l-8 25-83 7Z"
        fill="#34483a"
      />
      <path
        d="M100 130c-17-43-5-63 11-72 21-12 45-2 48 22l-4 39Z"
        fill="#f6b69d"
      />
      <path
        d="M126 100c8 7 16 7 23 0"
        fill="none"
        stroke="#d18063"
        strokeWidth="2"
      />
      <circle cx="121" cy="84" r="2" fill="#34483a" />
      <circle cx="150" cy="84" r="2" fill="#34483a" />
      <path
        d="M103 63c-8-9-7-22 14-27 23-5 40 10 42 31-13-5-28-7-33-20-3 10-9 17-23 16Z"
        fill="#34483a"
      />
      <path
        d="M73 146c0-18 16-39 36-40 9 13 32 15 47-1 15 3 25 19 36 42v23H73Z"
        fill="#ec937d"
      />
      <path
        d="M100 146c5 6 12 10 30 14M171 144c-7 8-19 9-35 13"
        fill="none"
        stroke="#f6b69d"
        strokeWidth="13"
        strokeLinecap="round"
      />
      <path
        d="M107 124h84l-14 44H94Z"
        fill="#ece8ff"
        stroke="#7b77a1"
        strokeWidth="2"
      />
      <circle cx="146" cy="144" r="5" fill="#b1a7d9" />
      <rect x="63" y="168" width="143" height="5" rx="2.5" fill="#34483a" />
      <path
        d="M214 166v-35m0 4c-12 0-17-6-18-16 12-1 18 6 18 16Zm0 11c12 0 18-7 18-17-13 0-19 6-18 17Z"
        fill="#638657"
      />
      <path d="M205 167h18l-3 14h-12Z" fill="#f5d1b9" />
      <path
        d="m76 52 3-13m-7 5 12 1M220 57l5-14m-12 7 19 4"
        stroke="#6d8354"
        strokeWidth="2"
      />
      <circle
        cx="205"
        cy="92"
        r="5"
        fill="none"
        stroke="#6d8354"
        strokeWidth="2"
      />
    </svg>
  );
}
export function CourseIllustration({ kind }: { kind: string }) {
  return (
    <svg
      viewBox="0 0 320 190"
      role="img"
      aria-label={kind + " course illustration"}
    >
      {kind === "Design foundations" ? (
        <>
          <rect width="320" height="190" fill="#e4d9f8" />
          <circle cx="86" cy="108" r="49" fill="#997bd2" />
          <path d="M147 152V52h98v100Z" fill="#f6d1be" />
          <path d="m153 153 94-96v96Z" fill="#e59683" />
          <path d="m57 53 35-20 35 20-35 20Z" fill="#eef3cc" />
          <circle cx="249" cy="42" r="16" fill="#809867" />
          <path d="M38 165h245" stroke="#584968" strokeWidth="2" />
        </>
      ) : kind === "Web design, from scratch" ? (
        <>
          <rect width="320" height="190" fill="#f5d0be" />
          <rect
            x="65"
            y="33"
            width="195"
            height="129"
            rx="10"
            fill="#fffaf3"
            stroke="#9a786c"
            strokeWidth="2"
          />
          <path d="M65 56h195" stroke="#9a786c" strokeWidth="2" />
          <circle cx="78" cy="45" r="3" fill="#e99f8c" />
          <circle cx="89" cy="45" r="3" fill="#d8dfb5" />
          <rect x="82" y="76" width="59" height="67" rx="4" fill="#b6ca8d" />
          <rect x="156" y="76" width="83" height="13" rx="4" fill="#e7dff5" />
          <path
            d="M156 105h64m-64 12h81m-81 12h46"
            stroke="#baaaa1"
            strokeWidth="4"
          />
          <path
            d="m225 136 20 30 5-14 14-3Z"
            fill="#615170"
            stroke="#fffaf3"
            strokeWidth="2"
          />
        </>
      ) : (
        <>
          <rect width="320" height="190" fill="#dce8b1" />
          <path
            d="M71 153 105 37h31l35 116h-29l-7-28h-35l-7 28Zm36-51h22l-11-43Z"
            fill="#627d56"
          />
          <path d="M191 37h-18v116h64v-23h-46Z" fill="#fffaf3" />
          <circle cx="237" cy="54" r="24" fill="#f4b99f" />
          <path
            d="m57 54 5-14m-12 7 19 4M263 120l7-10m-13 4 16 9"
            stroke="#71865a"
            strokeWidth="2"
          />
        </>
      )}
    </svg>
  );
}

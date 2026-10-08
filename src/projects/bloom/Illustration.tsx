export function Illustration({ variant }: { variant: number }) {
  return (
    <svg
      viewBox="0 0 180 150"
      fill="none"
      aria-hidden="true"
      className="bv-lesson-art"
    >
      {variant === 1 ? (
        <>
          <path
            d="M90 128V67M90 99L63 78M90 108l25-18"
            stroke="#456443"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M89 71C54 81 47 45 66 33c14-9 23 9 23 23-3-28 25-38 35-18 9 18-10 35-35 33Z"
            fill="#77924c"
          />
          <circle cx="89" cy="65" r="12" fill="#f4c976" />
        </>
      ) : variant === 2 ? (
        <>
          <path
            d="M35 99V54a17 17 0 0 1 17-17h43v79H52a17 17 0 0 1-17-17Z"
            fill="#385b43"
          />
          <path
            d="M83 29h41a19 19 0 0 1 19 19v51a19 19 0 0 1-19 19H83Z"
            fill="#f9e7cb"
            transform="rotate(12 113 74)"
          />
          <circle cx="115" cy="58" r="16" fill="#c8da80" />
          <path
            d="M96 99h38M96 89h26"
            stroke="#d08259"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="m30 23 5-9m-16 27-10-2m141 94 9 8"
            stroke="#cc815b"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </>
      ) : variant === 3 ? (
        <>
          <rect
            x="24"
            y="30"
            width="132"
            height="88"
            rx="12"
            fill="#faf8f0"
            stroke="#8673a1"
            strokeWidth="3"
          />
          <path d="M49 50h32v48H49Z" fill="#c3b5dd" />
          <path
            d="M99 51h32M99 62h27M99 81h32M99 92h25"
            stroke="#83965f"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="m82 10 3 8m6 112 4 9"
            stroke="#857095"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </>
      ) : variant === 4 ? (
        <>
          <path
            d="M43 115 76 35h24l33 80h-23l-7-20H72l-7 20ZM79 77h18l-9-26Z"
            fill="#607646"
          />
          <path
            d="m34 44-9-7m119 79 8 8M122 23l6-9"
            stroke="#b49c49"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <path
            d="M40 56c19-25 81-25 100 0-19 37-81 37-100 0Z"
            fill="#90aaa0"
          />
          <circle cx="90" cy="61" r="22" fill="#f9f3e7" />
          <circle cx="90" cy="61" r="11" fill="#3c6351" />
          <path
            d="M67 107c15 10 32 10 47-2"
            stroke="#638778"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="m54 26-5-9m78 9 6-9"
            stroke="#638778"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

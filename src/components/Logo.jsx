/**
 * The Hayaath mark: one line that opens up and joins again,
 * like the account and PAN flow coming back together.
 */
export default function Logo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.5V21.5" />
      <path d="M12 6.5C7 9.5 7 14.5 12 17.5C17 14.5 17 9.5 12 6.5Z" />
    </svg>
  )
}

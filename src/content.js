// All the words on the site live here.
// Edit this file to change text. You don't need to touch the components.
//
// Rules this copy follows (keep them when you edit):
// - Hayaath is not a bank. A licensed partner bank holds deposits and makes the final KYC decision.
// - The Income Tax Department issues PAN. Hayaath only helps you apply.
// - Anything not built yet is labelled as planned.
// - No invented numbers, users, partners, logos or quotes.

export const site = {
  brand: "Hayaath",
  brandFull: "Hayaath Banking",
  group: "Hayaath Group",

  // Paste your Google Form (or any waitlist form) link here.
  // While it's empty, the waitlist button shows "Waitlist opens soon" instead of a link.
  waitlistUrl: "",

  // Fill these in to show them in the footer. Empty ones are hidden.
  contact: {
    email: "",
    linkedin: "",
    instagram: "",
  },
};

export const nav = {
  links: [
    { label: "How it works", href: "#how" },
    { label: "What's next", href: "#vision" },
  ],
  cta: "Join the waitlist",
};

export const hero = {
  // Each item is one line of the big headline. Lines rise in one by one.
  lines: ["Your own account.", "Your own PAN.", "One flow."],
  sub: "Open a bank account and apply for PAN in one simple flow. Built for students and young adults in India.",
  cta: "Join the waitlist",
  note: "Coming soon. 18+ at launch.",
};

export const problem = {
  id: "problem",
  heading: ["Most of us never chose", "our first bank account."],
  body: [
    "In our conversations with more than 30 students, we kept hearing the same story. A first account opened with a parent, often for a scholarship, and still in use years later.",
    "Turning 18 should mean an account with your own phone number, in your own name, with your own PAN. Today, getting all of that means separate forms and typing the same details again and again.",
  ],
};

export const titleCard = {
  // This sentence lights up word by word as you scroll.
  text: "Before your account is ready, we ask one question. Do you have a PAN card? If not, you apply right here, in the same flow.",
};

export const howItWorks = {
  id: "how",
  heading: "How it works",
  steps: [
    {
      title: "Open your account",
      body: "Share your details once and verify online. The account uses your own phone number and is in your own name.",
    },
    {
      title: "Do you have a PAN card?",
      body: "We ask before you confirm your account. If you already have one, add it and carry on.",
    },
    {
      title: "No PAN yet? Apply right here.",
      body: "We reuse everything you've already shared and ask only for the extra details PAN needs. Nobody fills the same form twice.",
    },
    {
      title: "Your account upgrades",
      body: "When your PAN arrives, your account becomes a full account.",
    },
  ],
  // Labels inside the flow diagram
  diagram: {
    start: "Your details",
    question: "PAN card?",
    yes: "Yes",
    no: "Not yet",
    apply: "Apply for PAN",
    end: "Full account",
  },
};

export const whoDoesWhat = {
  id: "trust",
  heading: ["We're the front door.", "The bank is still the bank."],
  roles: [
    {
      name: "Hayaath",
      body: "The app you use. We design the flow, keep it simple, and help you apply for PAN.",
    },
    {
      name: "Our partner bank",
      body: "A licensed bank holds your money, runs your account under its licence, and makes the final identity check (KYC).",
    },
    {
      name: "Income Tax Department",
      body: "Issues your PAN. We help you apply. The decision and the card are theirs.",
    },
  ],
  note: "Hayaath is not a bank and does not issue PAN.",
};

export const families = {
  id: "families",
  heading: ["An account that", "grows up with you."],
  body: "We're planning a limited account that a parent or guardian opens for their child. At 18, the account holder verifies online, switches to their own phone number, updates their address from their official ID, and keeps the same account for life.",
  status: "Planned. Needs partner bank approval before it launches.",
};

export const vision = {
  id: "vision",
  heading: ["Your first account", "is only the opening scene."],
  intro: "These are the ideas we're building toward. None of them are live yet, and none are final.",
  // Shown like film credits: group name on the left, features on the right.
  groups: [
    {
      name: "Understand your money",
      items: [
        {
          title: "AI money assistant",
          body: "Learns your situation, like money from home and rent, or your salary. Tracks where it goes, asks why when it can't tell, and sends a month-end report.",
        },
        {
          title: "Credit score",
          body: "A free refresh every month. A paid plan explains why your score dropped, what loans are pending, and which costly ones to clear first.",
        },
        { title: "Net worth", body: "Everything you own and owe, on one page." },
        { title: "Money news and lessons", body: "Short reads that help you make better money decisions." },
      ],
    },
    {
      name: "Grow your money",
      items: [
        { title: "Savings pots", body: "Set money aside for the things you dream about." },
        { title: "Invest and protect", body: "FDs, mutual funds, digital gold and insurance." },
        { title: "Everyday payments", body: "UPI and bill payments, including credit card bills." },
      ],
    },
    {
      name: "Build your credit",
      items: [
        {
          title: "Starter credit line",
          body: "Starts small and grows as you repay on time. Provided by a licensed lending partner.",
        },
        { title: "Cards", body: "A debit card with spending controls, and later a premium credit card." },
      ],
    },
    {
      name: "Student life",
      items: [
        { title: "Student store", body: "Discounts on stationery, phones and laptops for verified students." },
        {
          title: "Rewards",
          body: "Coins you can spend in the store, streaks with a month-end gift, and cashback when friends join.",
        },
        { title: "Offers", body: "On flights, trains and cinema." },
      ],
    },
    {
      name: "Still exploring",
      items: [
        {
          title: "Voice payments",
          body: "“Hey Hayaath, send money to Rahul.” You confirm with your PIN or fingerprint.",
        },
        { title: "Tap to pay", body: "Pay with your phone at the counter." },
        { title: "AI subscriptions", body: "Buy the AI tools you use, in one place." },
      ],
    },
  ],
};

export const finale = {
  id: "waitlist",
  lead: "Where it all leads",
  heading: ["A financial OS."],
  sub: "One app for everything a young Indian needs for money.",
  waitlistText: "Be the first to know when we open.",
  cta: "Join the waitlist",
  ctaPending: "Waitlist opens soon",
};

export const footer = {
  disclaimer:
    "Hayaath is not a bank. Banking services will be provided by a licensed partner bank. PAN is issued by the Income Tax Department. Features marked as planned are ideas in progress and may change.",
};

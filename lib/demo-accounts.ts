export const DEMO_ACCOUNTS = {
  user: {
    email: "user@legalhub.ma",
    password: "test123123",
    type: "user",
    profile: {
      name: "Houssam ELK",
      phone: "+212 6 12 34 56 78",
      city: "Casablanca",
      joinedDate: "2024-01-15",
    },
  },
  professional: {
    email: "pro@legalhub.ma",
    password: "test123123",
    type: "professional",
    profile: {
      name: "Maître Fatima Alaoui",
      profession: "Avocat",
      specialties: ["Droit des affaires", "Droit immobilier"],
      city: "Rabat",
      experience: "15 ans",
      rating: 4.8,
      completedCases: 245,
      joinedDate: "2023-06-10",
    },
  },
}

export function authenticateDemo(email: string, password: string) {
  if (email === DEMO_ACCOUNTS.user.email && password === DEMO_ACCOUNTS.user.password) {
    return DEMO_ACCOUNTS.user
  }
  if (email === DEMO_ACCOUNTS.professional.email && password === DEMO_ACCOUNTS.professional.password) {
    return DEMO_ACCOUNTS.professional
  }
  return null
}

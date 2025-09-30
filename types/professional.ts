export interface Professional {
  id: string
  userId: string
  type: "lawyer" | "bailiff"
  firstName: string
  lastName: string
  email: string
  phone: string
  profileImage?: string

  // Professional Info
  barNumber?: string
  registrationNumber?: string
  specialties: string[]
  languages: string[]
  experience: number
  isVerified: boolean
  rating: number
  reviewCount: number

  // Profile Details
  title: string
  description: string
  education: Education[]
  certifications: string[]

  // Location
  city: string
  address: string

  // Services & Pricing
  consultationTypes: ConsultationType[]
  services: ServiceOffering[]

  // Availability
  availability: Availability

  // Cabinet/Firm Info
  cabinetId?: string
  cabinetName?: string
  role: "admin" | "member"

  // Stats
  totalConsultations: number
  totalServices: number
  responseTime: string // e.g., "< 2h"

  createdAt: Date
  updatedAt: Date
}

export interface Education {
  degree: string
  institution: string
  year: number
}

export interface ConsultationType {
  id: string
  name: string
  description: string
  duration: number // in minutes
  price: number
  isActive: boolean
  category: string
}

export interface ServiceOffering {
  id: string
  name: string
  description: string
  price: number
  estimatedDuration: string
  category: string
  requiredDocuments: string[]
  deliverables: string[]
  isActive: boolean
}

export interface Availability {
  timezone: string
  workingHours: {
    [key: string]: {
      start: string
      end: string
      isAvailable: boolean
    }
  }
  exceptions: {
    date: string
    isAvailable: boolean
    reason?: string
  }[]
  consultationModes: ("in-person" | "video" | "both")[]
}

export interface Review {
  id: string
  clientId: string
  clientName: string
  professionalId: string
  rating: number
  comment: string
  serviceType: string
  createdAt: Date
}

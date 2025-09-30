export type UserType = "individual" | "company" | "lawyer" | "bailiff" | "admin"

export type UserStatus = "pending" | "active" | "suspended" | "rejected"

export interface BaseUser {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  country: string
  nationality: string
  idNumber: string // CNI/Passport
  address: string
  userType: UserType
  status: UserStatus
  createdAt: Date
  updatedAt: Date
}

export interface IndividualUser extends BaseUser {
  userType: "individual"
}

export interface CompanyUser extends BaseUser {
  userType: "company"
  companyName: string
  entityType: string
  registrationNumber: string // RC
  ice: string
  declarantRole: string
}

export interface ProfessionalUser extends BaseUser {
  userType: "lawyer" | "bailiff"
  barNumber?: string // For lawyers
  registrationNumber?: string // For bailiffs
  specialties: string[]
  languages: string[]
  experience: number
  isVerified: boolean
  profileDescription: string
  hourlyRate?: number
  consultationTypes: ConsultationType[]
  services: ServiceOffering[]
  availability: Availability
  cabinetId?: string // If part of a cabinet/firm
  role: "admin" | "member" // Role within the cabinet
}

export interface ConsultationType {
  id: string
  name: string
  duration: number // in minutes
  price: number
  description: string
  isActive: boolean
}

export interface ServiceOffering {
  id: string
  name: string
  description: string
  price: number
  estimatedDuration: string
  requiredDocuments: string[]
  isActive: boolean
}

export interface Availability {
  timezone: string
  workingHours: {
    [key: string]: {
      // day of week
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
}

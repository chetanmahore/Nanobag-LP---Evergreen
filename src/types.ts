export interface LeadSubmission {
  email: string;
  source: 'hero' | 'footer' | 'persona' | 'modal';
  personaInterest?: string;
  timestamp: number;
}

export interface EDCSolution {
  id: string;
  emoji: string;
  title: string;
  shortDescription: string;
  recommendedModel: string;
  volume: string;
  weight: string;
  maxLoad: string;
  packSize: string;
  benefits: string[];
  idealPackItems: string[];
  colorHex: string;
}

export interface Testimonial {
  name: string;
  location: string;
  role: string;
  rating: number;
  quote: string;
  verifiedBacker: boolean;
  backerId?: string;
  useCase: string;
}

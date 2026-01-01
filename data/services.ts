export interface Service {
  title: string;
  monthlyPrice: string;
  totalPrice: string;
  description: string;
  imageUrl?: string;
}

export const services: Service[] = [
  {
    title: '12-Month Competition Prep',
    monthlyPrice: '$159/month*',
    totalPrice: '5497',
    description: 'Unlock your body\'s full potential with medically-backed competition prep coaching from Dr. Magomed Batalov, M.D.—including comprehensive bloodwork analysis, personalized nutrition planning by a Ph.D., and expert training guidance tailored to your goals. Your journey begins with an onboarding call to discuss your upcoming competitions and go over the information you provided in your onboarding forms. Receive 12 months of continued support and unlimited access to my expertise.',
    imageUrl: 'https://static.wixstatic.com/media/02c7d6_e6d172d8c51244ec92fcbd5243145981~mv2.png/v1/fill/w_436,h_304,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.png',
  },
  {
    title: '12-Month Lifestyle Coaching',
    monthlyPrice: '$145/month*',
    totalPrice: '5197',
    description: 'Unlock your body\'s full potential with medically-backed coaching from Dr. Magomed Batalov, M.D.—including comprehensive routine bloodwork analysis, personalized nutrition planning by a Ph.D., and expert training guidance tailored to your goals. My 12-Month Lifestyle Coaching starts with a consultation to review your current bloodwork and formulate a nutrition plan and training regimen. Receive 12 months of continued support and unlimited access to my expertise.',
    imageUrl: 'https://static.wixstatic.com/media/02c7d6_e55b79eec55045d287a6b3d4a97c9c2c~mv2.png/v1/fill/w_436,h_304,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.png',
  },
  {
    title: '12-Month Concierge Wellness',
    monthlyPrice: '$107/month*',
    totalPrice: '3697',
    description: 'Receive 12 months of ongoing support and unlimited phone access to my expertise with my Concierge Wellness program. This includes blood work analysis and personalized supplement services.\n\nFor diet planning, coaching, and regular check-ins, consider upgrading to the Lifestyle Program or Competition Prep.',
    imageUrl: 'https://static.wixstatic.com/media/02c7d6_96160c8332f34ef1b7938f4876b8794e~mv2.png/v1/fill/w_436,h_304,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.png',
  },
  {
    title: '12-Month Nutrition & Diet Plan',
    monthlyPrice: '$97/month*',
    totalPrice: '3500',
    description: 'Receive a personalized nutrition and diet plan by a Ph.D. based on your body\'s bloodwork resorts, unique needs, and performance goals.',
    imageUrl: 'https://static.wixstatic.com/media/02c7d6_409e764da7aa475f9cc68ceb818971e6~mv2.png/v1/fill/w_436,h_304,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.png',
  },
  {
    title: 'Comprehensive Male Bloodwork Review',
    monthlyPrice: '$72/month*',
    totalPrice: '849',
    description: 'Discuss your bloodwork results directly with Dr. Magomed Batalov, M.D. to uncover key insights into your health and hormones. Receive an in-depth bloodwork analysis with actionable guidance—identifying hormonal imbalances, nutritional deficiencies, and optimization opportunities tailored to your fitness goals. We offer the most comprehensive bloodwork review on the market.',
    imageUrl: 'https://static.wixstatic.com/media/02c7d6_7be44ba4342641689ede5b8c8c7bafe3~mv2.png/v1/fill/w_436,h_304,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.png',
  },
  {
    title: '30-Minute Phone Consultation',
    monthlyPrice: '$249',
    totalPrice: '249',
    description: 'Speak with Dr. Magomed Batalov, M.D. to take your first step toward elite, physician-led transformation with a 30-Minute Phone Consultation.',
    imageUrl: '/phone_consultation.jpg',
  },
];


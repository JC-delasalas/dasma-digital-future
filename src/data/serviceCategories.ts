
import { ServiceCategory } from '../types/services';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'business-licensing',
    name: 'Business & Licensing',
    description: 'Register a new business, renew permits, and apply for special licenses for your enterprise.',
    services: [
      {
        id: 'new-business-permit',
        name: 'New Business Permit Application',
        shortDescription: 'Apply for a new business permit to legally operate in Dasmariñas City.',
        description: 'The new business permit allows individuals and entities to legally operate a business within the jurisdiction of Dasmariñas City. This permit ensures your business complies with local regulations and zoning requirements.',
        type: 'hybrid',
        homeServiceEligible: false,
        office: 'Business Permit and Licensing Office',
        contact: '(046) 123-4567',
        officeHours: 'Monday to Friday, 8:00 AM - 5:00 PM',
        processingTime: '3-5 working days',
        legalBasis: 'City Ordinance No. 2022-03 (Business Regulation Code)',
        fees: [
          { name: 'Filing Fee', amount: 500 },
          { name: 'Mayor\'s Permit Fee', amount: 1000 },
          { name: 'Sanitary Inspection Fee', amount: 300 },
          { name: 'Fire Safety Inspection Fee', amount: 500 }
        ],
        requirements: [
          {
            name: 'DTI Business Name Registration or SEC Registration',
            description: 'Certificate of business name registration from DTI or incorporation documents from SEC.',
            mandatory: true,
            info: 'For sole proprietorship, secure from DTI. For corporation or partnership, secure from SEC.'
          },
          {
            name: 'Barangay Business Clearance',
            description: 'Clearance from the barangay where your business will operate.',
            mandatory: true
          },
          {
            name: 'Land Use Conformity Certificate',
            description: 'Certification that your business location conforms with zoning regulations.',
            mandatory: true
          },
          {
            name: 'Fire Safety Inspection Certificate',
            description: 'Certification that your business premises meet fire safety standards.',
            mandatory: true
          },
          {
            name: 'Sanitary Permit',
            description: 'Certification that your business meets health and sanitation requirements.',
            mandatory: true
          },
          {
            name: 'Community Tax Certificate (Cedula)',
            description: 'Current year\'s cedula of the business owner or authorized representative.',
            mandatory: true
          },
          {
            name: 'Contract of Lease (if applicable)',
            description: 'Copy of lease contract if the business premise is not owned by the applicant.',
            mandatory: false
          },
          {
            name: 'Business Permit Application Form',
            description: 'Completed application form with all required information.',
            mandatory: true,
            template: true
          }
        ],
        processSteps: [
          {
            title: 'Create Account and Submit Online Application',
            description: 'Register on the city portal and complete the business permit application form. Upload all required documents.',
            mode: 'online',
            estimatedDuration: '30 minutes',
            tagalog: 'Gumawa ng account at isumite ang application online. I-upload ang lahat ng kinakailangang dokumento.'
          },
          {
            title: 'Pay Initial Fees',
            description: 'Pay the filing fee online using credit/debit card, e-wallet, or through authorized payment centers.',
            mode: 'online',
            estimatedDuration: '15 minutes'
          },
          {
            title: 'Schedule Inspection',
            description: 'Book an appointment for premises inspection by the City Fire Department and Sanitation Office.',
            mode: 'online',
            estimatedDuration: '10 minutes'
          },
          {
            title: 'Premises Inspection',
            description: 'City inspectors will visit your business location to verify compliance with regulations.',
            mode: 'in-person',
            estimatedDuration: '1-2 hours',
            note: 'A representative must be present during the inspection.'
          },
          {
            title: 'Claim Business Permit',
            description: 'Visit the Business Permit and Licensing Office to pay the remaining fees and claim your official business permit.',
            mode: 'in-person',
            estimatedDuration: '1 hour',
            tagalog: 'Pumunta sa Business Permit and Licensing Office para bayaran ang natitirang fees at kunin ang opisyal na business permit.'
          },
          {
            title: 'Business Permit Issuance',
            description: 'Receive your official business permit valid for one calendar year.',
            mode: 'in-person',
            isCompletion: true
          }
        ]
      },
      {
        id: 'business-permit-renewal',
        name: 'Business Permit Renewal',
        shortDescription: 'Renew your existing business permit to continue operations in Dasmariñas City.',
        description: 'The annual business permit renewal is required for all businesses operating in Dasmariñas. This ensures continued compliance with local ordinances and regulations.',
        type: 'fully-online',
        homeServiceEligible: false,
        office: 'Business Permit and Licensing Office',
        contact: '(046) 123-4567',
        officeHours: 'Monday to Friday, 8:00 AM - 5:00 PM',
        processingTime: '1-3 working days',
        legalBasis: 'City Ordinance No. 2022-03 (Business Regulation Code)',
        fees: [
          { name: 'Renewal Fee', amount: 800 },
          { name: 'Mayor\'s Permit Fee', amount: 1000 },
          { name: 'Sanitary Inspection Fee', amount: 300 },
          { name: 'Fire Safety Inspection Fee', amount: 500 }
        ],
        requirements: [
          {
            name: 'Previous Business Permit',
            description: 'Copy of your business permit from the previous year.',
            mandatory: true
          },
          {
            name: 'Barangay Business Clearance',
            description: 'Updated clearance from the barangay where your business operates.',
            mandatory: true
          },
          {
            name: 'Audited Financial Statement',
            description: 'Copy of the previous year\'s financial statement.',
            mandatory: true
          },
          {
            name: 'Tax Clearance',
            description: 'Proof that all local business taxes have been paid.',
            mandatory: true
          },
          {
            name: 'Business Permit Renewal Form',
            description: 'Completed renewal application form.',
            mandatory: true,
            template: true
          }
        ],
        processSteps: [
          {
            title: 'Log in and Submit Renewal Application',
            description: 'Log in to your account on the city portal and complete the business permit renewal form. Upload updated documents.',
            mode: 'online',
            estimatedDuration: '20 minutes'
          },
          {
            title: 'Pay Renewal Fees',
            description: 'Pay all renewal fees online using credit/debit card, e-wallet, or through authorized payment centers.',
            mode: 'online',
            estimatedDuration: '15 minutes'
          },
          {
            title: 'Application Review',
            description: 'Your application and supporting documents will be reviewed by the Business Permit and Licensing Office.',
            mode: 'online',
            estimatedDuration: '1-2 working days'
          },
          {
            title: 'Receive Digital Business Permit',
            description: 'Once approved, your renewed business permit will be sent to your registered email address.',
            mode: 'online',
            estimatedDuration: '24 hours',
            isCompletion: true
          }
        ]
      }
    ]
  },
  {
    id: 'civil-registration',
    name: 'Civil Registration',
    description: 'Request official civil registry documents such as birth, marriage, and death certificates.',
    services: [
      {
        id: 'birth-certificate',
        name: 'Birth Certificate Request',
        shortDescription: 'Request an official copy of your birth certificate for personal or legal purposes.',
        description: 'This service allows residents to request certified copies of birth certificates registered in Dasmariñas City. Birth certificates are required for school enrollment, passport applications, employment, and other official transactions.',
        type: 'hybrid',
        homeServiceEligible: true,
        office: 'City Civil Registry Office',
        contact: '(046) 456-7890',
        officeHours: 'Monday to Friday, 8:00 AM - 5:00 PM',
        processingTime: 'Same day to 2 working days',
        legalBasis: 'Republic Act 9255 (Civil Registry Law)',
        fees: [
          { name: 'Processing Fee', amount: 100 },
          { name: 'Documentary Stamp', amount: 30 }
        ],
        requirements: [
          {
            name: 'Valid Government-issued ID',
            description: 'Photocopy of any valid government-issued ID of the requestor.',
            mandatory: true,
            info: 'For senior citizens or PWDs requesting their own birth certificate, please bring your Senior Citizen ID or PWD ID to avail of the discount.'
          },
          {
            name: 'Authorization Letter',
            description: 'If the requestor is not the owner, parent, spouse, child, or legal guardian of the owner of the document.',
            mandatory: false,
            template: true
          },
          {
            name: 'Birth Certificate Request Form',
            description: 'Completed request form with all required information.',
            mandatory: true,
            template: true
          }
        ],
        processSteps: [
          {
            title: 'Complete Online Request Form',
            description: 'Fill out the birth certificate request form on the city portal with accurate information.',
            mode: 'online',
            estimatedDuration: '10 minutes',
            tagalog: 'Punan ang request form para sa birth certificate sa city portal ng tama at kumpleto.'
          },
          {
            title: 'Pay Processing Fee',
            description: 'Pay the required fees online using credit/debit card, e-wallet, or through authorized payment centers.',
            mode: 'online',
            estimatedDuration: '5 minutes'
          },
          {
            title: 'Select Delivery Method',
            description: 'Choose between pickup at the City Civil Registry Office or home delivery (additional fee applies).',
            mode: 'online',
            estimatedDuration: '5 minutes'
          },
          {
            title: 'Verify Identity and Claim Certificate',
            description: 'For pickup: Visit the Civil Registry Office on your scheduled date. Present your valid ID and reference number for verification.',
            mode: 'in-person',
            estimatedDuration: '15-30 minutes',
            tagalog: 'Para sa pickup: Pumunta sa Civil Registry Office sa takdang petsa. Ipakita ang iyong valid ID at reference number para sa verification.',
            note: 'For home delivery: A verification call will be made before the document is sent to your address.'
          },
          {
            title: 'Receive Birth Certificate',
            description: 'Get your certified copy of the birth certificate.',
            mode: 'in-person',
            isCompletion: true
          }
        ]
      },
      {
        id: 'marriage-certificate',
        name: 'Marriage Certificate Request',
        shortDescription: 'Request an official copy of your marriage certificate.',
        description: 'This service allows residents to request certified copies of marriage certificates registered in Dasmariñas City. Marriage certificates are required for various legal and administrative purposes.',
        type: 'fully-online',
        homeServiceEligible: true,
        office: 'City Civil Registry Office',
        contact: '(046) 456-7890',
        officeHours: 'Monday to Friday, 8:00 AM - 5:00 PM',
        processingTime: '1-3 working days',
        legalBasis: 'Republic Act 9255 (Civil Registry Law)',
        fees: [
          { name: 'Processing Fee', amount: 100 },
          { name: 'Documentary Stamp', amount: 30 }
        ],
        requirements: [
          {
            name: 'Valid Government-issued ID',
            description: 'Scanned copy of any valid government-issued ID of the requestor.',
            mandatory: true
          },
          {
            name: 'Authorization Letter',
            description: 'If the requestor is not one of the spouses or their immediate family.',
            mandatory: false,
            template: true
          },
          {
            name: 'Marriage Certificate Request Form',
            description: 'Completed request form with all required information.',
            mandatory: true,
            template: true
          }
        ],
        processSteps: [
          {
            title: 'Complete Online Request Form',
            description: 'Fill out the marriage certificate request form on the city portal with accurate information.',
            mode: 'online',
            estimatedDuration: '10 minutes'
          },
          {
            title: 'Upload Required Documents',
            description: 'Upload scanned copies of your valid ID and other required documents.',
            mode: 'online',
            estimatedDuration: '5 minutes'
          },
          {
            title: 'Pay Processing Fee',
            description: 'Pay the required fees online using credit/debit card, e-wallet, or through authorized payment centers.',
            mode: 'online',
            estimatedDuration: '5 minutes'
          },
          {
            title: 'Select Delivery Method',
            description: 'Choose between digital copy delivery via email or physical copy delivery to your address (additional fee applies).',
            mode: 'online',
            estimatedDuration: '5 minutes'
          },
          {
            title: 'Receive Marriage Certificate',
            description: 'Receive your digital copy via email or physical copy via courier.',
            mode: 'online',
            estimatedDuration: '1-3 working days',
            isCompletion: true
          }
        ]
      }
    ]
  },
  {
    id: 'health-sanitation',
    name: 'Health & Sanitation',
    description: 'Apply for health permits, medical certificates, and request sanitation services.',
    services: [
      {
        id: 'health-certificate',
        name: 'Health Certificate Application',
        shortDescription: 'Apply for a health certificate required for food handlers and similar occupations.',
        description: 'A health certificate confirms that an individual is physically fit to work in food establishments, salons, spas, or similar businesses where public health considerations are important.',
        type: 'in-person',
        homeServiceEligible: true,
        office: 'City Health Office',
        contact: '(046) 789-0123',
        officeHours: 'Monday to Friday, 8:00 AM - 3:00 PM',
        processingTime: 'Same day (if all medical tests are completed)',
        legalBasis: 'City Ordinance No. 2019-12 (Public Health Code)',
        fees: [
          { name: 'Medical Examination Fee', amount: 150 },
          { name: 'Certificate Issuance', amount: 50 }
        ],
        requirements: [
          {
            name: 'Barangay Health Certificate',
            description: 'Clearance from your barangay health unit.',
            mandatory: true
          },
          {
            name: '1x1 ID Picture',
            description: 'Recent colored ID picture with white background.',
            mandatory: true
          },
          {
            name: 'Valid Government-issued ID',
            description: 'Any valid government-issued identification card.',
            mandatory: true
          },
          {
            name: 'Health Certificate Application Form',
            description: 'Completed application form with personal and employment details.',
            mandatory: true,
            template: true
          }
        ],
        processSteps: [
          {
            title: 'Schedule Medical Examination',
            description: 'Book an appointment for medical examination at the City Health Office.',
            mode: 'in-person',
            estimatedDuration: '10 minutes',
            tagalog: 'Mag-schedule ng medical examination sa City Health Office.'
          },
          {
            title: 'Undergo Medical Examination',
            description: 'Complete required health tests including vital signs check, chest X-ray, and laboratory tests.',
            mode: 'in-person',
            estimatedDuration: '1-2 hours',
            note: 'Come fasting if blood tests are required.'
          },
          {
            title: 'Pay Fees',
            description: 'Pay the required fees at the City Treasurer\'s Office.',
            mode: 'in-person',
            estimatedDuration: '15-30 minutes'
          },
          {
            title: 'Certificate Issuance',
            description: 'Receive your health certificate if all medical tests are passed.',
            mode: 'in-person',
            estimatedDuration: '30 minutes',
            isCompletion: true
          }
        ]
      }
    ]
  },
  {
    id: 'taxation-treasury',
    name: 'Taxation & Treasury',
    description: 'Pay property taxes, business taxes, and other fiscal obligations to the city government.',
    services: [
      {
        id: 'real-property-tax-payment',
        name: 'Real Property Tax Payment',
        shortDescription: 'Pay your annual real property tax for lands and buildings located in Dasmariñas City.',
        description: 'Real Property Tax is a levy on real properties such as land, buildings, and other improvements. It is paid annually and funds local government services like infrastructure, education, and public safety.',
        type: 'hybrid',
        homeServiceEligible: false,
        office: 'City Treasurer\'s Office',
        contact: '(046) 234-5678',
        officeHours: 'Monday to Friday, 8:00 AM - 5:00 PM',
        processingTime: 'Same day',
        legalBasis: 'Republic Act 7160 (Local Government Code)',
        fees: [
          { name: 'Varies based on property assessment', amount: 0 }
        ],
        requirements: [
          {
            name: 'Previous Tax Receipt',
            description: 'Most recent real property tax receipt (if available).',
            mandatory: false
          },
          {
            name: 'Tax Declaration Number',
            description: 'Your property\'s tax declaration number.',
            mandatory: true,
            info: 'This can be found on your previous tax receipts or property documents.'
          },
          {
            name: 'Valid Government-issued ID',
            description: 'ID of the property owner or authorized representative.',
            mandatory: true
          },
          {
            name: 'Authorization Letter',
            description: 'If the payer is not the registered property owner.',
            mandatory: false,
            template: true
          }
        ],
        processSteps: [
          {
            title: 'Check Tax Amount Online',
            description: 'Enter your tax declaration number on the city portal to verify the amount due.',
            mode: 'online',
            estimatedDuration: '5 minutes',
            tagalog: 'I-check ang iyong tax amount sa city portal gamit ang iyong tax declaration number.'
          },
          {
            title: 'Pay Tax Online or In-person',
            description: 'Choose to pay online via credit/debit card, e-wallet, or visit the City Treasurer\'s Office for in-person payment.',
            mode: 'hybrid',
            estimatedDuration: '10-30 minutes',
            tagalog: 'Magbayad online gamit ang credit/debit card, e-wallet, o pumunta sa City Treasurer\'s Office para sa personal na pagbabayad.'
          },
          {
            title: 'Receive Official Receipt',
            description: 'Get your official receipt via email (for online payment) or in-person (for over-the-counter payment).',
            mode: 'hybrid',
            estimatedDuration: 'Immediate to 24 hours',
            isCompletion: true
          }
        ]
      }
    ]
  },
  {
    id: 'housing-land',
    name: 'Housing & Land Use',
    description: 'Apply for building permits, zoning clearances, and other land use services.',
    services: [
      {
        id: 'building-permit',
        name: 'Building Permit Application',
        shortDescription: 'Apply for a permit to construct, renovate, or demolish structures in Dasmariñas City.',
        description: 'A building permit is required before starting construction, renovation, or demolition of any structure within Dasmariñas City. This ensures compliance with the National Building Code and local zoning regulations.',
        type: 'in-person',
        homeServiceEligible: false,
        office: 'City Engineering Office',
        contact: '(046) 345-6789',
        officeHours: 'Monday to Friday, 8:00 AM - 5:00 PM',
        processingTime: '5-15 working days',
        legalBasis: 'National Building Code of the Philippines (RA 6541) and City Ordinance No. 2018-08',
        fees: [
          { name: 'Filing Fee', amount: 500 },
          { name: 'Processing Fee', amount: 1000 },
          { name: 'Inspection Fee', amount: 1500 },
          { name: 'Additional fees based on project value', amount: 0 }
        ],
        requirements: [
          {
            name: 'Building Permit Application Form',
            description: 'Completed and notarized application form.',
            mandatory: true,
            template: true
          },
          {
            name: 'Proof of Land Ownership',
            description: 'Transfer Certificate of Title (TCT) or Tax Declaration.',
            mandatory: true
          },
          {
            name: 'Building Plans',
            description: 'Complete set of building plans signed by licensed professionals.',
            mandatory: true,
            info: 'Must include architectural, structural, electrical, sanitary, and mechanical plans as applicable.'
          },
          {
            name: 'Bill of Materials',
            description: 'Detailed list of materials and estimated cost.',
            mandatory: true
          },
          {
            name: 'Zoning Clearance',
            description: 'Clearance indicating the property conforms to local zoning regulations.',
            mandatory: true
          },
          {
            name: 'Fire Safety Evaluation Clearance',
            description: 'Clearance from the Bureau of Fire Protection.',
            mandatory: true
          },
          {
            name: 'Environmental Compliance Certificate',
            description: 'Certificate from DENR if applicable to the project.',
            mandatory: false
          },
          {
            name: 'Professional Tax Receipt',
            description: 'Valid professional tax receipts of all signing professionals.',
            mandatory: true
          }
        ],
        processSteps: [
          {
            title: 'Preliminary Meeting and Consultation',
            description: 'Schedule a consultation with the City Engineering Office to discuss your project.',
            mode: 'in-person',
            estimatedDuration: '1 hour',
            tagalog: 'Mag-schedule ng konsultasyon sa City Engineering Office para pag-usapan ang iyong proyekto.'
          },
          {
            title: 'Obtain Zoning Clearance',
            description: 'Apply for and receive a zoning clearance from the City Planning and Development Office.',
            mode: 'in-person',
            estimatedDuration: '1-3 days'
          },
          {
            title: 'Submit Building Permit Application',
            description: 'Submit your completed application form and all required documents to the City Engineering Office.',
            mode: 'in-person',
            estimatedDuration: '1 hour'
          },
          {
            title: 'Pay Filing Fee',
            description: 'Pay the initial filing fee at the City Treasurer\'s Office.',
            mode: 'in-person',
            estimatedDuration: '30 minutes'
          },
          {
            title: 'Document Evaluation',
            description: 'Your documents will be evaluated by various departments including Architectural, Structural, Electrical, and Sanitary Divisions.',
            mode: 'in-person',
            estimatedDuration: '3-7 days'
          },
          {
            title: 'Site Inspection',
            description: 'Building officials will conduct an inspection of your property.',
            mode: 'in-person',
            estimatedDuration: '1 day'
          },
          {
            title: 'Pay Remaining Fees',
            description: 'Pay the remaining permit fees at the City Treasurer\'s Office once your application is approved.',
            mode: 'in-person',
            estimatedDuration: '30 minutes'
          },
          {
            title: 'Receive Building Permit',
            description: 'Claim your official building permit from the City Engineering Office.',
            mode: 'in-person',
            estimatedDuration: '30 minutes',
            isCompletion: true
          }
        ]
      }
    ]
  },
  {
    id: 'education-scholarship',
    name: 'Education & Scholarships',
    description: 'Apply for educational support programs, scholarships, and training opportunities.',
    services: [
      {
        id: 'city-scholarship',
        name: 'City College Scholarship Program',
        shortDescription: 'Apply for financial assistance for college education through the city scholarship program.',
        description: 'The City College Scholarship Program provides financial assistance to qualified residents of Dasmariñas City for college education. The program aims to support academically talented but financially challenged students.',
        type: 'hybrid',
        homeServiceEligible: false,
        office: 'City Education Office',
        contact: '(046) 567-8901',
        officeHours: 'Monday to Friday, 8:00 AM - 5:00 PM',
        processingTime: '15-30 working days',
        legalBasis: 'City Ordinance No. 2020-05 (Educational Assistance Program)',
        fees: [
          { name: 'No fees required', amount: 0 }
        ],
        requirements: [
          {
            name: 'Scholarship Application Form',
            description: 'Completed application form with recent 2x2 photo.',
            mandatory: true,
            template: true
          },
          {
            name: 'Proof of Residency',
            description: 'Barangay Certificate of Residency (minimum of 2 years residency).',
            mandatory: true
          },
          {
            name: 'School Registration or Admission',
            description: 'Proof of enrollment or admission to an accredited college or university.',
            mandatory: true
          },
          {
            name: 'Academic Records',
            description: 'High school report card (for new applicants) or college grades (for continuing students).',
            mandatory: true,
            info: 'Minimum GPA requirement of 85% for high school or 2.5 for college.'
          },
          {
            name: 'Income Certificate',
            description: 'Certificate of family income or latest ITR of parents/guardian.',
            mandatory: true,
            info: 'Family income should not exceed ₱25,000 per month.'
          },
          {
            name: 'Birth Certificate',
            description: 'PSA-issued birth certificate of the applicant.',
            mandatory: true
          },
          {
            name: 'Valid IDs',
            description: 'Valid government-issued IDs of the applicant and parents/guardian.',
            mandatory: true
          },
          {
            name: 'Personal Essay',
            description: 'A 500-word essay explaining why you deserve the scholarship.',
            mandatory: true,
            example: true
          }
        ],
        processSteps: [
          {
            title: 'Create Account and Pre-register Online',
            description: 'Create an account on the city education portal and complete the pre-registration form.',
            mode: 'online',
            estimatedDuration: '15 minutes',
            tagalog: 'Gumawa ng account at kumpletuhin ang pre-registration form sa city education portal.'
          },
          {
            title: 'Download and Complete Application Form',
            description: 'Download the scholarship application form, fill it out completely and prepare all required documents.',
            mode: 'online',
            estimatedDuration: '1 day'
          },
          {
            title: 'Schedule Document Submission',
            description: 'Book an appointment for document submission and interview.',
            mode: 'online',
            estimatedDuration: '10 minutes'
          },
          {
            title: 'Submit Requirements and Interview',
            description: 'Visit the City Education Office on your scheduled date to submit documents and undergo an interview.',
            mode: 'in-person',
            estimatedDuration: '1-2 hours'
          },
          {
            title: 'Application Evaluation',
            description: 'Wait for the scholarship committee to evaluate all applications based on academic merit and financial need.',
            mode: 'online',
            estimatedDuration: '15-30 days'
          },
          {
            title: 'Receive Results',
            description: 'Check the results of your application online or through SMS notification.',
            mode: 'online',
            estimatedDuration: '1 day'
          },
          {
            title: 'Scholarship Orientation',
            description: 'If approved, attend the mandatory scholarship orientation session.',
            mode: 'in-person',
            estimatedDuration: '3 hours'
          },
          {
            title: 'Scholarship Grant Release',
            description: 'Receive your scholarship grant through your designated bank account or city treasurer\'s office.',
            mode: 'hybrid',
            estimatedDuration: '1-5 days',
            isCompletion: true
          }
        ]
      }
    ]
  },
  {
    id: 'senior-pwd',
    name: 'Senior Citizen & PWD Benefits',
    description: 'Apply for senior citizen and PWD ID cards, benefits, and assistance programs.',
    services: [
      {
        id: 'senior-id',
        name: 'Senior Citizen ID Application',
        shortDescription: 'Apply for a Senior Citizen ID card and access associated benefits and discounts.',
        description: 'The Senior Citizen ID card allows residents aged 60 years and above to access various benefits including discounts on goods and services, social pension, and healthcare benefits as mandated by law.',
        type: 'hybrid',
        homeServiceEligible: true,
        office: 'Office for Senior Citizens Affairs (OSCA)',
        contact: '(046) 678-9012',
        officeHours: 'Monday to Friday, 8:00 AM - 5:00 PM',
        processingTime: '5-7 working days',
        legalBasis: 'Republic Act 9994 (Expanded Senior Citizens Act)',
        fees: [
          { name: 'No fees required', amount: 0 }
        ],
        requirements: [
          {
            name: 'Senior Citizen Application Form',
            description: 'Completed application form with recent 1x1 ID picture.',
            mandatory: true,
            template: true
          },
          {
            name: 'Proof of Age',
            description: 'Birth certificate, passport, or other valid government-issued ID showing date of birth.',
            mandatory: true,
            info: 'Applicant must be at least 60 years old.'
          },
          {
            name: 'Proof of Residency',
            description: 'Barangay Certificate of Residency proving at least 6 months of residency in Dasmariñas City.',
            mandatory: true
          },
          {
            name: '1x1 ID Pictures',
            description: 'Three (3) colored ID pictures with white background.',
            mandatory: true
          }
        ],
        processSteps: [
          {
            title: 'Pre-register Online',
            description: 'Fill out the preliminary registration form on the city portal.',
            mode: 'online',
            estimatedDuration: '15 minutes',
            tagalog: 'Punan ang paunang registration form sa city portal.'
          },
          {
            title: 'Schedule Appointment',
            description: 'Book an appointment for document submission and ID processing.',
            mode: 'online',
            estimatedDuration: '5 minutes',
            note: 'If you need home service due to mobility issues, please indicate when scheduling.'
          },
          {
            title: 'Submit Documents',
            description: 'Visit the OSCA office on your scheduled date with all required documents or have them collected at home if you requested home service.',
            mode: 'hybrid',
            estimatedDuration: '30 minutes'
          },
          {
            title: 'Photo and Biometrics Capture',
            description: 'Have your photo and biometric data (fingerprints) captured for the ID.',
            mode: 'hybrid',
            estimatedDuration: '15 minutes'
          },
          {
            title: 'ID Processing',
            description: 'Your ID will be processed and prepared for issuance.',
            mode: 'online',
            estimatedDuration: '5-7 days'
          },
          {
            title: 'Receive Senior Citizen ID',
            description: 'Claim your Senior Citizen ID at the OSCA office or receive it through home delivery if requested.',
            mode: 'hybrid',
            estimatedDuration: '15 minutes',
            isCompletion: true
          }
        ]
      },
      {
        id: 'pwd-id',
        name: 'PWD ID Card Application',
        shortDescription: 'Apply for a Person With Disability (PWD) ID card to access benefits and support services.',
        description: 'The PWD ID card is an identification card issued to persons with disability to access various benefits including discounts, tax incentives, and support services as mandated by law.',
        type: 'in-person',
        homeServiceEligible: true,
        office: 'Persons with Disability Affairs Office (PDAO)',
        contact: '(046) 789-0123',
        officeHours: 'Monday to Friday, 8:00 AM - 5:00 PM',
        processingTime: '7-14 working days',
        legalBasis: 'Republic Act 10754 (Expanded Benefits for Persons with Disability)',
        fees: [
          { name: 'No fees required', amount: 0 }
        ],
        requirements: [
          {
            name: 'PWD Application Form',
            description: 'Completed application form with recent 1x1 ID picture.',
            mandatory: true,
            template: true
          },
          {
            name: 'Medical Certificate',
            description: 'Medical certificate issued within the last 6 months indicating type and degree of disability.',
            mandatory: true,
            info: 'Must be signed by a licensed physician from a government hospital.'
          },
          {
            name: 'Proof of Residency',
            description: 'Barangay Certificate of Residency proving residency in Dasmariñas City.',
            mandatory: true
          },
          {
            name: '1x1 ID Pictures',
            description: 'Two (2) colored ID pictures with white background.',
            mandatory: true
          },
          {
            name: 'Birth Certificate',
            description: 'PSA-issued birth certificate.',
            mandatory: true
          }
        ],
        processSteps: [
          {
            title: 'Medical Assessment',
            description: 'Consult with a licensed physician at a government hospital to obtain a medical certificate indicating your disability.',
            mode: 'in-person',
            estimatedDuration: 'Varies',
            tagalog: 'Kumunsulta sa isang lisensyadong doktor sa government hospital para makakuha ng medical certificate na nagpapatunay ng iyong disability.'
          },
          {
            title: 'Schedule Appointment',
            description: 'Contact PDAO to schedule an appointment for document submission.',
            mode: 'in-person',
            estimatedDuration: '10 minutes',
            note: 'For home service requests due to mobility limitations, please mention this when scheduling.'
          },
          {
            title: 'Submit Application and Documents',
            description: 'Visit the PDAO office on your scheduled date with all required documents or have them collected at home if home service was arranged.',
            mode: 'in-person',
            estimatedDuration: '30-45 minutes'
          },
          {
            title: 'Interview and Verification',
            description: 'Undergo a brief interview for verification purposes.',
            mode: 'in-person',
            estimatedDuration: '20 minutes'
          },
          {
            title: 'Photo Capture',
            description: 'Have your photo taken for the PWD ID.',
            mode: 'in-person',
            estimatedDuration: '5 minutes'
          },
          {
            title: 'Application Processing',
            description: 'Your application will be processed by the PDAO.',
            mode: 'in-person',
            estimatedDuration: '7-14 days'
          },
          {
            title: 'Receive PWD ID Card',
            description: 'Claim your PWD ID at the PDAO office or receive it through home delivery if arranged.',
            mode: 'in-person',
            estimatedDuration: '15 minutes',
            isCompletion: true
          }
        ]
      }
    ]
  },
  {
    id: 'legal-emergency',
    name: 'Legal, Emergency & Social Welfare',
    description: 'Access legal assistance, emergency response services, and social welfare programs.',
    services: [
      {
        id: 'legal-aid',
        name: 'Free Legal Aid Service',
        shortDescription: 'Access free legal consultation and assistance for qualified residents.',
        description: 'The City Legal Aid Program provides free legal consultation, document preparation, and representation to qualified residents who cannot afford private legal services.',
        type: 'hybrid',
        homeServiceEligible: false,
        office: 'City Legal Office',
        contact: '(046) 890-1234',
        officeHours: 'Monday to Friday, 9:00 AM - 4:00 PM',
        processingTime: 'Varies depending on case complexity',
        legalBasis: 'City Ordinance No. 2021-07 (Free Legal Assistance Program)',
        fees: [
          { name: 'No fees required', amount: 0 }
        ],
        requirements: [
          {
            name: 'Legal Aid Application Form',
            description: 'Completed application form detailing the nature of legal assistance needed.',
            mandatory: true,
            template: true
          },
          {
            name: 'Proof of Residency',
            description: 'Barangay Certificate of Residency proving residency in Dasmariñas City.',
            mandatory: true
          },
          {
            name: 'Valid Government ID',
            description: 'Any valid government-issued identification card.',
            mandatory: true
          },
          {
            name: 'Income Certificate',
            description: 'Certificate of Indigency from the Barangay or proof of low income.',
            mandatory: true,
            info: 'Monthly family income should not exceed ₱20,000 to qualify.'
          },
          {
            name: 'Case-Related Documents',
            description: 'Copies of documents relevant to your legal concern (contracts, letters, etc.).',
            mandatory: false
          }
        ],
        processSteps: [
          {
            title: 'Schedule Initial Consultation',
            description: 'Book an appointment for initial legal consultation through the city portal or by calling the City Legal Office.',
            mode: 'online',
            estimatedDuration: '5 minutes',
            tagalog: 'Mag-schedule ng unang konsultasyon sa pamamagitan ng city portal o pagtawag sa City Legal Office.'
          },
          {
            title: 'Complete Eligibility Assessment',
            description: 'Fill out the preliminary assessment form to determine eligibility for free legal aid.',
            mode: 'online',
            estimatedDuration: '15 minutes'
          },
          {
            title: 'Attend Initial Consultation',
            description: 'Visit the City Legal Office for your scheduled consultation. Bring all relevant documents related to your case.',
            mode: 'in-person',
            estimatedDuration: '30-60 minutes'
          },
          {
            title: 'Submit Complete Application',
            description: 'If deemed eligible during the initial consultation, submit your completed application form with all required documents.',
            mode: 'in-person',
            estimatedDuration: '30 minutes'
          },
          {
            title: 'Case Evaluation',
            description: 'Your case will be evaluated by a city legal officer to determine the scope of assistance needed.',
            mode: 'in-person',
            estimatedDuration: '1-7 days'
          },
          {
            title: 'Legal Assistance Provision',
            description: 'Receive legal assistance according to your needs: consultation, document preparation, or representation.',
            mode: 'in-person',
            estimatedDuration: 'Varies by case',
            isCompletion: true
          }
        ]
      }
    ]
  }
];

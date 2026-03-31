// Equipment data — images live in src/assets/equipments/<category>/<name>
// Import them with Vite's import.meta.glob or use relative paths

// Cameras
import arri435 from '@/assets/equipments/CAMERAS/ARRI 435 Film Camera.webp';

// Color Grading & VFX
import autodeskFlame from '@/assets/equipments/Color Grading & VFX/Autodesk Flame Premium 2015.jpg';
import autodeskInferno from '@/assets/equipments/Color Grading & VFX/Autodesk Inferno.jpg';
import autodeskSmoke from '@/assets/equipments/Color Grading & VFX/Autodesk Smoke.webp';
import colorMasterAnalyzer from '@/assets/equipments/Color Grading & VFX/Color Master Analyzer.jpg';
import digitalVisionNucoda from '@/assets/equipments/Color Grading & VFX/Digital Vision Nucoda HD.webp';
import nucodaColorgrading from '@/assets/equipments/Color Grading & VFX/Nucoda Colorgrading System.jpg';
import truelightBaselight from '@/assets/equipments/Color Grading & VFX/Truelight Baselight 1, 2, HD.jpg';

// Film Processing & Lab
import schmitzerLiquidGate from '@/assets/equipments/FILM PROCESSING & LAB EQUIPMENT/16mm Model C Schmitzer Liquid Gate.webp';
import cinevator35mm from '@/assets/equipments/FILM PROCESSING & LAB EQUIPMENT/35mm Cinevator.webp';
import printer35mm from '@/assets/equipments/FILM PROCESSING & LAB EQUIPMENT/35mm Model C Printer.webp';
import arriFilmRecorder from '@/assets/equipments/FILM PROCESSING & LAB EQUIPMENT/Arri Film Recorder.webp';
import bellHowellPrinter from '@/assets/equipments/FILM PROCESSING & LAB EQUIPMENT/Bell and Howell Printer.webp';
import densitometers from '@/assets/equipments/FILM PROCESSING & LAB EQUIPMENT/Densitometers.webp';
import e6ProcessingMachine from '@/assets/equipments/FILM PROCESSING & LAB EQUIPMENT/E-6 Processing Machine.jpg';
import splitReels from '@/assets/equipments/FILM PROCESSING & LAB EQUIPMENT/Split Reels 16mm & 35mm.webp';

// Film Scanners & Restoration
import imagicaScanner from '@/assets/equipments/Film Scanners & Restoration/2x Imagica Scanner.jpg';
import arriScannerXT from '@/assets/equipments/Film Scanners & Restoration/Arri Scanner XT.jpg';
import arriscannergates from '@/assets/equipments/Film Scanners & Restoration/ArriscannerGates.jpg';
import dftScanity from '@/assets/equipments/Film Scanners & Restoration/DFTScanity.jpg';
import lasergraphicsDirector from '@/assets/equipments/Film Scanners & Restoration/Lasergraphics Director Film Scanner.jpg';
import lipsnerSmithCleaner from '@/assets/equipments/Film Scanners & Restoration/Lipsner Smith Film Cleaner.webp';
import northlightScanner from '@/assets/equipments/Film Scanners & Restoration/Northlight Scanner.webp';
import phoenixRestoration from '@/assets/equipments/Film Scanners & Restoration/Phoenix Film Restoration System.webp';
import spirit4kTelecine from '@/assets/equipments/Film Scanners & Restoration/Spirit 4K Telecine.jpg';

// Lenses
import arriMasterPrimes from '@/assets/equipments/LENSES/ARRI Master Primes (Set of 6).webp';
import arriUltraPrimes from '@/assets/equipments/LENSES/ARRI Ultra Primes (Set of 6).webp';
import angenieuxOptimo1540 from '@/assets/equipments/LENSES/Angenieux Optimo 15-40.webp';
import angenieuxOptimo17120 from '@/assets/equipments/LENSES/Angenieux Optimo 17-120.webp';
import angenieuxOptimo24290 from '@/assets/equipments/LENSES/Angenieux Optimo 24-290mm.webp';
import canonBroadcastLenses from '@/assets/equipments/LENSES/Canon Broadcast Lenses.webp';
import canonCNE from '@/assets/equipments/LENSES/Canon CN-E Serie.webp';
import cooke18100 from '@/assets/equipments/LENSES/Cooke 18-100 T3.webp';
import fujinonBroadcast from '@/assets/equipments/LENSES/Fujinon Broadcast Lenses.webp';

// Projectors
import barcoDP90 from '@/assets/equipments/PROJECTORS/Barco 2K DP90 Projector.webp';
import christieCP2220 from '@/assets/equipments/PROJECTORS/Christie CP 2220.jpg';
import christieLaserDCP from '@/assets/equipments/PROJECTORS/Christie Laser DCP Projector.webp';
import necDCI from '@/assets/equipments/PROJECTORS/NEC DCI Projector.webp';
import sony4kDCI from '@/assets/equipments/PROJECTORS/Sony 4K DCI Projector.webp';

// Storage & Systems
import arriStorage from '@/assets/equipments/STORAGE & SYSTEMS/ARRI.jpg';
import avidUnity from '@/assets/equipments/STORAGE & SYSTEMS/Avid Unity 5.1.4 Media Engine.webp';

// Support Equipment
import oconnor2065 from '@/assets/equipments/SUPPORT EQUIPMENT/O\'Connor 2065.webp';
import oconnor2575b from '@/assets/equipments/SUPPORT EQUIPMENT/O\'Connor 2575B Tripod.webp';
import ronfordTripod from '@/assets/equipments/SUPPORT EQUIPMENT/Ronford Tripod.webp';
import vintenVector from '@/assets/equipments/SUPPORT EQUIPMENT/Vinten Vector 70 Pedestal.webp';

export const categories = [
  'All',
  'Cameras',
  'Lenses',
  'Color Grading & VFX',
  'Film Scanners & Restoration',
  'Film Processing & Lab',
  'Projectors',
  'Support Equipment',
  'Storage & Systems',
];

export const equipment = [
  // CAMERAS
  {
    id: 'arri-435',
    name: 'ARRI 435 Film Camera',
    category: 'Cameras',
    image: arri435,
    description: 'Industry-standard 35mm film camera known for exceptional image quality and reliability on high-end productions.',
  },

  // COLOR GRADING & VFX
  {
    id: 'autodesk-flame-2015',
    name: 'Autodesk Flame Premium 2015',
    category: 'Color Grading & VFX',
    image: autodeskFlame,
    description: 'Professional visual effects, finishing, and color grading workstation used in high-end post-production.',
  },
  {
    id: 'autodesk-inferno',
    name: 'Autodesk Inferno',
    category: 'Color Grading & VFX',
    image: autodeskInferno,
    description: 'High-performance compositing and effects system for feature film and broadcast post-production.',
  },
  {
    id: 'autodesk-smoke',
    name: 'Autodesk Smoke',
    category: 'Color Grading & VFX',
    image: autodeskSmoke,
    description: 'Integrated editorial and finishing system combining NLE with professional VFX tools.',
  },
  {
    id: 'color-master-analyzer',
    name: 'Color Master Analyzer',
    category: 'Color Grading & VFX',
    image: colorMasterAnalyzer,
    description: 'Precision color analysis tool for consistent grading across long-form productions.',
  },
  {
    id: 'digital-vision-nucoda-hd',
    name: 'Digital Vision Nucoda HD',
    category: 'Color Grading & VFX',
    image: digitalVisionNucoda,
    description: 'Advanced color grading and restoration platform with real-time HDR monitoring.',
  },
  {
    id: 'nucoda-colorgrading-system',
    name: 'Nucoda Colorgrading System',
    category: 'Color Grading & VFX',
    image: nucodaColorgrading,
    description: 'Full-featured color grading suite supporting multiple formats from SD to 4K.',
  },
  {
    id: 'truelight-baselight',
    name: 'Truelight Baselight 1, 2, HD',
    category: 'Color Grading & VFX',
    image: truelightBaselight,
    description: 'Baselight grading system with Truelight color science for accurate on-set to post pipeline.',
  },

  // FILM PROCESSING
  {
    id: 'schmitzer-liquid-gate',
    name: '16mm Model C Schmitzer Liquid Gate',
    category: 'Film Processing & Lab',
    image: schmitzerLiquidGate,
    description: 'Wet-gate 16mm film printer that eliminates surface scratches during optical printing.',
  },
  {
    id: '35mm-cinevator',
    name: '35mm Cinevator',
    category: 'Film Processing & Lab',
    image: cinevator35mm,
    description: 'Continuous 35mm film processing machine for developing negative, positive and reversal stocks.',
  },
  {
    id: '35mm-model-c-printer',
    name: '35mm Model C Printer',
    category: 'Film Processing & Lab',
    image: printer35mm,
    description: 'Classic step-contact 35mm optical printer for duplication and effects work.',
  },
  {
    id: 'arri-film-recorder',
    name: 'Arri Film Recorder',
    category: 'Film Processing & Lab',
    image: arriFilmRecorder,
    description: 'High-precision laser film recorder for recording digital files back to 35mm film.',
  },
  {
    id: 'bell-howell-printer',
    name: 'Bell and Howell Printer',
    category: 'Film Processing & Lab',
    image: bellHowellPrinter,
    description: 'Continuous contact printer for 16mm and 35mm film duplication.',
  },
  {
    id: 'densitometers',
    name: 'Densitometers',
    category: 'Film Processing & Lab',
    image: densitometers,
    description: 'Precision instruments for measuring optical density of film to ensure consistent exposure.',
  },
  {
    id: 'e6-processing-machine',
    name: 'E-6 Processing Machine',
    category: 'Film Processing & Lab',
    image: e6ProcessingMachine,
    description: 'Automated E-6 chemistry processor for color reversal (slide) film development.',
  },
  {
    id: 'split-reels',
    name: 'Split Reels 16mm & 35mm',
    category: 'Film Processing & Lab',
    image: splitReels,
    description: 'Professional split reels for winding, inspecting, and splicing 16mm and 35mm film.',
  },

  // FILM SCANNERS & RESTORATION
  {
    id: 'imagica-scanner',
    name: '2x Imagica Scanner',
    category: 'Film Scanners & Restoration',
    image: imagicaScanner,
    description: 'High-resolution film scanner supporting 16mm and 35mm for 2K/4K digitization.',
  },
  {
    id: 'arri-scanner-xt',
    name: 'Arri Scanner XT',
    category: 'Film Scanners & Restoration',
    image: arriScannerXT,
    description: 'Ultra-high resolution scanner for 16mm, 35mm and 65mm film up to 6.5K.',
  },
  {
    id: 'arri-scanner-gates',
    name: 'Arri Scanner Gates',
    category: 'Film Scanners & Restoration',
    image: arriscannergates,
    description: 'Precision film gates for ARRI scanners ensuring stable and accurate film transport.',
  },
  {
    id: 'dft-scanity',
    name: 'DFT Scanity',
    category: 'Film Scanners & Restoration',
    image: dftScanity,
    description: 'High-speed film scanner capable of 4K scanning at real-time speeds for archival and restoration.',
  },
  {
    id: 'lasergraphics-director',
    name: 'Lasergraphics Director Film Scanner',
    category: 'Film Scanners & Restoration',
    image: lasergraphicsDirector,
    description: 'Precision scanner optimized for frame-by-frame archival scanning of 8mm to 35mm film.',
  },
  {
    id: 'lipsner-smith-cleaner',
    name: 'Lipsner Smith Film Cleaner',
    category: 'Film Scanners & Restoration',
    image: lipsnerSmithCleaner,
    description: 'Ultrasonic film cleaning system that removes contaminants before scanning or printing.',
  },
  {
    id: 'northlight-scanner',
    name: 'Northlight Scanner',
    category: 'Film Scanners & Restoration',
    image: northlightScanner,
    description: 'High-end pin-registered scanner delivering 4K resolution with exceptional colour accuracy.',
  },
  {
    id: 'phoenix-restoration',
    name: 'Phoenix Film Restoration System',
    category: 'Film Scanners & Restoration',
    image: phoenixRestoration,
    description: 'Automated AI-assisted film restoration platform for scratch, dirt and flicker removal.',
  },
  {
    id: 'spirit-4k-telecine',
    name: 'Spirit 4K Telecine',
    category: 'Film Scanners & Restoration',
    image: spirit4kTelecine,
    description: 'Thomson Spirit 4K telecine system for real-time film-to-digital transfer at 4K resolution.',
  },

  // LENSES
  {
    id: 'arri-master-primes',
    name: 'ARRI Master Primes (Set of 6)',
    category: 'Lenses',
    image: arriMasterPrimes,
    description: 'Premium prime lens set with T1.3 aperture, renowned for sharpness and minimal breathing.',
  },
  {
    id: 'arri-ultra-primes',
    name: 'ARRI Ultra Primes (Set of 6)',
    category: 'Lenses',
    image: arriUltraPrimes,
    description: 'Compact PL-mount primes delivering consistent coverage and colour across the set.',
  },
  {
    id: 'angenieux-optimo-15-40',
    name: 'Angenieux Optimo 15-40mm',
    category: 'Lenses',
    image: angenieuxOptimo1540,
    description: 'Wide-range zoom lens ideal for handheld documentary and fast-moving narrative work.',
  },
  {
    id: 'angenieux-optimo-17-120',
    name: 'Angenieux Optimo 17-120mm',
    category: 'Lenses',
    image: angenieuxOptimo17120,
    description: '7:1 zoom ratio covering wide to medium telephoto — the workhorse of cinema zooms.',
  },
  {
    id: 'angenieux-optimo-24-290',
    name: 'Angenieux Optimo 24-290mm',
    category: 'Lenses',
    image: angenieuxOptimo24290,
    description: 'Long-range zoom for sports, wildlife, and action cinematography.',
  },
  {
    id: 'canon-broadcast-lenses',
    name: 'Canon Broadcast Lenses',
    category: 'Lenses',
    image: canonBroadcastLenses,
    description: 'High-performance broadcast zoom lenses for ENG, studio, and live event production.',
  },
  {
    id: 'canon-cn-e',
    name: 'Canon CN-E Serie',
    category: 'Lenses',
    image: canonCNE,
    description: 'Cinema prime lenses with electronic iris control and remarkable resolving power.',
  },
  {
    id: 'cooke-18-100',
    name: 'Cooke 18-100mm T3',
    category: 'Lenses',
    image: cooke18100,
    description: 'Classic Cooke zoom lens with the iconic warm "Cooke Look" loved by cinematographers.',
  },
  {
    id: 'fujinon-broadcast',
    name: 'Fujinon Broadcast Lenses',
    category: 'Lenses',
    image: fujinonBroadcast,
    description: 'Professional broadcast zoom lenses with superb optical performance and servo control.',
  },

  // PROJECTORS
  {
    id: 'barco-dp90',
    name: 'Barco 2K DP90 Projector',
    category: 'Projectors',
    image: barcoDP90,
    description: 'DCI-compliant 2K digital cinema projector for professional screening rooms.',
  },
  {
    id: 'christie-cp-2220',
    name: 'Christie CP 2220',
    category: 'Projectors',
    image: christieCP2220,
    description: '2K DLP cinema projector with 20,000 lumens output for large-format screening.',
  },
  {
    id: 'christie-laser-dcp',
    name: 'Christie Laser DCP Projector',
    category: 'Projectors',
    image: christieLaserDCP,
    description: 'RGB laser DCI projector delivering exceptional brightness and colour volume.',
  },
  {
    id: 'nec-dci',
    name: 'NEC DCI Projector',
    category: 'Projectors',
    image: necDCI,
    description: 'Compact yet powerful DCI-certified projector suitable for preview theatres.',
  },
  {
    id: 'sony-4k-dci',
    name: 'Sony 4K DCI Projector',
    category: 'Projectors',
    image: sony4kDCI,
    description: 'Native 4K SXRD laser projector with wide colour gamut and HDR capability.',
  },

  // STORAGE & SYSTEMS
  {
    id: 'arri-storage',
    name: 'ARRI Media System',
    category: 'Storage & Systems',
    image: arriStorage,
    description: 'ARRI on-set media management and storage solution for digital negative workflows.',
  },
  {
    id: 'avid-unity',
    name: 'Avid Unity 5.1.4 Media Engine',
    category: 'Storage & Systems',
    image: avidUnity,
    description: 'Shared storage server enabling collaborative real-time Avid editing across multiple workstations.',
  },

  // SUPPORT EQUIPMENT
  {
    id: 'oconnor-2065',
    name: "O'Connor 2065",
    category: 'Support Equipment',
    image: oconnor2065,
    description: 'Professional fluid head offering silky-smooth pan and tilt for cinematic camera movement.',
  },
  {
    id: 'oconnor-2575b',
    name: "O'Connor 2575B Tripod",
    category: 'Support Equipment',
    image: oconnor2575b,
    description: 'Heavy-duty carbon fibre tripod system designed for large cinema cameras.',
  },
  {
    id: 'ronford-tripod',
    name: 'Ronford Tripod',
    category: 'Support Equipment',
    image: ronfordTripod,
    description: 'Studio-grade tripod system providing rock-solid stability for heavy lens configurations.',
  },
  {
    id: 'vinten-vector-70',
    name: 'Vinten Vector 70 Pedestal',
    category: 'Support Equipment',
    image: vintenVector,
    description: 'Motorised studio pedestal with smooth height adjustment for live and studio productions.',
  },
];

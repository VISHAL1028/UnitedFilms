import { Film, Clapperboard, Settings, Wand2, Video, Camera } from 'lucide-react';

// Import videos for Film Production
import filmHero from '@/assets/Film Production Page/actor_shooting_cafe.mp4';
import filmSplit from '@/assets/Film Production Page/camera_handling.mp4';
import filmParallax from '@/assets/Film Production Page/crew_shooting.mp4';

// Import videos for Post Production
import postHero from '@/assets/Post Production Page/VfX_editing_screen.mp4';
import postSplit from '@/assets/Post Production Page/editing_on_monitor.mp4';
import postParallax from '@/assets/Post Production Page/working_monitor.mp4';

// Import videos for Film Restoration
import restoHero from '@/assets/Film Restoration Page/reststoration.mp4';
import restoSplit from '@/assets/Film Restoration Page/bollywood.mp4';
import restoParallax from '@/assets/Film Restoration Page/reststoration.mp4'; // reused

// Import videos for 360
import vrHero from '@/assets/360° 3D PRODUCTION/video360.mp4';
import vrSplit from '@/assets/360° 3D PRODUCTION/360 degree.mp4';
import vrParallax from '@/assets/360° 3D PRODUCTION/15159903_3840_2160_60fps.mp4';

// Import videos for Relighting
import lightHero from '@/assets/RELIGHTING WITH FLAME/light.mp4';
import lightSplit from '@/assets/RELIGHTING WITH FLAME/7679427-uhd_4096_2160_25fps.mp4';
import lightParallax from '@/assets/RELIGHTING WITH FLAME/14647672_2160_3840_50fps.mp4';


export const services = [
  {
    id: 'film-production',
    icon: Film,
    title: 'Film Production',
    tagline: 'From Concept to Screen',
    description:
      'Full-service motion picture production from concept to delivery. Music videos, commercials, documentaries, and feature films.',
    longDescription:
      'We offer end-to-end film production services covering everything from initial concept development to final delivery. Our experienced crew handles all aspects of production — scripting, location scouting, casting, directing, and cinematography — ensuring your project is executed with precision and creativity.',
    features: ['Pre-production planning', 'On-set production', 'Location scouting'],
    details: [
      'Script development and storyboarding',
      'Professional crew and equipment',
      'On-location and studio shoots',
      'Music videos and commercials',
      'Documentaries and feature films',
      'Drone and aerial cinematography',
    ],
    videoPath: filmHero,
    splitVideo: filmSplit,
    parallaxVideo: filmParallax,
    splitSectionTitle: "Cinematic Excellence",
    splitSectionText: "We use industry-standard equipment and seamless workflows to deliver stunning visuals. Our extensive experience in film production ensures your project meets the highest professional standards.",
    parallaxTitle: "Create. Shoot. Deliver.",
    parallaxText: "Bringing your creative vision to life with world-class film production."
  },
  {
    id: 'post-production',
    icon: Clapperboard,
    title: 'Post Production',
    tagline: 'Polish Your Vision',
    description:
      'State-of-the-art editing, color grading, and visual effects using industry-standard tools like Flame and Nucoda.',
    longDescription:
      'Our post-production studio is equipped with the latest technology to transform raw footage into a cinematic masterpiece. From precise editing to stunning color grading and VFX, we bring the finishing touches that make your project stand out.',
    features: ['Color correction', 'Visual effects', 'Sound design'],
    details: [
      'Non-linear editing (Premiere, Avid)',
      'Color grading with DaVinci Resolve & Nucoda',
      'Visual effects with Flame',
      'Sound design and mixing',
      'Subtitles and closed captions',
      'Delivery in any format (DCP, H.264, ProRes)',
    ],
    videoPath: postHero,
    splitVideo: postSplit,
    parallaxVideo: postParallax,
    splitSectionTitle: "Precision Meets Creativity",
    splitSectionText: "Our top-tier color grading and VFX tools assure every detail is finessed to perfection, culminating in a visual masterpiece that exceeds standard expectations.",
    parallaxTitle: "Edit. Grade. Master.",
    parallaxText: "Taking your footage beyond the ordinary with unmatched post-production capabilities."
  },
  {
    id: 'film-restoration',
    icon: Settings,
    title: 'Film Restoration',
    tagline: 'Bring History Back to Life',
    description:
      'Breathe new life into classic footage with our professional film restoration services. Free test available.',
    longDescription:
      'Our film restoration service uses cutting-edge scanning and digital repair technologies to breathe new life into aging or damaged footage. Whether you have archival 8mm reels or vintage 35mm prints, we can scan, clean, and restore them to their former glory — or better.',
    features: ['4K scanning', 'Damage repair', 'Color restoration'],
    details: [
      '4K and 8K film scanning',
      'Gate weave and flicker removal',
      'Dust and scratch repair',
      'Color reconstruction',
      'Grain management',
      'Free test scan available',
    ],
    videoPath: restoHero,
    splitVideo: restoSplit,
    parallaxVideo: restoParallax,
    splitSectionTitle: "Reviving Classics",
    splitSectionText: "Modern scanning and digital repair algorithms bring damaged or aging film back to its original aesthetic. We preserve the authentic look while removing physical decay.",
    parallaxTitle: "Scan. Clean. Preserve.",
    parallaxText: "Digitally rescuing historical and beloved footage for future generations."
  },
  {
    id: 'equipment-rental',
    route: '/equipment',
    icon: Camera,
    title: 'Equipment Rental',
    tagline: 'Professional Gear for Every Shoot',
    description:
      'Access the latest professional cinema cameras, lenses, lighting, and grip equipment for your productions.',
    longDescription:
      'Our equipment rental service gives you access to a curated selection of professional cinema cameras, anamorphic and prime lens sets, lighting rigs, and grip gear. All equipment is maintained to the highest standards and available with or without an operator.',
    features: ['Cinema cameras', 'Professional lenses', 'Lighting & grip'],
    details: [
      'Phantom Flex 4K (high-speed)',
      'ARRI, RED, Sony cinema cameras',
      'Vintage and modern lens sets',
      'LED and HMI lighting packages',
      'Underwater and splash bags',
      'Delivery and on-set technician available',
    ],
  },
  {
    id: '360-3d-production',
    icon: Video,
    title: '360° 3D Production',
    tagline: 'Immersive Storytelling',
    description:
      'Immersive 360-degree and 3D video production for virtual reality experiences and cutting-edge content.',
    longDescription:
      'Step into the future of storytelling with our 360° and 3D production capabilities. We create fully immersive virtual reality content for marketing, entertainment, training, and more — giving your audience an experience they will never forget.',
    features: ['VR content', '3D filming', 'Immersive experiences'],
    details: [
      '360° spherical video capture',
      'Stereoscopic 3D production',
      'VR headset-ready delivery',
      'Interactive hotspot integration',
      'Live 360° streaming',
      'Post-stitching and stabilization',
    ],
    videoPath: vrHero,
    splitVideo: vrSplit,
    parallaxVideo: vrParallax,
    splitSectionTitle: "Immersive Storytelling",
    splitSectionText: "We build fully immersive virtual reality environments and interactive videos that place your audience right into the action, allowing for unguided exploration.",
    parallaxTitle: "Capture. Stitch. Immerse.",
    parallaxText: "Step into the future of media with our cutting-edge 360° VR equipment and stereoscopic arrays."
  },
  {
    id: 'relighting-with-flame',
    icon: Wand2,
    title: 'Relighting with Flame',
    tagline: 'Perfect Lighting in Post',
    description:
      'Save time and achieve perfect lighting in post using our Flame relighting workstation.',
    longDescription:
      "Our Flame relighting workstation lets you change, add, or completely redesign the lighting of any shot after it's been filmed. This powerful technique saves costly reshoots and opens up new creative possibilities that weren't achievable on set.",
    features: ['Virtual lighting', 'Scene enhancement', 'Real-time preview'],
    details: [
      'Full lighting redesign in post',
      'Add or remove light sources',
      'Match lighting between shots',
      'Real-time render preview',
      'Integration with VFX pipeline',
      'Saves costly reshoots',
    ],
    videoPath: lightHero,
    splitVideo: lightSplit,
    parallaxVideo: lightParallax,
    splitSectionTitle: "Perfect Lighting in Post",
    splitSectionText: "Adjusting scenes after the shoot allows for unmatched creative control over mood and atmosphere, completely circumventing typical physical constraints.",
    parallaxTitle: "Shape. Enhance. Illuminate.",
    parallaxText: "Redefining the look and feel of your shots without the cost of reshoots."
  },
];
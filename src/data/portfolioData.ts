import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Denis Wahyu Rizqullah',
    shortName: 'Denis W. Rizqullah',
    role: 'Software & Hardware Systems Engineer',
    degree: 'B.Eng. in Computer Engineering — Universitas Brawijaya',
    tagline:
      'Developing reliable and efficient systems across software and embedded hardware.',
    location: 'Malang, Indonesia',
    email: 'deniswahyu26@gmail.com',
    phone: '+62 823 3160 3633',
    status: 'Available for Engineering Roles',
    avatarLogo: '/assets/logo/d1.webp',
    bioParagraphs: [
      'I am a Computer Engineering graduate specializing in building software-hardware integrated systems. My engineering work spans IoT architecture, embedded firmware (ESP8266/NodeMCU, Raspberry Pi), computer vision & machine learning, and modern web applications.',
      'I enjoy bridging the gap between low-level technical execution and intuitive user experience. Whether calibrating NEMA 17 stepper actuation over wireless networks at Telkomsel, deploying neural networks on edge devices over MQTT, or optimizing mobile image processing pipelines, I focus on structured, measurable, and maintainable solutions.',
      'Beyond systems engineering, I explore photography and emerging technologies—bringing visual precision and human-centered clarity to every product I build.',
    ],
    metrics: [
      {
        label: 'Engineered Systems',
        value: '7+ Projects',
        detail: 'Across IoT, Embedded, Computer Vision & Web',
      },
      {
        label: 'Industry & Research',
        value: 'Telkomsel & J-PTIIK',
        detail: 'Telecom infrastructure intern & published researcher',
      },
      {
        label: 'Core Stack',
        value: 'Python • C++ • JS',
        detail: 'End-to-end from microcontroller firmware to UI',
      },
    ],
    resumes: [
      {
        label: 'Resume — Software & Web',
        sublabel: 'W_CV_Denis Wahyu Rizqullah.pdf',
        url: '/assets/resume/W_CV_Denis Wahyu Rizqullah.pdf',
      },
      {
        label: 'Resume — AI & Machine Learning',
        sublabel: 'ML_CV_Denis Wahyu Rizqullah.pdf',
        url: '/assets/resume/ML_CV_Denis Wahyu Rizqullah.pdf',
      },
    ],
    socials: [
      {
        label: 'GitHub',
        url: 'https://github.com/DenisWahyuRizqullah',
        handle: '@DenisWahyuRizqullah',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/deniswahyurizqullah',
        handle: 'in/deniswahyurizqullah',
      },
      {
        label: 'Instagram',
        url: 'https://instagram.com/denis_hhmm',
        handle: '@denis_hhmm',
      },
    ],
  },

  experiences: [
    {
      id: 'exp-telkomsel',
      role: 'Software and Hardware Developer Intern',
      organization: 'PT Telekomunikasi Selular (Telkomsel)',
      period: 'Feb 2024 – Jun 2024',
      location: 'Malang, Indonesia',
      type: 'Industry Internship (MSIB)',
      logo: '/assets/logo/telkomsel.png',
      highlights: [
        'Engineered a wireless antenna azimuth/orientation control prototype allowing field technicians to align telecommunication antennas from ground level without climbing towers.',
        'Programmed a NodeMCU microcontroller as a standalone WiFi access point serving an embedded web control panel over a local IP.',
        'Integrated a NEMA 17 stepper motor (200 steps/rev) with gear reduction to translate directional web inputs into high-precision clockwise and counterclockwise mechanical rotation.',
        'Validated wireless stability, angular accuracy, and operational safety under field testing conditions.',
      ],
      tags: ['C++', 'NodeMCU (ESP8266)', 'Embedded Web UI', 'HTML/CSS', 'NEMA 17 Stepper'],
      reportUrl: '/assets/report/Laporan_magang.pdf',
      reportLabel: 'Internship Report (PDF)',
    },
    {
      id: 'exp-jptiik',
      role: 'Computer Vision & Mobile Systems Researcher',
      organization: 'Universitas Brawijaya (J-PTIIK Publication)',
      period: 'Aug 2024 – Dec 2024',
      location: 'Malang, Indonesia',
      type: 'Academic Research',
      logo: '/assets/logo/mandiri.png',
      highlights: [
        'Developed a smartphone-based microscopic blood cell detection and classification application using lightweight Template Matching.',
        'Curated and preprocessed microscopic blood smear datasets covering neutrophils, lymphocytes, monocytes, and eosinophils.',
        'Benchmarked multi-template configurations and correlation thresholds—identifying an optimal operating point of 4 templates at a 0.6 threshold for mobile CPU efficiency.',
        'Authored and published the complete engineering paper in Jurnal Pengembangan Teknologi Informasi dan Ilmu Komputer (J-PTIIK).',
      ],
      tags: ['Python', 'Kotlin', 'Template Matching', 'Image Processing', 'Mobile Computing'],
      reportUrl: '/assets/report/J-PTIIK Paper_Denis Wahyu Rizqullah.pdf',
      reportLabel: 'J-PTIIK Published Paper (PDF)',
    },
    {
      id: 'exp-agri-ai',
      role: 'Edge AI & IoT Systems Developer',
      organization: 'Smart Agriculture Research — Universitas Brawijaya',
      period: 'Aug 2024 – Nov 2024',
      location: 'Malang, Indonesia',
      type: 'Applied Systems Project',
      logo: '/assets/logo/mandiri.png',
      highlights: [
        'Designed a distributed IoT + Edge AI architecture combining ESP8266 sensor nodes (DHT11 temperature/humidity & water sensors) with a Raspberry Pi 3B local MQTT broker.',
        'Deployed an Artificial Neural Network (ANN) model directly on the Raspberry Pi 3B to run offline short-term weather inference for automated plantation irrigation scheduling.',
        'Implemented sensor normalization and noise filtering to maintain stable inference without external cloud dependencies.',
      ],
      tags: ['Python', 'C++', 'ANN / Machine Learning', 'Raspberry Pi 3B', 'ESP8266', 'MQTT'],
    },
    {
      id: 'exp-village-sme',
      role: 'Web Platform Developer (Community Digitalization)',
      organization: 'Narto Jati Furniture — Village SME Digital Branding',
      period: 'Jun 2023 – Jul 2023',
      location: 'Sumberkramat, Probolinggo',
      type: 'Community Engagement',
      logo: '/assets/logo/mandiri.png',
      highlights: [
        'Conducted on-site interviews and product photography for rural teak furniture artisans to establish their first digital sales presence.',
        'Configured domain, cPanel hosting, SSL encryption, and a customized WordPress catalog tailored for national and export buyer inquiries.',
      ],
      tags: ['WordPress', 'cPanel', 'SSL/HTTPS', 'Digital Branding'],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'WiFi-Based Antenna Rotator Prototype',
      subtitle: 'Remote Telecommunication Antenna Alignment System — Telkomsel',
      date: 'Feb – Jun 2024',
      location: 'Malang, Indonesia',
      description:
        'Wireless microcontroller-driven stepper actuation system enabling ground-level technicians to rotate and align telecommunication antennas via an embedded web interface.',
      tags: ['IoT / Embedded', 'C++', 'NodeMCU', 'NEMA 17', 'HTML/CSS'],
      category: 'IoT & Embedded',
      featured: true,
      logo: '/assets/logo/telkomsel.png',
      caseStudy: {
        about: [
          'Developed during my internship at Telkomsel as a Software and Hardware Developer, this project delivers a wireless antenna orientation control system that removes the need for field technicians to climb communication towers for routine alignment.',
          'The unit operates a NodeMCU microcontroller with built-in WiFi as a standalone local access point, bridging a responsive web interface directly to a mechanical stepper actuator.',
        ],
        background: [
          'Conventional antenna maintenance requires technicians to physically climb towers to adjust azimuth angles—introducing high safety risks, prolonged downtime, and recurring operational costs.',
          'A ground-level wireless control mechanism allows rapid, repeatable angular adjustments while keeping personnel safely on the ground.',
        ],
        objectives: [
          'Design and implement a wireless control system for remote antenna direction adjustment.',
          'Configure a NodeMCU microcontroller as a self-contained WiFi access point and web server.',
          'Build an intuitive web-based directional controller accessible from any technician smartphone.',
          'Drive accurate clockwise and counterclockwise mechanical rotation using a geared NEMA 17 stepper motor.',
        ],
        methodology: [
          'The NodeMCU hosts an authenticated WiFi hotspot and serves an HTML/CSS directional control interface over a local IP address.',
          'Directional button commands (positive for clockwise, negative for counterclockwise angles) are transmitted over HTTP to the microcontroller firmware.',
          'A NEMA 17 stepper motor (200 steps per revolution) paired with a gear reduction assembly translates pulse sequences into fine-grained angular rotation.',
        ],
        challenge: [
          'Maintaining reliable wireless session stability while driving high-current stepper motor coils without voltage drops or step slippage.',
          'Solved by isolating motor power delivery, calibrating pulse timing in C++ firmware, and introducing mechanical gear reduction for smooth torque transfer.',
        ],
        images: [
          '/assets/img/telkomsel1.webp',
          '/assets/img/telkomsel2.webp',
          '/assets/img/telkomsel3.jpg',
          '/assets/img/telkomsel4.jpeg',
          '/assets/img/telkomsel5.jpeg',
        ],
        reportUrl: '/assets/report/Laporan_magang.pdf',
        reportLabel: 'Read Full Internship Report (PDF)',
      },
    },
    {
      id: 2,
      title: 'Red Blood Cell Detection System',
      subtitle: 'Smartphone Microscopic Analysis via Template Matching',
      date: 'Aug – Dec 2024',
      location: 'Malang, Indonesia',
      description:
        'Mobile computer vision system that detects and classifies microscopic blood cell regions on resource-constrained smartphones using optimized multi-template matching.',
      tags: ['Python', 'Kotlin', 'Template Matching', 'TensorFlow/Keras', 'Computer Vision'],
      category: 'Computer Vision & Machine Learning',
      featured: true,
      logo: '/assets/logo/mandiri.png',
      caseStudy: {
        about: [
          'A smartphone-based microscopic blood cell detection application designed to automate cell localization and classification without requiring expensive laboratory workstation GPUs.',
        ],
        background: [
          'Manual microscopic blood cell counting in clinical laboratories is labor-intensive and susceptible to observer fatigue. Meanwhile, heavy deep learning detectors often exceed the compute and thermal envelopes of entry-level mobile phones.',
          'Combining multi-template matching with mobile computing provides deterministic, low-latency cell detection suitable for point-of-care environments.',
        ],
        objectives: [
          'Develop a smartphone-compatible blood cell detection pipeline for microscopic smear images.',
          'Implement multi-orientation template matching to localize blood cells with bounding boxes.',
          'Empirically tune template counts and similarity thresholds to maximize accuracy-to-latency ratio.',
          'Broaden accessibility of automated hematology screening in resource-limited clinics.',
        ],
        methodology: [
          'Microscopic blood images containing neutrophils, lymphocytes, monocytes, and eosinophils are loaded through the mobile interface and normalized.',
          'The detection engine slides curated cell templates across input frames, computing similarity scores and rendering bounding boxes where responses exceed the threshold.',
          'Systematic benchmarking across template bank sizes and threshold values demonstrated optimal performance using 4 templates at a 0.6 correlation threshold.',
        ],
        challenge: [
          'Balancing false-positive suppression against recall when cells exhibit staining variations and overlapping boundaries on mobile processors.',
          'Solved by systematically evaluating threshold sensitivity curves (selecting 0.6) and curating 4 representative morphological templates.',
        ],
        images: [
          '/assets/img/mandiri/red-blood/rb1.jpeg',
          '/assets/img/mandiri/red-blood/rb2.jpeg',
          '/assets/img/mandiri/red-blood/rb3.jpeg',
          '/assets/img/mandiri/red-blood/rb4.jpeg',
        ],
        reportUrl: '/assets/report/J-PTIIK Paper_Denis Wahyu Rizqullah.pdf',
        reportLabel: 'Read Published J-PTIIK Paper (PDF)',
      },
    },
    {
      id: 5,
      title: 'Weather Prediction for Plantations',
      subtitle: 'Edge ANN Inference & MQTT Smart Irrigation System',
      date: 'Aug – Nov 2024',
      location: 'Universitas Brawijaya, Malang',
      description:
        'Edge AI smart agriculture system combining ESP8266 telemetry nodes, MQTT messaging, and an Artificial Neural Network running locally on a Raspberry Pi 3B.',
      tags: ['Python', 'C++', 'Machine Learning (ANN)', 'Raspberry Pi 3B', 'ESP8266', 'MQTT'],
      category: 'IoT & Embedded',
      featured: true,
      logo: '/assets/logo/mandiri.png',
      caseStudy: {
        about: [
          'An integrated smart plantation system that pairs field environmental telemetry with on-device Artificial Neural Network (ANN) weather prediction to automate irrigation decisions and conserve water.',
        ],
        background: [
          'Fixed-schedule plantation irrigation ignores real-time microclimate shifts and imminent rainfall, leading to water waste and suboptimal crop hydration.',
          'Running lightweight neural inference on a local edge broker eliminates cloud connectivity requirements in remote agricultural zones.',
        ],
        objectives: [
          'Build a short-term microclimate weather prediction model using an Artificial Neural Network (ANN).',
          'Deploy the trained ANN model on a Raspberry Pi 3B acting as both edge compute unit and MQTT broker.',
          'Acquire real-time temperature, humidity (DHT11), and water sensor telemetry via ESP8266 nodes.',
          'Automate irrigation actuation decisions locally to reduce water consumption.',
        ],
        methodology: [
          'ESP8266 field nodes sample DHT11 and water sensors periodically and publish structured payloads to topic channels over MQTT.',
          'A Raspberry Pi 3B receives the MQTT streams, normalizes the sensor vectors, and feeds them into the local ANN inference pipeline.',
          'The resulting short-term weather classification triggers or postpones irrigation cycles automatically without external internet dependency.',
        ],
        challenge: [
          'Running stable neural network inference on a resource-constrained Raspberry Pi 3B while handling noisy outdoor sensor readings.',
          'Addressed by pruning the ANN layer dimensions for low-memory execution and implementing moving-average sensor filtering prior to inference.',
        ],
      },
    },
    {
      id: 4,
      title: 'IoT Home Fire & Gas Monitoring',
      subtitle: 'Multi-House Real-Time Emergency Telemetry over MQTT',
      date: 'Oct 2025',
      location: 'Malang, Indonesia',
      description:
        'Residential safety network using ESP8266 flame and gas sensor nodes with MQTT house-ID routing to provide security personnel with instant hazard localization.',
      tags: ['IoT / Embedded', 'C++', 'ESP8266', 'MQTT', 'Real-Time Dashboard'],
      category: 'IoT & Embedded',
      featured: false,
      logo: '/assets/logo/mandiri.png',
      caseStudy: {
        about: [
          'An IoT-based residential safety network engineered for housing complexes to detect early fire and gas leak hazards and alert security teams with exact house-level identification.',
        ],
        background: [
          'Standard residential CCTV systems only capture visible events and cannot sense invisible gas leaks or pre-ignition heat spikes inside homes.',
          'Supplementing security posts with continuous environmental telemetry drastically reduces emergency response times.',
        ],
        objectives: [
          'Develop an ESP8266 sensor node integrating flame and combustible gas detectors.',
          'Stream multi-house telemetry over lightweight MQTT publish/subscribe topics.',
          'Embed unique house IDs into every packet for immediate physical address mapping.',
          'Provide security personnel with a clean real-time situational dashboard.',
        ],
        methodology: [
          'Each residential unit runs an ESP8266 microcontroller polling flame and gas sensors continuously.',
          'Telemetry is published to a central MQTT broker tagged with a immutable House ID corresponding to the unit address.',
          'The security dashboard subscribes to hazard topics, highlighting anomalous units immediately so guards can cross-reference CCTV feeds and dispatch help.',
        ],
        challenge: [
          'Ensuring zero-ambiguity house localization and reliable concurrent message delivery across multiple residential nodes.',
          'Solved via strict topic namespacing per House ID and lightweight MQTT QoS configuration.',
        ],
      },
    },
    {
      id: 6,
      title: 'ResNet-50 + ViT Hybrid Vision Architecture',
      subtitle: 'Convolutional Feature Extraction with Vision Transformer Backbone',
      date: '2024',
      location: 'Malang, Indonesia',
      description:
        'Hybrid computer vision pipeline combining ResNet-50 spatial feature maps with Vision Transformer (ViT) self-attention blocks for image classification.',
      tags: ['Computer Vision', 'Python', 'TensorFlow', 'OpenCV', 'ResNet-50', 'ViT'],
      category: 'Computer Vision & Machine Learning',
      featured: false,
      logo: '/assets/logo/mandiri.png',
    },
    {
      id: 3,
      title: 'Village SMEs Digital Branding Platform',
      subtitle: 'Web Catalog & Export Presence for Narto Jati Furniture',
      date: 'Jun – Jul 2023',
      location: 'Sumberkramat, Probolinggo',
      description:
        'Digital branding and product showcase platform built for rural teak furniture artisans to expand market reach beyond local word-of-mouth channels.',
      tags: ['WordPress', 'cPanel', 'SSL', 'Web Platform'],
      category: 'Web Platform',
      featured: false,
      logo: '/assets/logo/mandiri.png',
      caseStudy: {
        about: [
          'A digital branding initiative for Narto Jati Furniture in Sumberkramat Village, Probolinggo, transforming a traditional rural craft business into a discoverable online brand.',
        ],
        background: [
          'Rural SMEs often produce export-grade craftsmanship but remain constrained by word-of-mouth marketing and limited digital infrastructure.',
        ],
        objectives: [
          'Build an accessible, professional product showcase website for village SMEs.',
          'Document authentic production workflows and product catalogs on-site.',
          'Configure domain, cPanel hosting, and HTTPS security for buyer trust.',
        ],
        methodology: [
          'Conducted multi-day field interviews and photography sessions documenting teak furniture fabrication.',
          'Deployed and customized a fast, mobile-friendly WordPress instance on cPanel with SSL encryption.',
        ],
        challenge: [
          'Structuring content and administration so non-technical business owners can maintain their catalog independently.',
          'Solved by streamlining the CMS layout and organizing clear product categories with direct inquiry channels.',
        ],
        images: [
          '/assets/img/mandiri/website-village/Screenshot_56.png',
          '/assets/img/mandiri/website-village/IMG_0965.jpg',
          '/assets/img/mandiri/website-village/IMG_20230705_135157.jpg',
          '/assets/img/mandiri/website-village/IMG_0993.jpg',
        ],
      },
    },
    {
      id: 7,
      title: 'Biometric Smart Home Lock',
      subtitle: 'Embedded Fingerprint Access Control System',
      date: '2024',
      location: 'Malang, Indonesia',
      description:
        'Microcontroller-based door locking mechanism utilizing optical fingerprint verification and fail-safe solenoid actuation written in C++.',
      tags: ['Embedded System', 'C++', 'Biometric Sensor', 'Microcontroller'],
      category: 'IoT & Embedded',
      featured: false,
      logo: '/assets/logo/mandiri.png',
    },
  ],

  skills: [
    {
      category: 'Engineering Domains',
      code: 'SYS_DOMAINS',
      description: 'Core technical disciplines across hardware-software boundaries.',
      items: [
        'IoT & Embedded Systems Architecture',
        'Image Processing & Computer Vision',
        'Applied Machine Learning (ANN, ViT, ResNet)',
        'Fullstack Web Development',
        'Software Engineering & System Design',
      ],
    },
    {
      category: 'Programming Languages',
      code: 'LANG_RUNTIME',
      description: 'Primary languages used for firmware, ML pipelines, and web interfaces.',
      items: ['Python', 'C++', 'JavaScript / TypeScript', 'HTML5 & CSS3', 'SQL', 'Kotlin'],
    },
    {
      category: 'Hardware, Frameworks & Tools',
      code: 'INFRA_TOOLS',
      description: 'Microcontrollers, libraries, and development environments.',
      items: [
        'ESP8266 / NodeMCU',
        'Raspberry Pi',
        'MQTT Protocol',
        'TensorFlow / Keras & OpenCV',
        'Git & GitHub',
        'Arduino IDE & VS Code',
        'Figma',
        'WordPress & cPanel',
      ],
    },
  ],
};

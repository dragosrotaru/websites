export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  button?: {
    title: string;
    url: string;
    color: "red" | "yellow" | "blue" | "purple";
  };
};

export const Projects: Project[] = [
  {
    title: "ALR CPA",
    description: `
        Built and launched customer success web platform. Updated  hiring process, policies and remote employee support, making 4 successful new hires. Improved SEO, content marketing and launched new analytics, drastically improving web vitals/lighthouse scores. Improved SOPs and infrastructure towards SOC 2 audit. Implemented CRM, sales process and content marketing strategy with AI.
    `,
    image: "rotaru-cpa.png",
    imageAlt: "ALR Accounting Logo",
  },
  {
    title: "PAL Programming Language",
    description: `PAL is a long term Human-AI pair programming languge / IDE research project,
    involving Neurosymbolic AI, HCI, programming language design and knowledge representation.
    It began with a study of the history of computing, an analysis of prior work like Smalltalk Squeak, Lambda Calculus,
    and the works of great thinkers like Ted Nelson and Alan Kay. There are a number of related repos on my github.`,
    image: "pal.png",
    imageAlt: "pal repository screenshot",
    button: {
      url: "https://github.com/dragosrotaru/pal",
      title: "repo",
      color: "purple",
    },
  },
  {
    title: "Anytype",
    description: `end to end encrypted, offline first and open source,
     Anytype is the best privacy focused knowledge management tool you will find.
     As a senior software engineer I helped achieve our public launch objective,
     developing a number of awesome features, fixing bugs and engaging with users on the community forums.`,
    image: "anytype.png",
    imageAlt: "anytype application screenshot",
    button: {
      title: "website",
      url: "https://anytype.io",
      color: "yellow",
    },
  },
  {
    title: "Qualio",
    description: `
        In the first half of my tenure, I helped upgrade our
        core monolith with a high availability containerized architecture
        and ci/cd pipeline on AWS, laying the groundwork for microservices.
        During the second half, I helped develop an application to automate customer onboarding,
        greatly reducing manual work across the company.
    `,
    image: "qualio.svg",
    imageAlt: "Qualio logo",
    button: {
      title: "website",
      url: "https://qualio.com",
      color: "blue",
    },
  },
  {
    title: "Emrys Analytics",
    description: `
        I led the development of our underwriting engine and application, facilitating insurance policies for 84 healthcare institutions.
        We transformed preliminary spreadsheet models into a comprehensive underwriting engine.
        We also laid out the technical requirements to launch an autonomous vehicle insurance program at Ford. I
        contributed to a white paper design of an insurance platform supplied by telemetry data from vehicles.
    `,
    image: "emrys-analytics.png",
    imageAlt: "Emrys Analytics Logo",
  },
  {
    title: "Diebold Nixdorf",
    description: `
        My role in the architecture team was to research and build stress tests for various technologies – Redis, WebRTC
        and HTTP/2. I was mentored through the design of a session
        management and security integration middleware built on
        Redis, used in ATMs servicing millions of customers.
    `,
    image: "diebold-nixdorf.png",
    imageAlt: "Diebold Nixdorf logo",
    button: {
      title: "website",
      color: "blue",
      url: "https://www.dieboldnixdorf.com/en-us/",
    },
  },
  {
    title: "Ping",
    description: `
        As the CTO/cofounder of Huckleberry, I built and continue to support
        Ping - A simple SaaS alternative to live chat built for
        solo-entrepreneurs, startups and local business,
        connecting them to their customers via sms.
    `,
    image: "ping.png",
    imageAlt: "Ping logo",
    button: {
      title: "app",
      url: "https://app.ping.buzz",
      color: "yellow",
    },
  },
  {
    title: "Huckleberry",
    description: `
        As the CTO, I built our real estate discovery web extension, mobile app and data backend.
        We raised a seed round and built a team. I managed 12 coops and 4 contractors over the course of 2 years.
    `,
    image: "huckleberry.png",
    imageAlt: "Huckleberry logo",
    button: {
      title: "website",
      url: "https://huckleberry.app",
      color: "blue",
    },
  },
  {
    title: "School Bus Camper",
    description: `
        I took some time off to convert a school bus camper. I learned a ton of hands-on skills to prepare for the impending apocalypse,
        including welding, metalwork, carpentry, electrical/solar, CAD,
        automotive repair, biodiesel production, sewing, plumbing and more. I wrote
        a handbook (work in progress) and collected data on
        everything. I also built a custom CNC machine, took a wilderness first responder course
        and skied across north america.
    `,
    image: "bus.jpg",
    imageAlt: "photo of my school bus camper",
    button: {
      title: "handbook",
      url: "https://rotaru.notion.site/Bus-cdff127ca1174746b95ac9e3867e9b09",
      color: "red",
    },
  },
  {
    title: "COVID PPE",
    description: `
        Early in the pandemic I produced hundreds of 3d printed face shields for social workers in
        my area. I launched PPEForFree.org, an open source
        initiative with 47 contributors in order to
        improve information sharing and collaboration between small scale PPE producers.
    `,
    image: "ppe.png",
    imageAlt: "photo of 3D printed PPE made by me",
  },
  {
    title: "D E L T A F I",
    description: `
        I started deltafi at age 17 as a way to combine my
        passion for music and technology. I received a grant to
        design and build hardware tools. I built
        an embedded linux PureData patch system, an AVR8 based midi
        controller and a number of analog synthesizer modules.
    `,
    image: "deltafi.png",
    imageAlt: "DeltaFi Logo",
  },
  {
    title: "Law Dataset",
    description: `
        I productized the most comprehensive database of legal professionals in Canada and sold it to dozens of customers.
        I built out a CASL compliant sales outreach dataset enriched with public info useful for lead
        qualification, compiled from over a dozen different sources.
    `,
    image: "law-dataset.png",
    imageAlt: "Law Dataset logo",
  },
  {
    title: "RCO Ventures",
    description: `I helped dozens of customers solve business problems as a consultant.
    I built a customer base large enough to sustain one full time employee and 3 part time contractors.
    I developed a number of applications, websites and software solutions. Some of my past clients include
    Toggl, MUTEK, O2 Canada, ONE Wellness Group, Legalline, Enercents, Cyberium and Absolute Coaching.
    `,
    image: "rco-ventures.png",
    imageAlt: "RCO Ventures",
  },
  {
    title: "Atlas Property Group",
    description: `
        Atlas managed thousands of rental units
        in Ontario. I overhauled their IT
        infrastructure, from sales funnels and online presence to
        backend systems and security controls. I established
        process-focused digitization initiatives across all
        departments and performed an IT asset audit during the
        acquisition of tech startup Dormr.
    `,
    image: "atlas-property-group.png",
    imageAlt: "Atlas Property Group logo",
  },
  {
    title: "ConstructionHub",
    description: `
        ConstructionHub is a sub-contractor bid management platform
        in British Columbia. I led a team of 5 developers,
        rewriting and launching V2 of the platform
        after it had achieved some initial success.
    `,
    image: "constructionhub.png",
    imageAlt: "ConstructionHub logo",
  },
  {
    title: "MDMax Billing (equina.io)",
    description: `
        MDMax Is a PHIPA compliant medical billing SaaS. I built out a service to perform
        text recognition for automatically processing billing sheets, developed its kubernetes-based
        infrastructure and maintained the mobile app.
    `,
    image: "mdmax-app.png",
    imageAlt: "MDMax app screenshot",
    button: {
      title: "website",
      url: "https://equina.io/",
      color: "red",
    },
  },
  {
    title: "MowGoSnowGo",
    description: `
        MowGoSnowGo is a mobile app that provides on-demand house care services. I designed, developed and
        continue to maintain the application.
    `,
    image: "mowgosnowgo-app.png",
    imageAlt: "MowGoSnowGo app screenshot",
  },
  {
    title: "3DStream",
    description: `
        3DStream is an industrial additive manufacturing (3D
        Printing) management solution which streamlines the workflow
        of commercial 3D fabrication. I advised the founders on their tech and
        strategy, helping design their architecture.
    `,
    image: "3dstream.png",
    imageAlt: "3DStream Logo",
  },
  {
    title: "Hexigent Consulting",
    description: `
        I performed a variety of data sanitization and statistical
        analysis tasks for a forensics team working on a cybercrime class
        action lawsuit.
    `,
    image: "hexigent-consulting.png",
    imageAlt: "Hexigent Consulting Logo",
  },
];

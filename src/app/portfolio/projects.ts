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
    title: "School Bus Camper",
    description: `
        I took a 1 year sebbatical to build and live in an off-grid
        tiny house out of a school bus. I learned welding, metal
        fabrication, milling, laser cutting, CNC routing, lumber
        processing, furniture making, electrical power systems
        design and wiring, smart home automation, diesel engine and
        vehicle maintenance, CAD modelling, biodiesel production,
        painting, plumbing, HVAC and a million other things. I wrote
        a handbook (work in progress) and collected data on
        EVERYTHING. I also took a wilderness first responder course,
        skiied for 3 months at 15 different mountains all over
        British Columbia, Alberta, Montana, Wyoming and Utah, drove
        over 20,000km and even designed and built my own custom CNC
        machine for a modular furniture system called GridBeam.
    `,
    image: "bus.jpg",
    imageAlt: "photo of my school bus camper",
    button: {
      title: "View Handbook",
      url: "https://www.notion.so/rotaru/Cribwhip-cdff127ca1174746b95ac9e3867e9b09",
      color: "red",
    },
  },
  {
    title: "Qualio",
    description: `
        In the first half of my time at Qualio, I helped replace our
        legacy monolithic application infrastructure with a high
        availability, containerized microservice architecture on AWS
        along with CI/CD in CircleCI. During the second half, I
        built an internal application to fully automate manual
        customer onboarding work, speeding up the onboarding of new
        customers and cutting down the need for the engineering
        department to be involved by a shitload.
    `,
    image: "qualio.svg",
    imageAlt: "Qualio logo",
    button: {
      title: "Visit Site",
      url: "https://qualio.com",
      color: "blue",
    },
  },
  {
    title: "PPE for COVID",
    description: `
        Early on in the pandemic, I helped by producing and
        assembling hundreds of face shields for social workers in
        Hamilton. I also launched PPEForFree.org, an Open Source
        initiative which had 47 contributors, working to analyze and
        improve information sharing within the grassroots PPE maker
        movement.
    `,
    image: "ppe.png",
    imageAlt: "photo of 3D printed PPE made by me",
  },
  {
    title: "Ping",
    description: `
        Ping is a simple alternative to live chat built for
        solo-entrepreneurs, startups and local businesses. It
        connects you to your customers via text messaging.
    `,
    image: "ping.png",
    imageAlt: "Ping logo",
    button: {
      title: "Visit Site",
      url: "https://ping.buzz",
      color: "yellow",
    },
  },
  {
    title: "Huckleberry",
    description: `
        Huckleberry is a real estate discovery platform. We build
        tools and experiences that improve the way consumers
        discover and interact with real estate.
    `,
    image: "huckleberry.png",
    imageAlt: "Huckleberry logo",
    button: {
      title: "Read More",
      url: "https://huckleberry.app",
      color: "blue",
    },
  },
  {
    title: "Construction Hub",
    description: `
        ConstructionHub is a sub-contractor bid management platform
        for the construction industry in British Columbia. As the
        lead engineer, I led a team of 5 developers, successfully
        redesigning, scaling and launching V2 of the the platform
        after it had achieved some initial success.
    `,
    image: "constructionhub.png",
    imageAlt: "ConstructionHub logo",
  },
  {
    title: "Atlas Property Group",
    description: `
        Now defunct, Atlas had thousands of units under management
        in Ontario. I overhauled the company&apos;s IT
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
    title: "Emrys Analytics",
    description: `
        As lead engineer, I developed our underwriting platform,
        used to insure healthcare facilities for cybersecurity risk.
        My team transformed models written in spreadsheets and
        VBScript into an internal desktop application suite for use
        by our underwriters.

        As part of my job at Emrys, during a consulting engagement
        with ford we laid out the technical requirements to launch
        an autonomous vehicle insurance program at Ford. I
        contributed to a white paper design of an insurance platform
        supplied by telemetry data from vehicles.
    `,
    image: "emrys-analytics.png",
    imageAlt: "Emrys Analytics Logo",
  },
  {
    title: "Diebold Nixdorf",
    description: `
        Diebold Nixdorf is a leading ATM / PoS manufacturer. My role
        in the architecture team was to research and build PoCs with
        candidate technologies – including Redis, WebRTC, Angular,
        HTTP/2 and Cordova. I also worked on the design of a session
        management and security integration middleware built on
        Redis pubsub.
    `,
    image: "diebold-nixdorf.png",
    imageAlt: "Diebold Nixdorf logo",
  },
  {
    title: "Law Dataset",
    description: `
        We provide the most comprehensive database of legal
        professionals in Canada. CASL compliant sales outreach
        enriched with exclusive information useful for lead
        qualification.
    `,
    image: "law-dataset.png",
    imageAlt: "Law Dataset logo",
  },
  {
    title: "O2 Canada",
    description: `
        With a mission to help people breathe cleaner air, O2 Canada
        produces the next generation of air polution masks. We
        designed the concept for a cryptocurrency funding and
        governance system for their non-profit.
    `,
    image: "o2-canada.png",
    imageAlt: "O2 Canada mask",
  },
  {
    title: "Gigit Marketplace",
    description: `
        I facilitated a Joint Venture Partnership between Gigit and
        ONE Concept to develop Gigit Wellness – a platform that
        brings together health professionals and understaffed
        clinics.
    `,
    image: "gigit-wellness.png",
    imageAlt: "Gigit Wellness Logo",
    button: {
      title: "Visit Site",
      url: "https://www.gigitmarketplace.com/",
      color: "yellow",
    },
  },
  {
    title: "MDMax Billing",
    description: `
        MDMax Is a PHIPA compliant SaaS solution which simplifies
        the billing process for physicians across Ontario. It uses
        text recognition to automatically process and validate PHI
        on billing sheets. I was responsible for its development.
    `,
    image: "mdmax-app.png",
    imageAlt: "MDMax app screenshot",
  },
  {
    title: "MowGoSnowGo",
    description: `
        MowGoSnowGo provides on-demand lawn care and snow removal
        services in southern Ontario. I designed and developed the
        app.
    `,
    image: "mowgosnowgo-app.png",
    imageAlt: "MowGoSnowGo app screenshot",
    button: {
      title: "View App",
      url: "https://apps.apple.com/ca/app/mowgosnowgo/id1071730399",
      color: "purple",
    },
  },
  {
    title: "3DStream",
    description: `
        3DStream is an industrial additive manufacturing (3D
        Printing) management solution which streamlines the workflow
        of commercial 3D fabrication. I advised them on tech and
        strategy.
    `,
    image: "3dstream.png",
    imageAlt: "3DStream Logo",
  },
  {
    title: "Hexigent Consulting",
    description: `
        I performed a variety of data sanitization and statistical
        analysis tasks for a forensics team working on a class
        action lawsuit involving cyber crime.
    `,
    image: "hexigent-consulting.png",
    imageAlt: "Hexigent Consulting Logo",
  },
  {
    title: "ALR Accounting",
    description: `
        I spent 4 years as an accounting assistant at a small public
        practice servicing SMEs and Individuals. I also managed IT
        infrastructure.
    `,
    image: "alr.png",
    imageAlt: "ALR Accounting Logo",
  },
  {
    title: "Δ F I",
    description: `
        I started Δ F I in high school as a way to combine my
        passion for music and technology. I built hardware
        synthesizers, acquired funding and promptly ran out of it.
        Hardware is hard.
    `,
    image: "deltafi.png",
    imageAlt: "DeltaFi Logo",
  },
];

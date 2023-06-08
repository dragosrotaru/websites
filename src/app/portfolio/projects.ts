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
        I took a year off to convert a school bus camper. I learned about welding, metalworking,
        laser cutting, CNC, woodworking, solar power, home automation,
        mechanical, CAD, diesel engines, biodiesel production,
        plumbing, HVAC and so many other things. I wrote
        a handbook (work in progress) and collected data on
        everything. I also took a wilderness first responder course
        and skiied across north america.
    `,
    image: "bus.jpg",
    imageAlt: "photo of my school bus camper",
    button: {
      title: "Handbook",
      url: "https://rotaru.notion.site/Bus-cdff127ca1174746b95ac9e3867e9b09",
      color: "red",
    },
  },
  {
    title: "Qualio",
    description: `
        In the first half of my tenure, I helped upgrade our
        core application with a high availability containerized architecture
        and ci/cd pipeline on AWS. During the second half, I helped
        develop an application to automate customer onboarding,
        greatly reducing manual work across the company.
    `,
    image: "qualio.svg",
    imageAlt: "Qualio logo",
    button: {
      title: "Qualio",
      url: "https://qualio.com",
      color: "blue",
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
    title: "Ping",
    description: `
        Ping is a simple alternative to live chat built for
        solo-entrepreneurs, startups and local business,
        connecting them to their customers via sms.
    `,
    image: "ping.png",
    imageAlt: "Ping logo",
    button: {
      title: "App",
      url: "https://app.ping.buzz",
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
      title: "Huckleberry Site",
      url: "https://huckleberry.app",
      color: "blue",
    },
  },
  {
    title: "Construction Hub",
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
    title: "Emrys Analytics",
    description: `
        I helped develop an insurance underwriting application for underwriting insurance policies in the healthcare industry.
        We transformed preliminary spreadsheet models into a desktop application suite and underwriting engine.

        We also laid out the technical requirements to launch an autonomous vehicle insurance program at Ford. I
        contributed to a white paper design of an insurance platform supplied by telemetry data from vehicles.
    `,
    image: "emrys-analytics.png",
    imageAlt: "Emrys Analytics Logo",
  },
  {
    title: "Diebold Nixdorf",
    description: `
        My first software internship was at Diebold Nixdorf, a large manufacturer of bank machines and point of sale systems.
        My role in the architecture team was to research and build PoCs of various tech – Redis, WebRTC, Angular,
        HTTP/2 and Cordova. I was mentored through the design of a session
        management and security integration middleware built on
        Redis.
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
    title: "MDMax Billing",
    description: `
        MDMax Is a PHIPA compliant SaaS solution which simplifies
        the billing process for physicians across Ontario. It uses
        text recognition to automatically process and validate PHI
        on billing sheets.
    `,
    image: "mdmax-app.png",
    imageAlt: "MDMax app screenshot",
  },
  {
    title: "MowGoSnowGo",
    description: `
        MowGoSnowGo is an app that provides on-demand lawn care and snow removal
        services in southern Ontario.
    `,
    image: "mowgosnowgo-app.png",
    imageAlt: "MowGoSnowGo app screenshot",
  },
  {
    title: "3DStream",
    description: `
        3DStream is an industrial additive manufacturing (3D
        Printing) management solution which streamlines the workflow
        of commercial 3D fabrication. I advised them on their tech and
        strategy.
    `,
    image: "3dstream.png",
    imageAlt: "3DStream Logo",
  },
  {
    title: "Hexigent Consulting",
    description: `
        I performed a variety of data sanitization and statistical
        analysis tasks for a forensics team working on a cyber crime class
        action.
    `,
    image: "hexigent-consulting.png",
    imageAlt: "Hexigent Consulting Logo",
  },
  {
    title: "ALR Accounting",
    description: `
        Before my software career I worked as part time at an accounting firm, helping
        with IT admin and bookkeeping.
    `,
    image: "alr.png",
    imageAlt: "ALR Accounting Logo",
  },
  {
    title: "Δ F I",
    description: `
        I started Δ F I in high school as a way to combine my
        passion for music and technology. I received a grant to
        design and build hardware tools (synthesizers).
    `,
    image: "deltafi.png",
    imageAlt: "DeltaFi Logo",
  },
];

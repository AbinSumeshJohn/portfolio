export interface VisualRef {
  key: string;
  alt: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
}

export interface ProjectItem {
  name: string;
  context: string;
  summary: string;
  bullets: string[];
  tags: string[];
  image: VisualRef;
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  details: string[];
}

export interface HighlightItem {
  title: string;
  detail: string;
}

export interface SkillItem {
  name: string;
  iconKey: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface PortfolioContent {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  resumeDownloadName: string;
  summary: string;
  heroImage: VisualRef;
  stats: StatItem[];
  focusAreas: string[];
  skills: SkillGroup[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: HighlightItem[];
  recognition: HighlightItem[];
  leadership: HighlightItem[];
}

export const portfolioContent: PortfolioContent = {
  name: 'Abin Sumesh John',
  headline: 'IT Developer | CI/CD, Automation & Application Lifecycle',
  location: 'Montreal, Quebec, Canada',
  email: 'abinsjohn1998@gmail.com',
  phone: '+1 (438) 464-0859',
  linkedin: 'https://www.linkedin.com/in/abin-sumesh-john',
  github: 'https://github.com/AbinSumeshJohn',
  resumeUrl: 'mailto:abinsjohn1998@gmail.com?subject=Resume%20Request',
  resumeDownloadName: 'Abin-Sumesh-John-Resume.txt',
  summary:
    'IT Developer with experience supporting banking and telecom applications across the product lifecycle, from development and source-code management to testing, deployment, batch operations, release validation, and production support.',
  heroImage: {
    key: 'hero-portrait',
    alt: 'Stylized portrait illustration for Abin Sumesh John',
  },
  stats: [
    { value: '4+', label: 'years across application support and delivery workflows' },
    { value: '50%', label: 'faster pre-processing after shell automation improvements' },
    { value: '30%', label: 'release-time reduction through pipeline ownership' },
    { value: '8', label: 'telecom services covered in billing logic' },
  ],
  focusAreas: [
    'Application lifecycle support',
    'CI/CD and deployment automation',
    'Batch scheduling and operations',
    'Production support and release validation',
  ],
  skills: [
    {
      category: 'DevOps & Delivery',
      items: [
        { name: 'Bitbucket', iconKey: 'bitbucket' },
        { name: 'Jenkins', iconKey: 'jenkins' },
        { name: 'Ansible', iconKey: 'ansible' },
        { name: 'SonarQube', iconKey: 'sonarqube' },
        { name: 'AutoSys', iconKey: 'autosys' },
      ],
    },
    {
      category: 'Development',
      items: [
        { name: 'PL/SQL', iconKey: 'plsql' },
        { name: 'Oracle SQL', iconKey: 'oracle' },
        { name: 'SQL', iconKey: 'sql' },
        { name: 'Python', iconKey: 'python' },
        { name: 'C++', iconKey: 'cpp' },
      ],
    },
    {
      category: 'Data & Analytics',
      items: [
        { name: 'Oracle', iconKey: 'oracle' },
        { name: 'Data validation', iconKey: 'validation' },
        { name: 'Reporting support', iconKey: 'reporting' },
        { name: 'Incident analysis', iconKey: 'incident' },
        { name: 'Power BI', iconKey: 'powerbi' },
      ],
    },
    {
      category: 'Automation & Scripting',
      items: [
        { name: 'Shell Scripting', iconKey: 'shell' },
        { name: 'YAML', iconKey: 'yaml' },
        { name: 'JSON', iconKey: 'json' },
        { name: 'Batch jobs', iconKey: 'batch' },
        { name: 'Deployment support', iconKey: 'deploy' },
      ],
    },
    {
      category: 'Testing & Debugging',
      items: [
        { name: 'SIT', iconKey: 'sit' },
        { name: 'UAT', iconKey: 'uat' },
        { name: 'Defect triaging', iconKey: 'bug' },
        { name: 'RCA', iconKey: 'rca' },
        { name: 'Release validation', iconKey: 'release' },
      ],
    },
    {
      category: 'Tools & Collaboration',
      items: [
        { name: 'Git', iconKey: 'git' },
        { name: 'Confluence', iconKey: 'confluence' },
        { name: 'Jira', iconKey: 'jira' },
        { name: 'Linux command line', iconKey: 'linux' },
        { name: 'Secure file transfer', iconKey: 'sftp' },
      ],
    },
  ],
  experience: [
    {
      role: 'IT Developer, Finance & Risk Solutions',
      company: 'BNP Paribas',
      location: 'Montreal, QC',
      period: 'December 2025 - Present',
      summary:
        'Contribute across the application lifecycle for Finance and Risk solutions, from requirements understanding and development through deployment, validation, and production support.',
      bullets: [
        'Develop and maintain PL/SQL components supporting Finance and Risk applications.',
        'Manage source-code changes, branches, pull requests, and peer-review workflows using Bitbucket.',
        'Work with Jenkins pipelines used for application validation, deployment, and release activities.',
        'Use Ansible as part of controlled deployment and configuration-management workflows.',
        'Review SonarQube findings and quality-gate results to support application quality and coding standards.',
        'Monitor scheduled jobs and batch-processing workflows using AutoSys.',
        'Investigate failed, delayed, or dependent jobs and support recovery or rerun activities.',
        'Participate in SIT, UAT, defect validation, release preparation, and post-deployment verification.',
        'Review application logs, SQL results, batch statuses, and testing evidence during production incident investigation.',
        'Prepare technical documentation, release notes, testing evidence, SOPs, and audit-support records.',
        'Collaborate with developers, business analysts, testers, infrastructure teams, and application-support teams.',
      ],
    },
    {
      role: 'Senior Systems Engineer',
      company: 'Infosys Limited',
      location: 'Remote (USA / Canada / UK / India)',
      period: 'October 2022 - July 2023',
      summary:
        'Supported telecom billing and mediation applications hosted on Red Hat Enterprise Linux servers, with responsibility for deployments, validation, monitoring, and production support.',
      bullets: [
        'Performed manual application and binary deployments across controlled environments.',
        'Prepared and transferred deployment packages using approved processes and secure file-transfer tools.',
        'Updated application directories, configuration files, environment values, and file permissions during deployments.',
        'Performed post-deployment validation by reviewing application processes, services, logs, batch outputs, and system status.',
        'Used Oracle SQL to investigate billing mismatches, missing records, application defects, and processing failures.',
        'Reviewed application and server logs to identify errors, delays, and recurring production issues.',
        'Monitored batch workloads, record-processing status, system throughput, and operational SLAs.',
        'Used Red Hat Linux commands and shell utilities for file management, process inspection, log analysis, permissions, and troubleshooting.',
        'Supported UAT, production issue resolution, incident triage, and root-cause analysis.',
        'Prepared deployment instructions, troubleshooting guides, SOPs, knowledge-base articles, and release documentation.',
        'Coordinated with development, QA, operations, and client teams during production and release activities.',
        'Mentored team members and supported task coordination during critical operational periods.',
      ],
    },
    {
      role: 'Systems Engineer',
      company: 'Infosys Limited',
      location: 'Remote (USA / Canada / UK / India)',
      period: 'January 2021 - October 2022',
      summary:
        'Supported backend telecom applications in Red Hat Enterprise Linux environments, with a focus on data validation, deployments, monitoring, and production support.',
      bullets: [
        'Performed Oracle SQL queries to validate data and investigate production defects.',
        'Reviewed billing records, application logs, and batch-processing outputs to trace system issues.',
        'Assisted with manual deployment preparation and environment-validation activities.',
        'Supported application configuration updates and post-release checks.',
        'Monitored application processes and batch workloads to identify delays or processing failures.',
        'Assisted QA and business teams during unit testing, integration testing, and UAT.',
        'Tracked incidents, defects, testing activities, and release tasks using Jira.',
        'Participated in production support and root-cause-analysis activities.',
        'Prepared deployment summaries, operational documentation, and troubleshooting instructions.',
      ],
    },
  ],
  projects: [
    {
      name: 'Pathfinder',
      context: 'AI-Assisted Travel Itinerary Planner | Concordia University Capstone',
      summary:
        'Built a web-based travel itinerary planner that generates personalized plans using AI, maps, weather data, and user preferences.',
      bullets: [
        'Used generative AI tools to support code generation, debugging, feature implementation, and documentation.',
        'Defined the application idea, user journey, functional requirements, and expected outputs.',
        'Integrated Google Maps functionality for location-based recommendations and route context.',
        'Integrated weather information to improve itinerary relevance.',
        'Worked with Google Timeline-related data to support travel-history features.',
      ],
      tags: ['Flask', 'Gemini API', 'Google Maps', 'Weather API', 'OAuth 2.0'],
      image: {
        key: 'pathfinder',
        alt: 'Illustrated preview of the Pathfinder travel itinerary planner',
      },
    },
    {
      name: 'Predictive Alarm Chattering Detection',
      context: 'Concordia University Analytics Hackathon',
      summary:
        'Built a machine-learning classifier for industrial alarm floods with a strong emphasis on robustness and feature selection.',
      bullets: [
        'Trained a Random Forest classifier that reached 90% accuracy.',
        'Used SMOTE, Recursive Feature Elimination, and Markov Chains to improve resilience and forecasting.',
      ],
      tags: ['Random Forest', 'SMOTE', 'RFE', 'Markov Chains'],
      image: {
        key: 'alarm-chattering',
        alt: 'Illustrated preview of alarm analysis and predictive modeling work',
      },
    },
    {
      name: 'Lean Automation',
      context: 'Rubber Recycling Industry',
      summary:
        'Designed a lean automation concept for materials handling and layout improvement.',
      bullets: [
        'Implemented an Arduino-based raw material feeder and improved throughput by 17.6%.',
        'Modelled motion waste and layout changes in AnyLogic to support cost savings.',
      ],
      tags: ['Arduino', 'AnyLogic', 'Lean', 'Industrial Simulation'],
      image: {
        key: 'lean-automation',
        alt: 'Illustrated preview of lean automation and industrial workflow design',
      },
    },
  ],
  education: [
    {
      degree: 'Master of Engineering, Industrial Engineering',
      school: 'Concordia University',
      location: 'Montreal, QC',
      period: '2023 - 2025',
      details: ['CGPA: 4.11/4.3', 'System Analytics', 'Quality Improvement', 'Operations Management', 'Six Sigma'],
    },
    {
      degree: 'Bachelor of Technology (Honors), Mechanical Engineering',
      school: 'APJ Abdul Kalam Technological University',
      location: 'India',
      period: '2016 - 2020',
      details: ['CGPA: 8.74/10', 'Process Optimization', 'Project Management'],
    },
  ],
  certifications: [
    { title: 'Lean Six Sigma Green Belt', detail: 'Applied process improvement and quality methods.' },
    { title: 'Minitab Certified', detail: 'Used statistical tooling for analysis and reporting.' },
    { title: 'Power BI (Edureka)', detail: 'Built dashboards and reporting workflows.' },
    { title: 'SQL (HackerRank)', detail: 'Strengthened query and data handling skills.' },
    { title: 'Google Data Analytics', detail: 'In progress.' },
  ],
  recognition: [
    {
      title: 'Golden Key International Honour Society',
      detail: 'Invited for academic excellence at Concordia University (top 15% achiever).',
    },
    {
      title: 'Infosys Insta Awards (2022 & 2023)',
      detail: 'Recognized for high-impact support, billing resolution, and mentorship.',
    },
  ],
  leadership: [
    {
      title: 'Interim Team Lead, Infosys Ltd.',
      detail: 'Oversaw task assignments and issue resolution during a production support transition.',
    },
    {
      title: 'Impact highlights',
      detail: 'Contributed to a 25% revenue increase through a scalable billing engine and led OCI migration automation that reduced turnaround by 30%.',
    },
  ],
};

export interface PortfolioContentSource {
  get(): Promise<PortfolioContent>;
}

export const staticPortfolioContentSource: PortfolioContentSource = {
  async get() {
    return portfolioContent;
  },
};

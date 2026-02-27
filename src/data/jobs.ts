import type { Job, JobMode, JobExperience, JobSource } from '../types/job';

export const jobsData: Job[] = [
    {
        id: "job-1",
        title: "SDE Intern",
        company: "Amazon",
        location: "Bangalore",
        mode: "Hybrid",
        experience: "Fresher",
        skills: ["Java", "Data Structures", "Algorithms"],
        source: "LinkedIn",
        postedDaysAgo: 1,
        salaryRange: "₹40k–₹80k/month Internship",
        applyUrl: "https://amazon.jobs",
        description: "Join our core fulfillment team to build highly scalable backend services. You will work alongside senior engineers to design and implement features that impact millions of orders daily. Strong CS fundamentals required."
    },
    {
        id: "job-2",
        title: "Graduate Engineer Trainee",
        company: "Infosys",
        location: "Pune",
        mode: "Onsite",
        experience: "Fresher",
        skills: ["Java", "SQL", "Spring Boot"],
        source: "Naukri",
        postedDaysAgo: 4,
        salaryRange: "3.6–5 LPA",
        applyUrl: "https://infosys.com/careers",
        description: "We are looking for enthusiastic fresh graduates to join our enterprise solutions delivery team. You will undergo 3 months of rigorous training before being deployed to major international client projects."
    },
    {
        id: "job-3",
        title: "Junior Backend Developer",
        company: "Razorpay",
        location: "Bangalore",
        mode: "Hybrid",
        experience: "0-1",
        skills: ["Go", "Node.js", "PostgreSQL"],
        source: "LinkedIn",
        postedDaysAgo: 0,
        salaryRange: "12–16 LPA",
        applyUrl: "https://razorpay.com/jobs",
        description: "Help us build the next generation of financial infrastructure for India. You will be responsible for building resilient payment routing microservices handling thousands of transactions per second."
    },
    {
        id: "job-4",
        title: "Frontend Intern",
        company: "Swiggy",
        location: "Remote",
        mode: "Remote",
        experience: "Fresher",
        skills: ["React", "TypeScript", "Redux"],
        source: "Wellfound",
        postedDaysAgo: 2,
        salaryRange: "₹30k/month Internship",
        applyUrl: "https://careers.swiggy.com",
        description: "Work closely with our consumer app team to build smooth, interactive web experiences. You will be converting Figma designs into pixel-perfect React components and optimizing bundle sizes."
    },
    {
        id: "job-5",
        title: "QA Intern",
        company: "TCS",
        location: "Chennai",
        mode: "Onsite",
        experience: "Fresher",
        skills: ["Selenium", "Python", "Manual Testing"],
        source: "Naukri",
        postedDaysAgo: 7,
        salaryRange: "₹15k–₹25k/month Internship",
        applyUrl: "https://tcs.com/careers",
        description: "seeking detail-oriented QA internees to help maintain our testing pipelines. You will write automated test scripts and perform exploratory testing on our banking domain applications."
    },
    {
        id: "job-6",
        title: "Data Analyst Intern",
        company: "Flipkart",
        location: "Bangalore",
        mode: "Hybrid",
        experience: "Fresher",
        skills: ["SQL", "Python", "Tableau"],
        source: "LinkedIn",
        postedDaysAgo: 3,
        salaryRange: "₹35k/month Internship",
        applyUrl: "https://flipkartcareers.com",
        description: "Dig into massive datasets to uncover user purchasing patterns and supply chain inefficiencies. You will build dashboards for the executive team to monitor key daily metrics."
    },
    {
        id: "job-7",
        title: "Java Developer",
        company: "Wipro",
        location: "Hyderabad",
        mode: "Onsite",
        experience: "0-1",
        skills: ["Java 11", "Spring Boot", "Microservices"],
        source: "Naukri",
        postedDaysAgo: 8,
        salaryRange: "4–6 LPA",
        applyUrl: "https://careers.wipro.com",
        description: "Join our digital transformation practice. We need dedicated Java developers to modernize legacy monolithic applications into sleek, scalable microservice architectures for our retail clients."
    },
    {
        id: "job-8",
        title: "Python Developer",
        company: "CRED",
        location: "Bangalore",
        mode: "Hybrid",
        experience: "1-3",
        skills: ["Python", "Django", "AWS"],
        source: "LinkedIn",
        postedDaysAgo: 1,
        salaryRange: "18–24 LPA",
        applyUrl: "https://careers.cred.club",
        description: "Build robust backend systems to power India's most rewarding credit card payment app. You will focus on security, performance, and scaling our existing Django services."
    },
    {
        id: "job-9",
        title: "React Developer",
        company: "Zoho",
        location: "Chennai",
        mode: "Onsite",
        experience: "1-3",
        skills: ["React", "JavaScript", "CSS"],
        source: "Indeed",
        postedDaysAgo: 5,
        salaryRange: "8–12 LPA",
        applyUrl: "https://zoho.com/careers",
        description: "Contribute to Zoho's massive suite of business applications. You will be building highly interactive, complex single-page applications that manage everything from CRM data to accounting."
    },
    {
        id: "job-10",
        title: "Systems Engineer",
        company: "IBM",
        location: "Pune",
        mode: "Hybrid",
        experience: "Fresher",
        skills: ["Linux", "Networking", "Shell Scripting"],
        source: "Naukri",
        postedDaysAgo: 9,
        salaryRange: "4.5 LPA",
        applyUrl: "https://ibm.com/jobs",
        description: "Maintain and configure hybrid cloud environments for enterprise customers. You will learn to automate infrastructure patching, monitoring, and compliance auditing."
    },
    {
        id: "job-11",
        title: "SDE 1",
        company: "PhonePe",
        location: "Bangalore",
        mode: "Hybrid",
        experience: "0-1",
        skills: ["Java", "Distributed Systems", "MySQL"],
        source: "LinkedIn",
        postedDaysAgo: 2,
        salaryRange: "14–20 LPA",
        applyUrl: "https://phonepe.com/careers",
        description: "Work on highly available systems that process millions of UPI transactions daily. Focus on low-latency code, database optimizations, and resilient fault-tolerant design."
    },
    {
        id: "job-12",
        title: "Backend Engineer",
        company: "Juspay",
        location: "Remote",
        mode: "Remote",
        experience: "1-3",
        skills: ["Functional Programming", "Haskell", "PureScript"],
        source: "Wellfound",
        postedDaysAgo: 0,
        salaryRange: "15–22 LPA",
        applyUrl: "https://juspay.in/careers",
        description: "Join a unique engineering culture focused on mathematical correctness and functional programming. You will build bulletproof payment routing systems handling massive scale."
    },
    {
        id: "job-13",
        title: "DevOps Engineer",
        company: "Capgemini",
        location: "Mumbai",
        mode: "Hybrid",
        experience: "3-5",
        skills: ["Docker", "Kubernetes", "CI/CD", "Azure"],
        source: "Naukri",
        postedDaysAgo: 6,
        salaryRange: "12–16 LPA",
        applyUrl: "https://capgemini.com/careers",
        description: "Lead the migration of legacy apps to Azure Kubernetes Service. You will be setting up automated deployment pipelines and ensuring high availability for client applications."
    },
    {
        id: "job-14",
        title: "Frontend Developer",
        company: "Freshworks",
        location: "Chennai",
        mode: "Hybrid",
        experience: "1-3",
        skills: ["Ember.js", "React", "State Management"],
        source: "LinkedIn",
        postedDaysAgo: 3,
        salaryRange: "10–15 LPA",
        applyUrl: "https://freshworks.com/company/careers",
        description: "Enhance the user experience of our flagship customer success products. You will build reusable UI components and optimize the performance of data-heavy dashboard views."
    },
    {
        id: "job-15",
        title: "Data Scientist",
        company: "Paytm",
        location: "Noida",
        mode: "Onsite",
        experience: "3-5",
        skills: ["Machine Learning", "Python", "Spark"],
        source: "LinkedIn",
        postedDaysAgo: 4,
        salaryRange: "18–28 LPA",
        applyUrl: "https://paytm.com/careers",
        description: "Develop fraud detection models and personalized recommendation engines. You will work with petabytes of transaction data to build predictive models that drive business value."
    },
    {
        id: "job-16",
        title: "Cloud Support Associate",
        company: "Amazon",
        location: "Hyderabad",
        mode: "Onsite",
        experience: "Fresher",
        skills: ["AWS", "Networking", "Troubleshooting"],
        source: "Indeed",
        postedDaysAgo: 1,
        salaryRange: "5–8 LPA",
        applyUrl: "https://amazon.jobs",
        description: "Help AWS customers troubleshoot complex cloud architecture issues. You will be the front-line engineering support for developers building on the world's largest cloud provider."
    },
    {
        id: "job-17",
        title: "Full Stack Developer",
        company: "Oracle",
        location: "Bangalore",
        mode: "Hybrid",
        experience: "1-3",
        skills: ["Java", "Oracle DB", "React"],
        source: "LinkedIn",
        postedDaysAgo: 5,
        salaryRange: "12–18 LPA",
        applyUrl: "https://oracle.com/careers",
        description: "Build next-generation enterprise cloud applications. You will be responsible for end-to-end feature development, from database schema design to frontend UI implementation."
    },
    {
        id: "job-18",
        title: "Software Engineer",
        company: "SAP",
        location: "Bangalore",
        mode: "Hybrid",
        experience: "0-1",
        skills: ["ABAP", "Java", "HANA"],
        source: "Naukri",
        postedDaysAgo: 8,
        salaryRange: "8–12 LPA",
        applyUrl: "https://sap.com/careers",
        description: "Contribute to the core SAP S/4HANA product line. You will learn enterprise resource planning business logic and build scalable modules for global supply chain management."
    },
    {
        id: "job-19",
        title: "IT Support Specialist",
        company: "Dell",
        location: "Remote",
        mode: "Remote",
        experience: "1-3",
        skills: ["Active Directory", "Windows Server", "Ticketing"],
        source: "Indeed",
        postedDaysAgo: 10,
        salaryRange: "4–7 LPA",
        applyUrl: "https://jobs.dell.com",
        description: "Provide remote technical assistance to internal employees globally. You will resolve software, hardware, and access issues while maintaining strict SLAs."
    },
    {
        id: "job-20",
        title: "iOS Developer",
        company: "Zomato",
        location: "Gurgaon",
        mode: "Hybrid",
        experience: "1-3",
        skills: ["Swift", "UIKit", "CoreData"],
        source: "LinkedIn",
        postedDaysAgo: 2,
        salaryRange: "14–22 LPA",
        applyUrl: "https://zomato.com/careers",
        description: "Deliver pixel-perfect, extremely smooth iOS applications for millions of food lovers. You will focus on animations, memory management, and network optimization."
    },
    // Add 40 more to reach 60...
];

// Generative loop to fill the rest of the 60 items with realistic variations
const generateMoreJobs = () => {
    const companies = ["Cognizant", "Mindtree", "LTI", "HCL", "Tech Mahindra", "Mphasis", "Cisco", "Intel", "Qualcomm", "Ather Energy", "Ola", "ShareChat", "Meesho", "Groww", "Upstox"];
    const titles = ["Backend Engineer", "Frontend Developer", "Data Engineer", "SRE", "DevOps Engineer", "Mobile Developer", "QA Automation", "Security Engineer", "Product Manager", "UI/UX Designer"];
    const locations = ["Bangalore", "Mumbai", "Pune", "Hyderabad", "Chennai", "Gurgaon", "Delhi", "Remote"];
    const modes: JobMode[] = ["Remote", "Hybrid", "Onsite"];
    const exps: JobExperience[] = ["Fresher", "0-1", "1-3", "3-5", "5+"];
    const skillSets = [
        ["Python", "FastAPI", "Docker"],
        ["React", "Next.js", "Tailwind"],
        ["Java", "Spring", "Kafka"],
        ["AWS", "Terraform", "Ansible"],
        ["Go", "gRPC", "PostgreSQL"],
        ["Kotlin", "Android", "MVVM"],
        ["C++", "Embedded Systems", "RTOS"]
    ];
    const sources: JobSource[] = ["LinkedIn", "Naukri", "Indeed", "Wellfound"];

    for (let i = 21; i <= 60; i++) {
        jobsData.push({
            id: `job-${i}`,
            title: titles[Math.floor(Math.random() * titles.length)],
            company: companies[Math.floor(Math.random() * companies.length)],
            location: locations[Math.floor(Math.random() * locations.length)],
            mode: modes[Math.floor(Math.random() * modes.length)],
            experience: exps[Math.floor(Math.random() * exps.length)],
            skills: skillSets[Math.floor(Math.random() * skillSets.length)],
            source: sources[Math.floor(Math.random() * sources.length)],
            postedDaysAgo: Math.floor(Math.random() * 11), // 0 to 10
            salaryRange: `${Math.floor(Math.random() * 10) + 5}–${Math.floor(Math.random() * 15) + 15} LPA`,
            applyUrl: "https://example.com/apply",
            description: "We are an innovative tech team looking for passionate individuals to help us scale our core products. You will work in a fast-paced environment solving complex engineering challenges and delivering value to our vast user base."
        });
    }
};

generateMoreJobs();

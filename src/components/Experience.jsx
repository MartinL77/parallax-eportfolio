const experienceCard = [
    {
        image: "./src/assets/movember-logo.png",
        company: "Movember",
        role: "Intern Full Stack Developer",
        year: "Jan 2023 - Jan 2024",
        description: [
            `Contributed to Movember's mission to support men's health by working on <strong>high-impact projects</strong>.`,
            `<strong>Movember Conversations:</strong> Built a web platform using React and TypeScript to facilitate meaningful conversations about mental health, focusing on <strong>accessibility and user engagement</strong>.`,
            `<strong>Ahead of the Game:</strong> Designed and implemented <strong>mobile-friendly features</strong> in React Native to support youth sports coaches with mental health strategies, partnering with the AFL.`,
            `<strong>Family Man:</strong> Developed and optimized an <strong>online parenting program</strong> for fathers, leveraging Sanity CMS for research-backed content management.`,
            `Delivered <strong>high-quality, test-driven code</strong> with <strong>85%+ unit test coverage</strong>, ensuring robust functionality across web and mobile applications.`,
            `Collaborated in an <strong>Agile, scrum-based environment</strong> to deliver projects efficiently, with seamless frontend and backend integration using <strong>React, TypeScript, Node.js, and AWS DynamoDB</strong>.`,
            `Implemented <strong>data-driven optimizations</strong> using Google Analytics to track performance and improve user engagement, aligning with Movember’s global objectives.`,
        ],
    },
    {
        image: "./src/assets/commbank-logo.svg",
        company: "Commonwealth Bank",
        role: "Customer Care Specialist",
        year: "Jun 2024 - Present",
        description: [
            `Delivered <strong>exceptional customer service</strong> at the CommBank call center, resolving <strong>95%+ of inquiries</strong> during the first call.`,
            `Guided customers to the CommBank app for lodging disputes, reducing wait times and improving <strong>customer satisfaction scores by 20%</strong>.`,
            `Ensured <strong>strict security compliance</strong> by verifying customer identities with secure notifications, enhancing trust and efficiency.`,
            `Produced <strong>comprehensive reports</strong> on customer interactions and KPIs using Microsoft Office, contributing to improved team performance.`,
        ],
    },
];

const Experience = () => {
    return (
        <div className="content-wrapper">
                <h1>Experience</h1>
                {experienceCard.map((experience, index) => (
                    <div className="experience-card" key={index}>
                        <div className="experience-wrapper">
                            <img
                                src={experience.image}
                                alt={experience.company}
                                className="experience-image mr-8"
                            />
                            <div>
                                <div className="experience-company">{experience.company}</div>
                                <div className="experience-role">
                                    {experience.role} 
                                    <span className="experience-year">({experience.year})</span>
                                </div>
                            </div>
                        </div>
                        <div className="experience-description">
                            {experience.description.map((paragraph, i) => (
                                <p
                                    key={i}
                                    dangerouslySetInnerHTML={{ __html: paragraph }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default Experience;
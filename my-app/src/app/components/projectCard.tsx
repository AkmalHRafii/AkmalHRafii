

const projectCardData = [
    {
        title: "MitasuStore - E-commerce Web Application",
        description: "A web based e-commerce app",
        imageUrl: "../public/mitasustore.png",
        projectUrl: "https://mitasu-p302.vercel.app/",
        techStack: ["NextJS", "MongoDB", "Tailwind CSS", "Zod"]
    },
    {
        title: "Mitasu - bookmark app",
        description: "A web based Anime bookmark app that can give 3 Anime recommendation based on bookmarked anime",
        imageUrl: "../public/mitasu.png",
        projectUrl: "https://mitasu-client-deploy.vercel.app/",
        techStack: ["React(vite)", "Express", "PostgreSQL", "Jest", "Gemini API", "Jikan API", "Google Oauth", "Redux"]
    },
    {
        title: "Real Time Chat App",
        description: "A web based open room chat app, can send picture, and has chat bot - group project/ as back end developer",
        imageUrl: "../public/boringchat.png",
        projectUrl: "https://boringchat.vercel.app/",
        techStack: ["Socket.IO", "Express", "PostgresSQL", "React(vite)", "uploadcare", "Gemini API"]
    },
    {
        title: "Mitasu - bookmark app",
        description: "A web based app to booking a consultation with psychiatrist that can be chat or videocall, and has seamless payment method - group project/ as back end developer for database",
        imageUrl: "../public/pendengarMu.png",
        projectUrl: "https://pendengarmu.vercel.app/",
        techStack: ["NextJS", "MongoDB", "Tailwind CSS", "Zod", "Agora", "Pusher", "Gemini API", "Midtrans", "Resend"]
    }
];


export default function ProjectCard() {
    return (
        <div>
            {projectCardData.map((project, index) => (
                <div key={index}>
                    <h3>{project.title}</h3>
                    <img src={project.imageUrl} alt={project.title} />
                    <p>{project.description}</p>
                    <p>Technologies: {project.techStack.join(", ")}</p>
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
            ))}
        </div>
    );
}
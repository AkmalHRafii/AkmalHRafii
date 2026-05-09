

const projectCardData = [
    {
        title: "MitasuStore - E-commerce Web Application",
        description: "A web based e-commerce app",
        imageUrl: "mitasustore.png",
        projectUrl: "https://mitasu-p302.vercel.app/",
        techStack: ["NextJS", "MongoDB", "Tailwind CSS", "Zod"]
    },
    {
        title: "Mitasu - bookmark app",
        description: "A web based Anime bookmark app that can give 3 Anime recommendation based on bookmarked anime",
        imageUrl: "mitasu.png",
        projectUrl: "https://mitasu-client-deploy.vercel.app/",
        techStack: ["React(vite)", "Express", "PostgreSQL", "Jest", "Gemini API", "Jikan API", "Google Oauth", "Redux"]
    },
    {
        title: "Real Time Chat App",
        description: "A web based open room chat app, can send picture, and has chat bot - group project/ as back end developer",
        imageUrl: "boringchat.png",
        projectUrl: "https://boringchat.vercel.app/",
        techStack: ["Socket.IO", "Express", "PostgresSQL", "React(vite)", "uploadcare", "Gemini API"]
    },
    {
        title: "pendengarMu",
        description: "A web based app to booking a consultation with psychiatrist that can be chat or videocall, and has seamless payment method - group project/ as back end developer for database",
        imageUrl: "pendengarMu.png",
        projectUrl: "https://pendengarmu.vercel.app/",
        techStack: ["NextJS", "MongoDB", "Tailwind CSS", "Zod", "Agora", "Pusher", "Gemini API", "Midtrans", "Resend"]
    }
];


export default function ProjectCard() {
    return (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 mb-8 w-full">
            <h2 className="text-xl font-bold text-black m-2">Projects</h2>
            {projectCardData.map((project, index) => (
                <div key={index} className="mb-4 border border-gray-300 rounded-md p-4 w-full m-2">
                    <h3 className="text-lg font-semibold text-black">{project.title}</h3>
                    <img src={project.imageUrl} alt={project.title} className="my-4" />
                    <p className="text-gray-700 p-2 font-bold">{project.description}</p>
                    <p className="text-gray-700">Tech Stack: {project.techStack.join(", ")}</p>
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 border border-blue-500 rounded-md px-4 py-2 mt-4 inline-block hover:bg-blue-500 hover:text-white transition-colors duration-300">
                        View Project
                    </a>
                </div>
            ))}
        </div>
    );
}
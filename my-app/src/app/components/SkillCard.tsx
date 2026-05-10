

const skillCardData = ["JavaScript", "React.js", "Node.js", "CSS", "HTML", "Git", "Sequelize",
     "MongoDB", "Express", "TypeScript", "GCP", "PostgreSQL", "Redis", "Next.js", "GraphQL", "Redux", "Rest API", "Apollo Server"];


export default function SkillCard() {
    return (
        <div className="flex flex-wrap items-center bg-white rounded-lg shadow-md p-6 mb-8 w-full">
            <div className="w-full">
                <h2 className="text-xl font-bold w-full mb-4 text-black text-center">Skills</h2>
            </div>
            {skillCardData.map((skill, index) => (
                <div key={index} className="m-2">
                    <h3 className="text-black font-semibold border border-gray-300 rounded-md p-2 hover:bg-gray-500 cursor-pointer">{skill}</h3>
                </div>
            ))}
        </div>
    );
}
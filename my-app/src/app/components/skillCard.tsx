

const skillCardData = ["JavaScript", "React.js", "Node.js", "CSS", "HTML", "Git", "Sequelize",
     "MongoDB", "Express", "TypeScript", "GCP", "PostgreSQL", "Redis", "Next.js", "GraphQL", "Redux", "Rest API", "Apollo Server"];


export default function SkillCard() {
    return (
        <div>
            {skillCardData.map((skill, index) => (
                <div key={index}>
                    <h3>{skill}</h3>
                </div>
            ))}
        </div>
    );
}
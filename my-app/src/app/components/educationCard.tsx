

const educationCardData = [
    {
        institution: "State University of Jakarta",
        degree: "Bachelor of Japanese Studies",
        duration: "August 2017 - November 2022"
    },
    {
        institution: "Hacktiv8",
        degree: "Full Stack JavaScript Bootcamp",
        duration: "November 2025 - April 2026"
    }
];


export default function EducationCard() {
    return (
        <div>
            {educationCardData.map((education, index) => (
                <div key={index}>
                    <h3>{education.degree}</h3>
                    <p>{education.institution}</p>
                    <p>{education.duration}</p>
                </div>
            ))}
        </div>
    );
}


const educationCardData = [
    {
        institution: "State University of Jakarta",
        degree: "Bachelor of Japanese Studies",
        duration: "August 2017 - November 2022",
        imgUrl: "https://unj.ac.id/wp-content/uploads/2025/02/UNJ-LOGO-512-PX-1.png"
    },
    {
        institution: "Hacktiv8",
        degree: "Full Stack JavaScript Bootcamp",
        duration: "November 2025 - April 2026",
        imgUrl: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/322/original/Logo_Hacktiv8.jpg"
    }
];


export default function EducationCard() {
    return (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 mb-8 w-full">
            <h2 className="text-xl font-bold text-black">Education</h2>
            {educationCardData.map((education, index) => (
                <div key={index} className="mb-4 border border-gray-300 rounded-md p-4 w-full m-2 flex flex-col items-center">
                    <img src={education.imgUrl} alt={education.institution} className="my-4 h-40" />
                    <h3 className="text-lg font-semibold text-black">{education.degree}</h3>
                    <p className="text-gray-700">{education.institution}</p>
                    <p className="text-gray-700">{education.duration}</p>
                </div>
            ))}
        </div>
    );
}
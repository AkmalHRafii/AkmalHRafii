

const workExpData = [
    {
        company: "Yamabiko Ryokan",
        position: "Hotel Staff",
        duration: "October 2023 - October 2025",
        description: "Worked as a hotel staff at a traditional Japanese inn. Responsible as a Kitchen assistant, for mainly food preparation assistance, and Main building support for mainly room maintenance and bed making. ",
        link: "https://www.yamabiko-ryokan.com/"
    }
];

export default function WorkExpCard() {
    return (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 mb-8 w-full">
            <h2 className="text-xl font-bold text-black">Work Experience</h2>
            {workExpData.map((workExp, index) => (
                <div key={index} className="mb-4 border border-gray-300 rounded-md p-4 w-full m-2">
                    <h3 className="text-lg font-semibold text-black">{workExp.position} at {workExp.company}</h3>
                    <p className="text-gray-700">{workExp.duration}</p>
                    <p className="text-gray-700 p-2">{workExp.description}</p>
                    <a href={workExp.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 border border-blue-500 rounded-md px-4 py-2 mt-4 inline-block hover:bg-blue-500 hover:text-white transition-colors duration-300">
                        View Company
                    </a>
                </div>
            ))}
        </div>
    );
}
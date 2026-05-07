

const workExpData = [
    {
        company: "Yamabiko Ryokan",
        position: "Hotel Staff",
        duration: "October 2023 - October 2025",
        description: "Worked as a hotel staff at a traditional Japanese inn. Responsible as a Kitchen assistant, for mainly food preparation assistance, and Main building support for mainly room maintenance and bed making. "
    }
];

export default function WorkExpCard() {
    return (
        <div>
            {workExpData.map((workExp, index) => (
                <div key={index}>
                    <h3>{workExp.position} at {workExp.company}</h3>
                    <p>{workExp.duration}</p>
                    <p>{workExp.description}</p>
                </div>
            ))}
        </div>
    );
}
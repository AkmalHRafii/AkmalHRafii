


const profile = {
  name: "Akmal H. Rafii",
  title: "Full Stack Developer",
  description:
    "Full-Stack Developer and Hacktiv8 graduate with a professional background in Japan. Proficient in JavaScript/TypeScript and SQL/NoSQL databases. Native-level Japanese speaker (JLPT N1) with strong cross-cultural communication skills.",
  imageUrl: "../public/profile.jpg",
  email: "ahhikaru@gmail.com",
  birthDate: "March 1999",
  linkedIn: "https://www.linkedin.com/in/akmal-hanif-rafii-70304b3bb/",
  github: "https://github.com/akmalrafii"
};


export default function ProfileCard() {
  return (
    <div>
      <img src={profile.imageUrl} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.title}</p>
      <p>{profile.description}</p>
      <p>Email: {profile.email}</p>
      <p>Birth Date: {profile.birthDate}</p>
      <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href={profile.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  );
}
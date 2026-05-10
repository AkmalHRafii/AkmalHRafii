


const profile = {
  name: "Akmal H. Rafii",
  title: "Full Stack Developer",
  description:
    "A Manga, Anime, and Game enthusiast with a background in Japanese Studies, have been working as a hotel staff at a traditional Japanese inn for 2 years, and recently graduated from Hacktiv8 Full Stack JavaScript Bootcamp. Why? Because i want to skill up myself in programming. To be honest, i always have an interest in programming since i was in high school, but i never have the courage to pursue it until i finally decided to take the leap and join the bootcamp. I am passionate about learning new technologies and continuously improving my skills as a developer. I also intrested in AI, if you know 'Fairy' from 'Zenless Zone Zero', 'KETSU' from 'Heaven Burns Red', or 'Arona' from 'Blue Archive', it's my dream to create an AI like them in the future. At least, i want one for myself, haha.",
  imageUrl: "profile.jpg",
  email: "ahhikaru@gmail.com",
  birthDate: "March 1999",
  linkedIn: "https://www.linkedin.com/in/akmal-hanif-rafii-70304b3bb/",
  github: "https://github.com/akmalrafii"
};


export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 mb-8 w-full">
      <img className="rounded-md w-50 h-70 object-cover" src={profile.imageUrl} alt={profile.name} />
      <h2 className="text-xl font-bold text-black">{profile.name}</h2>
      <p className="text-lg text-gray-600 font-semibold">{profile.title}</p>
      <p className="text-gray-700 text-center p-2">{profile.description}</p>
      <p className="text-gray-700">Email: {profile.email}</p>
      <p className="text-gray-700">Birth Date: {profile.birthDate}</p>
      <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        LinkedIn
      </a>
      <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        GitHub
      </a>
    </div>
  );
}
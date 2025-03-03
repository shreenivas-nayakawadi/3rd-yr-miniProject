const About = ({ teamMembers }) => {
    return (
        <div id="about" className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <h2 className="text-3xl font-bold mb-4 col-span-full">About Us</h2>
            {teamMembers.map((member) => (
                <div key={member.roll} className="bg-gray-100 p-8 rounded-2xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                    <p>Roll No: {member.roll}</p>
                    <p>{member.college}</p>
                    <p>{member.department}</p>
                </div>
            ))}
        </div>
    );
};

export default About;
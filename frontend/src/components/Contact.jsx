const teamMembers = [
    {
          name: "Shreenivas Nayakawadi",
          email: "1ds22is143@dsce.edu.in",
    },
    {
          name: "Shreesha A",
          email: "1ds22is144@dsce.edu.in",
    },
    {
          name: "Siddeshwar M",
          email: "1ds22is155@dsce.edu.in",
    },
    {
          name: "Prashant S N",
          email: "1ds23is415@dsce.edu.in",
    },
];

const Contact = () => {
    return (
          <div id="contact" className="mt-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Contact Our Team</h2>
                <p className="text-lg mb-6">
                      Have any questions or feedback? Reach out to any of our team members below:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      {teamMembers.map((member) => (
                            <div key={member.email} className="bg-gray-100 p-6 rounded-2xl shadow-md">
                                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                                  <a href={`mailto:${member.email}`} className="text-blue-500 hover:underline">
                                        {member.email}
                                  </a>
                            </div>
                      ))}
                </div>
          </div>
    );
};

export default Contact;

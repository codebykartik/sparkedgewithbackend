import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex Wiring',
      description: 'Complete electrical installation for a 5-story office building in Central Delhi.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Central Delhi',
      duration: '3 months',
      category: 'Commercial'
    },
    {
      id: 2,
      title: 'Residential Complex Power Setup',
      description: 'Electrical infrastructure for 50-unit residential complex with smart home features.',
      image: 'https://media.istockphoto.com/id/1456468188/photo/a-blue-collar-worker-a-repairman-is-checking-and-servicing-telecommunication-equipment.jpg?s=2048x2048&w=is&k=20&c=bHqFeALfkSEZHoO0CPvWEYjEGGKIIlqJN3Kk3eBMrzQ=',
      location: 'South Delhi',
      duration: '4 months',
      category: 'Residential'
    },
    {
      id: 3,
      title: 'Industrial Facility Upgrade',
      description: 'High-voltage electrical system upgrade for manufacturing facility.',
      image: 'https://media.istockphoto.com/id/1203370962/photo/construction-industry-architects-and-engineers-working-together.jpg?s=2048x2048&w=is&k=20&c=qkBmGYPF4TVnwTtseQMjxD86xIGGjIs7ZhQ8txGJqYk=',
      location: 'Gurgaon',
      duration: '2 months',
      category: 'Industrial'
    },
    {
      id: 4,
      title: 'Shopping Mall Installation',
      description: 'Complete electrical setup for new shopping mall including lighting and power distribution.',
      image: 'https://media.istockphoto.com/id/181996772/photo/busy-shopping-mall.jpg?s=2048x2048&w=is&k=20&c=pETuhOwmRz0TpRpbLAy3M_Kx1X6eyHrO2letonFiQ4g=',
      location: 'East Delhi',
      duration: '6 months',
      category: 'Commercial'
    },
    {
      id: 5,
      title: 'Hospital Emergency Systems',
      description: 'Critical electrical infrastructure and backup power systems for healthcare facility.',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg',
      location: 'West Delhi',
      duration: '5 months',
      category: 'Healthcare'
    },
    {
      id: 6,
      title: 'Smart Building Automation',
      description: 'Advanced electrical systems with IoT integration for smart office building.',
      image: 'https://media.istockphoto.com/id/2169996030/photo/close-up-of-meter-box.jpg?s=1024x1024&w=is&k=20&c=Q5KZVJE5hiNix9QGKqvxrZ6nwQMfaEaSFI9k4v9qKkU=',
      location: 'Noida',
      duration: '4 months',
      category: 'Smart Building'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our expertise through successful electrical installations 
            across Delhi and NCR. Each project represents our commitment to quality and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-blue-100 mb-6">
              Let's discuss your electrical needs and create a solution that works for you.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const scrollToContact = () => {
  const element = document.getElementById('contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default Projects;
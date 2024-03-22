/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="p-0 m-0 box-border font-Poppins">
    <div className="bg-blue-700 min-h-screen flex items-center justify-center">
      <div className="relative w-220 h-220 bg-white p-30 rounded-full shadow-lg transition-all duration-400 m-0 20px border-10 hover:border-10 hover:h-260">
        <div className="w-full h-full relative hover:border-10 hover:-translate-y-70">
            <Image
              src="/man-avatar-clipart-illustration-free-png.webp"
              alt="Profile"
              width={128}
              height={128}
              className="object-fill w-full border-0 transition-all duration-400 rounded-full z-99 "
            />
          </div>
        <div className="text-center transform -translate-y-90 opacity-0 pointer-events-none transition-all duration-500 hover:opacity-100 hover:pointer-events-all">
          <h3 className="text-21 font-semibold text-blue-700">Tom Cruise</h3>
          <p className="text-15 font-medium mb-12">Full Stack Developer</p>
          <div className="social-links">
            <FontAwesomeIcon className="text-21 mx-3 cursor-pointer text-gray-700 transition-all duration-400 hover:text-blue-700" icon={faFacebook} size="2x"  />
            <FontAwesomeIcon className="text-21 mx-3 cursor-pointer text-gray-700 transition-all duration-400 hover:text-blue-700" icon={faTwitter} size="2x"  />
            <FontAwesomeIcon className="text-21 mx-3 cursor-pointer text-gray-700 transition-all duration-400 hover:text-blue-700" icon={faInstagram} size="2x"  />
          </div>
        </div>
      </div>
 
      </div></div>
  );
};

export default Home;


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Home = () => {
  const teamMembers = [
    { name: 'Tom Cruise', role: 'Full Stack Developer' },
    { name: 'John Doe', role: 'Frontend Developer' },
    { name: 'Jane Doe', role: 'Backend Developer' },
    { name: 'Alice Smith', role: 'UI/UX Designer' },
    { name: 'Bob Johnson', role: 'Data Scientist' },
    { name: 'Eve White', role: 'DevOps Engineer' },
    // Add more team members here
  ];

  return (
    <div className="p-0 m-0 box-border font-Poppins">
      <div className="home-container bg-blue-700 min-h-screen flex items-center justify-center">
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="profile-card relative w-64 h-140 bg-white p-6 rounded-full shadow-lg transition-all duration-400 border-4 hover:border-0 hover:h-140 hover:w-140 text-center mb-8 mx-4"
            >
              <div className="img w-32 h-32 mx-auto mb-4 relative group-hover:-translate-y-8 group-hover:scale-105">
                <Image
                  src="/man-avatar-clipart-illustration-free-png.webp"
                  alt="Profile"
                  width={128}
                  height={128}
                  className="object-fill w-full border-0 transition-all duration-400 rounded-full z-99"
                />
              </div>
              <div className="caption">
                <h3 className="text-xl font-semibold text-blue-700 mb-1">{member.name}</h3>
                <p className="text-sm font-medium mb-2">{member.role}</p>
                <div className="social-links flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <FontAwesomeIcon style={{ width: '30px', height: '30px' }} className="mx-1 cursor-pointer text-gray-700 transition-all duration-400 group-hover:text-blue-700" icon={faFacebook} />
                  <FontAwesomeIcon style={{ width: '30px', height: '30px' }} className="mx-1 cursor-pointer text-gray-700 transition-all duration-400 group-hover:text-blue-700" icon={faTwitter} />
                  <FontAwesomeIcon style={{ width: '30px', height: '30px' }} className="mx-1 cursor-pointer text-gray-700 transition-all duration-400 group-hover:text-blue-700" icon={faInstagram} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
*/
"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/footer';
import './styles.css'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Home = () => {
  const teamMembers = [
    { name: 'Tom Cruise', role: 'Full Stack Developer' },
    { name: 'John Doe', role: 'Frontend Developer' },
    { name: 'Jane Doe', role: 'Backend Developer' },
    { name: 'Alice Smith', role: 'UI/UX Designer' },
    { name: 'Bob Johnson', role: 'Data Scientist' },
    { name: 'Eve White', role: 'DevOps Engineer' },
    // Add more team members here
  ];

  return (
    <>
      <div className="p-0 mt-14 m-0 box-border font-Poppins">
        <br></br>
        <h1 className='text-center mb-4 text-3xl font-semibold'>Our Team</h1>
        <div className="bg-b5179e-700 flex min-h-[70vh] justify-center">
          <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="profile-card overflow-hidden relative w-56 h-fit bg-white p-5 rounded-lg shadow-md border-[1px] transition-all duration-400 hover:border-0 hover:h-140 hover:w-140 text-center mb-8 mx-4 group"
              >
                <div className="z-10 w-24 h-24 mx-auto mb-4 relative group-hover:-translate-y-2 group-hover:ease-in-out transition-all group-hover:scale-110">
                  <Image
                    src="/man-avatar-clipart-illustration-free-png.webp"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-fill w-full border-0 transition-all duration-400 rounded-full z-99"
                  />
                </div>
                <div className="caption">
                  <h3 className="text-xl font-semibold custom-text-color text-700 mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold  mb-2">{member.role}</p>
                  <div className="social-links flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <FontAwesomeIcon
                      style={{ width: '30px', height: '30px' }}
                      className="mx-1 cursor-pointer text-gray-700 transition-all duration-400 group-hover:text-[#A9009D]-700"
                      icon={faFacebook}
                    />
                    <FontAwesomeIcon
                      style={{ width: '30px', height: '30px' }}
                      className="mx-1 cursor-pointer text-gray-700 transition-all duration-400 group-hover:text-[#A9009D]-700"
                      icon={faTwitter}
                    />
                    <FontAwesomeIcon
                      style={{ width: '30px', height: '30px' }}
                      className="mx-1 cursor-pointer text-gray-700 transition-all duration-400 group-hover:text-[#A9009D]-700"
                      icon={faInstagram}
                    />
                  </div>
                </div>
                <div className='w-full skew-y-12 h-32 z-0 bg-purple-500/80 absolute -top-10 -right-0 '></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
  );
};

export default Home;


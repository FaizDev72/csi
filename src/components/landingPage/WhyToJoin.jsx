import React from 'react';

const sections = [
  {
    id: '01',
    title: 'Skill Development',
    description: 'CSI  frequently organizes seminars, workshops and training programs conducted by industry experts in various technological streams. The participating members can work  on these projects in workshops by  following along, in the process  developing  their skills and gain some real world  experience and knowledge needed for building industry-ready applications.'
  },
  {
    id: '02',
    title: 'Networking and Mentorship',
    description: 'Connect with industry leaders, researchers, and peers to expand your professional network while benefiting from guidance and mentorship from experienced professionals in the field.'
  },
  {
    id: '03',
    title: 'Competitions and Events',
    description: 'CSI organizes various contests, hackathons, and events where you can showcase your talents, compete with peers, and win recognition. These events also provide a platform to test your skills and gain practical experience.'
  }
];

function WhyToJoin() {
  return (
    <div className='relative mx-auto px-4 sm:px-6 md:py-[4vw] md:px-[7vw] my-[10vw]'>
      <div className=''>
        <img 
          src="/landingpage/tojoin_bg.svg" 
          alt="Background" 
          className="absolute md:top-0 md:left-10 w-[50vw] md:w-[50vw] md:h-full h-[25vw] md:object-fit z-0"
          style={{ maxWidth: '50vw' }} 
        />
      </div>
      <div className='flex flex-col md:flex-row md:gap-[2vw] gap-6 z-10'>
        <div className="md:w-[25vw] pt-10 md:pt-14 z-10 md:justify-start justify-center">
          <div className="text-[#5E5E5E] pl-4 font-productsans text-6xl md:text-7xl font-semibold leading-tight md:leading-[1.25]">
            Why To <br /> Join CSI ?
          </div>
        </div>

        <div className='flex flex-col px-4 py-6 md:px-12 md:py-8 gap-6 md:gap-10 w-full md:w-[60vw]'>
          {sections.map(({ id, title, description }) => (
            <div key={id} className='flex flex-col items-start gap-2'>
              <div className='text-2xl md:text-3xl text-[#BFBFBF]'>
                {id}
              </div>
              <hr className="border-t-2 border-[#75ACFF] w-[85%]"/>
              <div className='text-[#003089] text-xl md:text-2xl'> 
                {title}
              </div>
              <div className='text-[#5D5D5D] text-justify text-base md:text-xl font-productsans font-light'>
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyToJoin;

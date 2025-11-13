import React, { useState } from 'react';
import { ExternalLink, Image as ImageIcon, X } from 'lucide-react';

interface WebProject {
  title: string;
  category: 'Web Development';
  description: string;
  color: string;
  liveLink: string;
  image?: string;
}

interface GraphicProject {
  title: string;
  category: 'Graphic Design';
  description: string;
  color: string;
  image?: string;
  galleryImages?: string[]; // Additional images for modal gallery
}

type Project = WebProject | GraphicProject;

interface PortfolioSectionProps {
  webProjects: WebProject[];
  graphicProjects: GraphicProject[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  webProjects,
  graphicProjects,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'graphics'>('all');
  const [selectedGraphic, setSelectedGraphic] = useState<GraphicProject | null>(
    null
  );

  const allProjects: Project[] = [...webProjects, ...graphicProjects];

  const filteredProjects =
    activeTab === 'web'
      ? webProjects
      : activeTab === 'graphics'
      ? graphicProjects
      : allProjects;

  const handleCardClick = (project: Project) => {
    if (project.category === 'Web Development') {
      window.open(project.liveLink, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedGraphic(project);
    }
  };

  const closeModal = () => {
    setSelectedGraphic(null);
  };

  return (
    <section
      id='portfolio'
      className='py-20 bg-gradient-to-br from-purple-50 to-blue-50'
    >
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16 animate-in fade-in duration-700'>
          <h2 className='text-5xl font-black mb-4'>
            My <span className='text-yellow-400'>Portfolio</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            A selection of the works in which I have carried out from the
            creative side, both as a designer and developer.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className='flex justify-center gap-4 mb-12 flex-wrap'>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
              activeTab === 'all'
                ? 'bg-yellow-400 text-gray-900 shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab('web')}
            className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
              activeTab === 'web'
                ? 'bg-yellow-400 text-gray-900 shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Web Development ({webProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('graphics')}
            className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
              activeTab === 'graphics'
                ? 'bg-yellow-400 text-gray-900 shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Graphic Design ({graphicProjects.length})
          </button>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              onClick={() => handleCardClick(project)}
              className='group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer'
            >
              {/* Project Image/Preview */}
              <div className='h-64 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100'>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover p-4 object-top'
                  />
                ) : (
                  <div
                    className={`${project.color} w-full h-full flex items-center justify-center`}
                  >
                    <div className='absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <div className='text-6xl font-black text-white/20 group-hover:scale-110 transition-transform duration-300'>
                      {project.category === 'Graphic Design' ? 'GD' : 'WD'}
                    </div>
                  </div>
                )}

                {/* Overlay for hover effect */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300'></div>
              </div>

              {/* Project Info */}
              <div className='p-6'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-semibold text-yellow-400'>
                    {project.category}
                  </span>
                  {project.category === 'Web Development' && (
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-1 text-sm font-semibold text-gray-900 bg-yellow-100 hover:bg-yellow-200 px-3 py-1.5 rounded-full transition-colors'
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
                <p className='text-gray-600'>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className='text-center py-20'>
            <ImageIcon size={64} className='mx-auto text-gray-300 mb-4' />
            <p className='text-xl text-gray-500'>No projects to display yet.</p>
          </div>
        )}
      </div>

      {/* Graphic Design Modal */}
      {selectedGraphic && (
        <div
          className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300'
          onClick={closeModal}
        >
          <div
            className='bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className='flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10'>
              <div>
                <h3 className='text-3xl font-bold'>{selectedGraphic.title}</h3>
                <p className='text-gray-600 mt-1'>
                  {selectedGraphic.description}
                </p>
              </div>
              <button
                onClick={closeModal}
                className='text-gray-500 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full'
              >
                <X size={28} />
              </button>
            </div>

            {/* Modal Content - Scrollable Gallery */}
            <div className='p-6 overflow-y-auto max-h-[calc(90vh-120px)]'>
              <div className='space-y-6'>
                {/* Main Image */}
                {selectedGraphic.image && (
                  <div className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex items-center justify-center'>
                    <img
                      src={selectedGraphic.image}
                      alt={selectedGraphic.title}
                      className='max-w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg'
                    />
                  </div>
                )}

                {/* Gallery Images */}
                {selectedGraphic.galleryImages &&
                  selectedGraphic.galleryImages.length > 0 && (
                    <div className='grid md:grid-cols-2 gap-6'>
                      {selectedGraphic.galleryImages.map((img, idx) => (
                        <div
                          key={idx}
                          className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 flex items-center justify-center'
                        >
                          <img
                            src={img}
                            alt={`${selectedGraphic.title} - ${idx + 1}`}
                            className='max-w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md'
                          />
                        </div>
                      ))}
                    </div>
                  )}

                {/* If no images at all */}
                {!selectedGraphic.image &&
                  (!selectedGraphic.galleryImages ||
                    selectedGraphic.galleryImages.length === 0) && (
                    <div className='text-center py-20'>
                      <ImageIcon
                        size={64}
                        className='mx-auto text-gray-300 mb-4'
                      />
                      <p className='text-gray-500'>
                        No images available for this project.
                      </p>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;

// import React, { useState } from 'react';
// import { ExternalLink, Image as ImageIcon } from 'lucide-react';

// interface WebProject {
//   title: string;
//   category: 'Web Development';
//   description: string;
//   color: string;
//   liveLink: string;
//   image?: string;
// }

// interface GraphicProject {
//   title: string;
//   category: 'Graphic Design';
//   description: string;
//   color: string;
//   image?: string;
// }

// type Project = WebProject | GraphicProject;

// interface PortfolioSectionProps {
//   webProjects: WebProject[];
//   graphicProjects: GraphicProject[];
// }

// const PortfolioSection: React.FC<PortfolioSectionProps> = ({
//   webProjects,
//   graphicProjects,
// }) => {
//   const [activeTab, setActiveTab] = useState<'all' | 'web' | 'graphics'>('all');

//   const allProjects: Project[] = [...webProjects, ...graphicProjects];

//   const filteredProjects =
//     activeTab === 'web'
//       ? webProjects
//       : activeTab === 'graphics'
//       ? graphicProjects
//       : allProjects;

//   return (
//     <section
//       id='portfolio'
//       className='py-20 bg-gradient-to-br from-purple-50 to-blue-50'
//     >
//       <div className='max-w-7xl mx-auto px-6'>
//         <div className='text-center mb-16 animate-in fade-in duration-700'>
//           <h2 className='text-5xl font-black mb-4'>
//             My <span className='text-yellow-400'>Portfolio</span>
//           </h2>
//           <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
//             A selection of the works in which I have carried out from the
//             creative side, both as a designer and developer.
//           </p>
//         </div>

//         {/* Filter Tabs */}
//         <div className='flex justify-center gap-4 mb-12 flex-wrap'>
//           <button
//             onClick={() => setActiveTab('all')}
//             className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
//               activeTab === 'all'
//                 ? 'bg-yellow-400 text-gray-900 shadow-lg'
//                 : 'bg-white text-gray-700 hover:bg-gray-100'
//             }`}
//           >
//             All Projects
//           </button>
//           <button
//             onClick={() => setActiveTab('web')}
//             className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
//               activeTab === 'web'
//                 ? 'bg-yellow-400 text-gray-900 shadow-lg'
//                 : 'bg-white text-gray-700 hover:bg-gray-100'
//             }`}
//           >
//             Web Development ({webProjects.length})
//           </button>
//           <button
//             onClick={() => setActiveTab('graphics')}
//             className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
//               activeTab === 'graphics'
//                 ? 'bg-yellow-400 text-gray-900 shadow-lg'
//                 : 'bg-white text-gray-700 hover:bg-gray-100'
//             }`}
//           >
//             Graphic Design ({graphicProjects.length})
//           </button>
//         </div>

//         {/* Projects Grid */}
//         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
//           {filteredProjects.map((project, i) => (
//             <div
//               key={i}
//               className='group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
//             >
//               {/* Project Image/Preview */}
//               <div
//                 className={`${project.color} h-64 flex items-center justify-center relative overflow-hidden`}
//               >
//                 {project.image ? (
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className='w-full h-full object-cover'
//                   />
//                 ) : (
//                   <>
//                     <div className='absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
//                     <div className='text-6xl font-black text-white/20 group-hover:scale-110 transition-transform duration-300'>
//                       {project.category === 'Graphic Design' ? 'GD' : 'WD'}
//                     </div>
//                   </>
//                 )}

//                 {/* Overlay for hover effect */}
//                 <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300'></div>
//               </div>

//               {/* Project Info */}
//               <div className='p-6'>
//                 <div className='flex items-center justify-between mb-2'>
//                   <span className='text-sm font-semibold text-yellow-400'>
//                     {project.category}
//                   </span>
//                   {project.category === 'Web Development' && (
//                     <a
//                       href={project.liveLink}
//                       target='_blank'
//                       rel='noopener noreferrer'
//                       className='flex items-center gap-1 text-sm font-semibold text-gray-900 bg-yellow-100 hover:bg-yellow-200 px-3 py-1.5 rounded-full transition-colors'
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       Live <ExternalLink size={14} />
//                     </a>
//                   )}
//                 </div>
//                 <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
//                 <p className='text-gray-600'>{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty State */}
//         {filteredProjects.length === 0 && (
//           <div className='text-center py-20'>
//             <ImageIcon size={64} className='mx-auto text-gray-300 mb-4' />
//             <p className='text-xl text-gray-500'>No projects to display yet.</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;

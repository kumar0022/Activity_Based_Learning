import React, { useState } from 'react';
// import { Book, Video, ChevronRight, Home, Search, Download, FileText } from 'lucide-react';
import { Book, Video, ChevronRight, Home, Search, Download, FileText, Star, Award, Trophy } from 'lucide-react';

const gradeContent = {

  'Grade 6': {
    Science: {
      topics: {
        'Sound': {
          subtopics: [
            'Exploring Pitch of Sound with Rubber Bands',
            'Exploring Sound and Vibration',
            'Jal Tarang - Exploring Pitch and Vibration',
            'Visualize a Sound Wave',
            'Exploring Amplitude of Sound'
          ],
          videos: {
            'Exploring Pitch of Sound with Rubber Bands': 'https://youtu.be/TOqFJBUd0kM?si=Vz0TZ57pYGGY2qdF',
            'Exploring Sound and Vibration': 'https://youtu.be/VvmEHJRcSlA',
            'Jal Tarang - Exploring Pitch and Vibration': 'https://youtu.be/YyGL29KEXqM',
            'Visualize a Sound Wave': 'https://youtu.be/mGFikWbW_T4',
            'Exploring Amplitude of Sound': 'https://youtu.be/q7TzZg6f860'
          },
          materials: {
            'Exploring Pitch of Sound with Rubber Bands': ['Guide 1', 'Example 1'],
            'Exploring Sound and Vibration': ['Guide 2', 'Example 2'],
            'Jal Tarang - Exploring Pitch and Vibration': ['Guide 3', 'Example 3'],
            'Visualize a Sound Wave': ['Guide 4', 'Example 4'],
            'Exploring Amplitude of Sound': ['Guide 5', 'Example 5']
          }
        },
        'Magnetism': {
          subtopics: [
            'Magnet Basics',
            // 'Magnet Poles and Fields'
          ],
          videos: {
            'Magnet Basics': 'https://youtu.be/jLkRJWpqvPc',
            // 'Magnet Poles and Fields': '/api/placeholder/320/180'
          },
          materials: {
            'Magnet Basics': ['Magnetism Guide', 'Examples'],
            // 'Magnet Poles and Fields': ['Field Diagrams', 'Practice Sheets']
          }
        }, 'Force & Pressure': {
          subtopics: [
            'Studying Friction with Rice and Stick',
            'The Balloon Burst Challenge',
            'Equal Pressure, Equal Flow',
            'A Height Challenge',
            'The Liquid Race Challenge',
            'Fluid Pressure',
            'Pressure and Inflation',
            'Simple Water Fountain',
            'Air Pressure Magic'

          ],
          videos: {
            'Studying Friction with Rice and Stick': 'https://youtu.be/AW57nHf46Jc?si=8QmOXKtr5RSuU0AZ',
            'The Balloon Burst Challenge': 'https://youtu.be/aLklwVWfa4s?si=mp_-t_jlU_p7cnSW',
            'Equal Pressure, Equal Flow': 'https://youtu.be/etnTjm712hI?si=n2ZEkw7eOlVLrTl9',
            'A Height Challenge': 'https://youtu.be/S7jkhgAkems?si=XMg5oy20MVzv_og6',
            'The Liquid Race Challenge': 'https://youtu.be/PIKFzeY6cEk?si=D3xc1AanbKW6qqFX',
            'Fluid Pressure': 'https://youtu.be/Ahp8EBS9IHs?si=7stQvAOjhw_AC3yy',
            'Pressure and Inflation': 'https://youtu.be/b2JuXFHiO_0?si=NK275i56T0Ov9Tao',
            'Simple Water Fountain': 'https://youtu.be/bzbDBtrgx2E?si=G3sAniC99l-rtRbD',
            'Air Pressure Magic': 'https://youtu.be/qUk5iUITSSk?si=u71k5eW2lgrJf5kq'

          },
          materials: {
            'Studying Friction with Rice and Stick': ['Magnetism Guide', 'Examples'],
            'The Balloon Burst Challenge': ['Field Diagrams', 'Practice Sheets'],
            'Equal Pressure, Equal Flow': ['Field Diagrams', 'Practice Sheets'],
            'A Height Challenge': ['Field Diagrams', 'Practice Sheets'],
            'The Liquid Race Challenge': ['Field Diagrams', 'Practice Sheets'],
            'Fluid Pressure': ['Field Diagrams', 'Practice Sheets'],
            'Pressure and Inflation': ['Field Diagrams', 'Practice Sheets'],
            'Simple Water Fountain': ['Field Diagrams', 'Practice Sheets'],
            'Air Pressure Magic': []

          }
        },
        'Electric Current & Its Effect': {
          subtopics: [
            'Exploring Switches, Conductors, and Insulators in Electric Circuits',
            'Electric Circuit',
            'Exploring Cells and Batteries',


          ],
          videos: {
            'Exploring Switches, Conductors, and Insulators in Electric Circuits': 'https://youtu.be/9H-2wjawhyI?si=AOFKcOI9Q33kK8NW',
            'Electric Circuit': 'https://youtu.be/RntRZmehJJk?si=xi2kx2hlgiVwvOvo',
            'Exploring Cells and Batteries': 'https://youtu.be/1DgCMsrX7Oc?si=LG4xUG2hwy8HryJW',

          },
          materials: {
            'Exploring Switches, Conductors, and Insulators in Electric Circuits': ['Magnetism Guide', 'Examples'],
            'Electric Circuit': ['Field Diagrams', 'Practice Sheets'],
            'Exploring Cells and Batteries': ['Field Diagrams', 'Practice Sheets'],

          }
        },

      }
    },
    Maths: {
      topics: {
        'Maths': {
          subtopics: [
            'Activity based on congruence',
            'Congruence',
            'PYTHAGORAS',
            'PLACE VALUE',

          ],
          videos: {
            'Activity based on congruence': 'https://youtu.be/Uyk9glvCX60?si=heZmwdK67yxS1eeV',
            'Congruence': 'https://youtu.be/wARxufN4lyc?si=bUYmDbY3mNjZYFdp',
            'PYTHAGORAS': 'https://youtu.be/PkhISAQf3u0?si=sHjxVUZ_efBFnzS3',
            'PLACE VALUE': 'https://youtu.be/4wxDk_V10a8?si=_J3SUb12v2yyOjUV',

          },
          materials: {
            'Activity based on congruence': ['Guide 1', 'Example 1'],
            'Congruence': ['Guide 2', 'Example 2'],
            'PYTHAGORAS': ['Guide 3', 'Example 3'],
            'PLACE VALUE': ['Guide 4', 'Example 4'],

          }
        },
        'Binary Number': {
          subtopics: [
            'Binary NUmber',

          ],
          videos: {
            'Binary NUmber': 'https://youtu.be/ib98-0iPMro?si=o94EpMVhQNQBA3Do',

          },
          materials: {
            'Binary NUmber': ['Magnetism Guide', 'Examples'],

          }
        }, 'LCM & HCF': {
          subtopics: [
            'LCM',
            'HCF',


          ],
          videos: {
            'LCM': 'https://youtu.be/IgtcxmWUqAc?si=Vbhm9i2-9gmLAXuk',
            'HCF': 'https://youtu.be/C06f9A0c_yA?si=SHX8ofYq1N8OVHTE',


          },
          materials: {
            'LCM': ['Magnetism Guide', 'Examples'],
            'HCF': ['Field Diagrams', 'Practice Sheets'],

          }
        }, 'EVEN ODD': {
          subtopics: [
            'EVEN ODD',
            'Fraction',
            'Square Number'



          ],
          videos: {
            'EVEN ODD': 'https://youtu.be/k2UvtDH9ONQ?si=LUvNJnPRcqEzAya5',
            'Fraction': 'https://youtu.be/79QZxqHlEWI?si=q_GYbBaLNYsW1i5G',
            'Square Number': 'https://youtu.be/4nqCeafV2MA?si=-rCCRHedLNPLt7Yw'

          },
          materials: {
            'EVEN ODD': ['Magnetism Guide', 'Examples'],
            'Fraction': ['Magnetism Guide', 'Examples'],
            'Square Number': ['Magnetism Guide', 'Examples'],


          }
        }, 'PUZZLE': {
          subtopics: [
            'Ice Cream Stick Puzzle',




          ],
          videos: {
            'Ice Cream Stick Puzzle': 'https://youtu.be/O2zfpPFrjGI?si=uhGEm0hlHrHALjCb',

          },
          materials: {
            'Ice Cream Stick Puzzle': ['Magnetism Guide', 'Examples'],

          }
        },

      }
    }

  },
  // 'Grade 7': {
  //   Science: {

  //   },
  //   Mathematics: {

  //   }

  // }
};


const App = () => {
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [points, setPoints] = useState(0);
  const [completedVideos, setCompletedVideos] = useState([]);

  const handleVideoComplete = (videoTitle) => {
    if (!completedVideos.includes(videoTitle)) {
      setCompletedVideos([...completedVideos, videoTitle]);
      setPoints(points + 10);
    }
  };

  // const getAchievementLevel = () => {
  //   if (points >= 100) return 'Expert Explorer';
  //   if (points >= 50) return 'Knowledge Seeker';
  //   return 'Learning Adventurer';
  // };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="hover:scale-110 active:scale-90 transition-transform">
              <Home className="w-8 h-8" />
            </div>
            <span className="text-2xl font-bold">EduConnect Adventure</span>
          </div>

          {/* <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Trophy className="w-6 h-6 text-yellow-300" />
              <span className="text-lg">{points} Points</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-yellow-300" />
              <span className="text-lg">{getAchievementLevel()}</span>
            </div>
          </div> */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Grade Selection */}
        <div className="mb-8 opacity-100 transform translate-y-0 transition-all duration-300">
          <h2 className="text-3xl font-bold mb-4 text-center text-blue-800">Choose Your Learning Adventure!</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.keys(gradeContent).map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`p-6 rounded-xl hover:scale-105 active:scale-95 transition-transform ${selectedGrade === grade
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-white hover:bg-blue-50'
                  } shadow-lg transition duration-200 transform hover:-translate-y-1`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <Star className={`w-8 h-8 ${selectedGrade === grade ? 'text-yellow-300' : 'text-blue-500'}`} />
                  <span className="text-xl font-bold">{grade}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Subject Cards */}
        {selectedGrade && (
          <div className="mb-8 transition-opacity duration-300">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Pick Your Subject Quest!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.keys(gradeContent[selectedGrade]).map((subject) => (
                <div
                  key={subject}
                  className={`p-6 rounded-xl cursor-pointer hover:scale-103 active:scale-98 transition-transform ${selectedSubject === subject
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-white hover:bg-blue-50'
                    } shadow-lg transition duration-200`}
                  onClick={() => setSelectedSubject(subject)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Book className="w-8 h-8" />
                      <span className="text-xl font-bold">{subject}</span>
                    </div>
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Learning Content */}
        {selectedSubject && selectedGrade && (
          <div className="mb-8 transition-opacity duration-300">
            {Object.entries(gradeContent[selectedGrade][selectedSubject].topics).map(([topic, details]) => (
              <div key={topic} className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">{topic}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {details.subtopics.map((subtopic) => (
                    <div
                      key={subtopic}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-102 transition-transform"
                    >
                      <div className="relative">
                        <img
                          src="https://indlearn.com/uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_141689597162.jpg"
                          alt={subtopic}
                          className="w-full h-48 object-cover"
                        />
                        {/* {completedVideos.includes(subtopic) && (
                          <div className="absolute top-2 right-2">
                            <Trophy className="w-8 h-8 text-yellow-400" />
                          </div>
                        )} */}
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-3">{subtopic}</h4>
                        <a
                          href={details.videos[subtopic]}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleVideoComplete(subtopic)}
                          className="flex items-center space-x-2 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 mb-3 hover:scale-105 active:scale-95 transition-transform"
                        >
                          <Video className="w-5 h-5" />
                          <span>Start Learning!</span>
                        </a>

                        <div className="border-t pt-3">
                          <h5 className="font-semibold mb-2">Learning Materials:</h5>
                          {details.materials[subtopic].map((material) => (
                            <button
                              key={material}
                              onClick={() => alert(`Downloading ${material}`)}
                              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 w-full p-2 rounded-lg hover:bg-blue-50 hover:scale-102 transition-transform"
                            >
                              <FileText className="w-5 h-5" />
                              <span>{material}</span>
                              <Download className="w-5 h-5 ml-auto" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;


// const App = () => {
//   const [selectedGrade, setSelectedGrade] = useState('');
//   const [selectedSubject, setSelectedSubject] = useState('');
//   const [selectedTopic, setSelectedTopic] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleGradeSelect = (grade) => {
//     setSelectedGrade(grade);
//     setSelectedSubject('');
//     setSelectedTopic('');
//   };

//   const handleSubjectSelect = (subject) => {
//     setSelectedSubject(subject);
//     setSelectedTopic('');
//   };

//   const handleTopicSelect = (topic) => {
//     setSelectedTopic(topic);
//   };

//   const handleDownload = (material) => {
//     // Implement actual download functionality
//     alert(`Downloading ${material}`);
//   };

//   const filteredSubjects = selectedGrade
//     ? Object.keys(gradeContent[selectedGrade]).filter(subject =>
//       subject.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     : [];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 p-4 text-white">
//         <div className="container mx-auto flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <Home className="w-6 h-6" />
//             <span className="text-xl font-bold">EduConnect</span>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search subjects..."
//                 className="px-4 py-2 rounded-lg text-gray-800 w-64"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="container mx-auto p-6">
//         {/* Grade Selection */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-4">Select Grade</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {Object.keys(gradeContent).map((grade) => (
//               <button
//                 key={grade}
//                 onClick={() => handleGradeSelect(grade)}
//                 className={`p-4 rounded-lg ${selectedGrade === grade
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-white hover:bg-blue-50'
//                   } shadow-md transition duration-200`}
//               >
//                 {grade}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Subject Selection */}
//         {selectedGrade && (
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4">Select Subject for {selectedGrade}</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {filteredSubjects.map((subject) => (
//                 <button
//                   key={subject}
//                   onClick={() => handleSubjectSelect(subject)}
//                   className={`p-6 rounded-lg ${selectedSubject === subject
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-white hover:bg-blue-50'
//                     } shadow-md transition duration-200`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <Book className="w-6 h-6" />
//                       <span className="text-lg">{subject}</span>
//                     </div>
//                     <ChevronRight className="w-5 h-5" />
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Topic Selection and Video Display */}

//         {selectedSubject && selectedGrade && (
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4">Topics in {selectedSubject}</h2>
//             {Object.entries(gradeContent[selectedGrade][selectedSubject].topics).map(([topic, details]) => (
//               <div key={topic} className="mb-6">
//                 <h3 className="text-xl font-semibold mb-4">{topic}</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {details.subtopics.map((subtopic) => (
//                     <div
//                       key={subtopic}
//                       className="bg-white rounded-lg shadow-md overflow-hidden"
//                     >
//                       <img
//                         src={details.videos[subtopic]}
//                         alt={subtopic}
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="p-4">
//                         <h4 className="font-bold mb-2">{subtopic}</h4>
//                         <a
//                           href={details.videos[subtopic]}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
//                         >
//                           <Video className="w-5 h-5" />
//                           <span>Watch Video</span>
//                         </a>
//                         <div className="border-t pt-2">
//                           <h5 className="font-semibold mb-2">Study Materials:</h5>
//                           {details.materials[subtopic].map((material) => (
//                             <button
//                               key={material}
//                               onClick={() => handleDownload(material)}
//                               className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 w-full py-1"
//                             >
//                               <FileText className="w-4 h-4" />
//                               <span className="text-sm">{material}</span>
//                               <Download className="w-4 h-4 ml-auto" />
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}


//         {/* Video Player */}
//         {selectedTopic && (
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-2xl font-bold mb-4">
//               {selectedSubject} - {selectedTopic}
//             </h2>
//             <div className="aspect-w-16 aspect-h-9">
//               <img
//                 src={gradeContent[selectedGrade][selectedSubject].videos[selectedTopic]}
//                 alt={`${selectedTopic} video`}
//                 className="w-full rounded-lg"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

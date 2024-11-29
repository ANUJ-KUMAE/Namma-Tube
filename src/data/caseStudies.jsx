import manImage from '../assests/man.jpg';        // Import the image
import manBlueImage from '../assests/manBlue.jpg'; // Import the image
import tvImage from '../assests/Tv.jpg';           // Import the image
import screenImage from '../assests/screen.jpg';

const caseStudies = [
  {
    id: 1,
    title: "Impulse",
    bgColor: "bg-red-500",
    image: manImage,
  },
  {
    id: 2,
    title: "Outreach",
    bgColor: "bg-green-500",
    image: manBlueImage,
  },
  {
    id: 3,
    title: "Optimize",
    bgColor: "bg-blue-500",
    image: tvImage,
  },
  {
    id: 4,
    title: "Forward",
    bgColor: "bg-yellow-500",
    image: screenImage,
  },
];

export default caseStudies;

import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
const onButtonClick = () => {
const pdfUrl = "resume.pdf";
const link = document.createElement("a");
link.href = pdfUrl;
link.download = "document.pdf"; // specify the filename
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
};
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Keith</span>
        👋
        <br />
        An aspiring software engineer from Philadelphia, PA.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        As evidence of my proficiency in HTML, CSS, and JavaScript, I have compiled a number of small projects. Curious about what I can contribute?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my projects page
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Worked independently to aquire many skills before obtaining a BS in web development and MS in Cybersecurity
        </p>
        

        <Link className='neo-brutalism-white neo-btn'>
        <button onClick={onButtonClick}>
              Download Resume
          </button> 
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a developer? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;

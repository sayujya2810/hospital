import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGlassdoor} from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col justify-between align-center content-center w-100">
      <div className="flex flex-col h-[75vh] justify-center content-center w-100 ">
        <h1 className="w-100 text-3xl">Lorem Heading</h1>
        <hr className="w-100 mt-2 border-1 border-slate-300" />
        <p className="mt-7 text-md">Amet laborum exercitation occaecat officia nisi. Aliquip sit minim voluptate exercitation ut proident sunt elit ad officia. Reprehenderit dolor reprehenderit tempor duis nostrud eu laborum ullamco nostrud enim nulla tempor. Ut qui mollit enim ipsum adipisicing quis aliqua. Reprehenderit voluptate reprehenderit incididunt mollit quis quis consectetur do pariatur sint Lorem culpa enim quis.</p>
        <p className="mt-7 text-md">Amet laborum exercitation occaecat officia nisi. Aliquip sit minim voluptate exercitation ut proident sunt elit ad officia. Reprehenderit dolor reprehenderit tempor duis nostrud eu laborum ullamco nostrud enim nulla tempor. Ut qui mollit enim ipsum adipisicing quis aliqua. Reprehenderit voluptate reprehenderit incididunt mollit quis quis consectetur do pariatur sint Lorem culpa enim quis.</p>
      </div>
      <div className="flex flex-col justify-center content-center w-100 h-[75vh] ">
        <h1 className="w-100 text-2xl sm:text-4xl">Word from <span style={{color:"#06b5d4"}}>Varun Batra</span> </h1>
        <h3 className="text-xs sm:text-sm  mt-1">PHD Surgeon something lavda lasan</h3>
        <hr className="w-100 mt-2 border-1 border-slate-300" />
        <div className="container flex-row mt-8 sm:flex justify-center   ">
          <div className="justify-center">
            <img className="h-[10rem] display-none w-[10rem] flex justify-self-center sm:h-[15rem] sm:w-[15rem] rounded-full "  src="./media/doctor-image.jpg" />
          </div>
          <p className="mt-7 sm:w-[60%] sm:ml-4 text-md text-left sm:text-md">Amet laborum exercitation occaecat officia nisi. Aliquip sit minim voluptate exercitation ut proident sunt elit ad officia. Reprehenderit dolor reprehenderit tempor duis nostrud eu laborum ullamco nostrud enim nulla tempor. Ut qui mollit enim ipsum adipisicing quis aliqua. Reprehenderit voluptate reprehenderit incididunt mollit quis quis consectetur do pariatur sint Lorem culpa enim quis.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center content-center w-100 h-[75vh] ">
        <h1 className="w-100 text-2xl sm:text-4xl">Our Goals</h1>
        <hr className="w-100 mt-2 border-1 border-slate-300" />
        <p className="mt-7 text-md sm:text-md"> Proident sunt elit ad officia. Reprehenderit dolor reprehenderit tempor duis nostrud eu laborum ullamco nostrud enim nulla tempor. Ut qui mollit enim ipsum adipisicing quis aliqua. Reprehenderit voluptate reprehenderit incididunt mollit quis quis consectetur do pariatur sint Lorem culpa enim quis.</p>
        <ul className="list-disc pl-5 mt-5">
          <li className="marker:text-cyan">Aliqua aliqua laboris mollit mollit excepteur Lorem est id cillum nostrud occaecat.</li>
          <li className="marker:text-cyan">Aliqua aliqua id cillum nostrud occaecat.</li>
          <li className="marker:text-cyan">Aliqua aliqua laboris mollit mollit excepteur Lorem est .</li>
          <li className="marker:text-cyan">Losdnv kdsdfvc  kjndknf mollit excepteur Lorem est id cillum nostrud occaecat.</li>
        </ul>
      </div>
      <div className="flex flex-col justify-center content-center w-100 h-[70vh] text-white bg-dark px-10 rounded-t-xl ">
        <h1 className="w-100 text-2xl sm:text-4xl">Reach us out</h1>
        <hr className="w-100 mt-2 border-1 border-slate-300" />
        <div>
          <div className="sm:flex sm:justify-center py-5 ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.086091735497!2d77.2056677348877!3d28.567177400000027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce265fa4d97ab%3A0x525929da7d341ae1!2sAIIMS%20Hospital!5e0!3m2!1sen!2sin!4v1667741059409!5m2!1sen!2sin" className="w-[100%] h-300 sm:w-400 sm:h-300" ></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.086091735497!2d77.2056677348877!3d28.567177400000027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce265fa4d97ab%3A0x525929da7d341ae1!2sAIIMS%20Hospital!5e0!3m2!1sen!2sin!4v1667741059409!5m2!1sen!2sin" width="400" height="300" ></iframe> */}
            <div className="p-3">
              <p>Ansari Nagar East, Gautam Nagar, Ansari Nagar East, New Delhi, Delhi 110029</p>
              <div className="flex py-5  justify-around">
                <button className="p-2 ease-in-out duration-300 hover:bg-cyan hover:text-white border-solid border-2 rounded-full "><BsInstagram /></button>
                <button className="p-2 ease-in-out duration-300 hover:bg-cyan hover:text-white border-solid border-2 rounded-full "><BsFacebook /></button>
                <button className="p-2 ease-in-out duration-300 hover:bg-cyan hover:text-white border-solid border-2 rounded-full "><BsLinkedin /></button>
                <button className="p-2 ease-in-out duration-300 hover:bg-cyan hover:text-white border-solid border-2 rounded-full "><BsGithub /></button>
                <button className="p-2 ease-in-out duration-300 hover:bg-cyan hover:text-white border-solid border-2 rounded-full "><SiGlassdoor /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default function Home() {
  return (
    <div className="flex flex-col justify-between align-center content-center w-100   ">
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
            <img className="h-[10rem] w-[10rem] flex justify-self-center sm:h-[15rem] sm:w-[15rem] rounded-full "  src="./media/doctor-image.jpg" />
          </div>
          <p className="mt-7 sm:w-[60%] sm:ml-4 text-center text-md sm:text-left sm:text-md">Amet laborum exercitation occaecat officia nisi. Aliquip sit minim voluptate exercitation ut proident sunt elit ad officia. Reprehenderit dolor reprehenderit tempor duis nostrud eu laborum ullamco nostrud enim nulla tempor. Ut qui mollit enim ipsum adipisicing quis aliqua. Reprehenderit voluptate reprehenderit incididunt mollit quis quis consectetur do pariatur sint Lorem culpa enim quis.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center  content-center w-100 h-[75vh] ">
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
      <div>

      </div>
    </div>
  )
}

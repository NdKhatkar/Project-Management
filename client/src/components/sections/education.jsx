export default function Education() {
  return (
    <section id="education" className="p-8">
      <div className="grid grid-cols-2 gap-16 bg-radial from-stone-800 rounded-2xl to-stone-800/30 text-white p-16">
        <div className="w-full text-xl">
          <h1 className="mb-8 text-4xl font-extrabold">My Journey</h1>
          <p>
            My journey didn’t begin with computers—it started on the sports
            field. For a long time, I was more focused on athletics than
            technology. Choosing BCA as my graduation path was actually an
            unplanned decision, but it turned out to be one of the most pivotal
            moments of my life. During my time in college, I still remember the
            first C++ program I wrote. It was a small step, but it sparked
            something in me. That moment made me realize how exciting it is to
            solve problems through code, and I decided to stick to this path
            wholeheartedly. As I progressed, I developed a strong interest in
            Data Structures and Algorithms. The challenges they posed were like
            puzzles I couldn’t put down, and solving them gave me the same
            thrill I used to feel in competitive sports. That combination of
            discipline from my athletic background and curiosity for coding
            shaped the way I approach learning and problem-solving today.
          </p>
        </div>
        <div className="w-full text-2xl">
          <h1 className="mb-8 text-4xl font-extrabold">Education</h1>
          <div>
            <h3 className="  font-extrabold">Bachelor of Computer Application</h3>
            <div className="flex items-center gap-4 py-4"><div className="bg-yellow-400 rounded-full w-5 h-5"></div><h3>Bheem Rao Ambedkar College [ Kaithal ]</h3></div>
            
          </div>
          <div>
            <h3 className="mt-4  font-extrabold">Higher Education [ PCM ]</h3>
            <div className="flex items-center gap-4 py-4"><div className="bg-yellow-400 rounded-full w-5 h-5"></div><h3>Government Boys Senior Secondary School [ Kaithal ]</h3></div>
          </div>
        </div>
      </div>
    </section>
  );
}

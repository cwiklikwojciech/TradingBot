import './Home.css'

function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 text-blue-600 p-5 ">
      <div className="... border border-slate-100/25">
        1
      </div>
      <div className="col-span-2 border border-slate-100/25">
        2
      </div>
      <div className="... border border-slate-100/25">03</div>
    </div>
  )
}

export default Home
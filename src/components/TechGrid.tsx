import TechCard from './TechCard'

const TechGrid = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-5 lg:grid-cols-[1fr_245px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <TechCard/>
            <TechCard/>
            <TechCard/>
            <TechCard/>
            <TechCard/>
            <TechCard/>
            <TechCard/>
            <TechCard/>
            <TechCard/>
        </div>
    </div>
  )
}

export default TechGrid
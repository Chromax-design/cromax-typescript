import HomepageCard from "@/components/HomepageCard";
import { HomepageData } from "@/utilities/data";

const Home = () => {
  return (
    <main className=' grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-7 text-white p-4'>
      {
        HomepageData.map(({ coverImg, title, link }, i) => {
          return <HomepageCard coverImage={coverImg} title={title} link={link} key={i}/>
        })
      }
    </main>
  )
}

export default Home

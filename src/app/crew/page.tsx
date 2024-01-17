import Crew from '@/components/Crew'
import { crew } from '@/data'


export type crewT = {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    role: string;
    bio: string;
}[]

 function page() {


  
  return (
    <div>
      <Crew data={ crew} />
    </div>
  )
}

export default page
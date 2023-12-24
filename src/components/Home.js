import { TypeAnimation } from 'react-type-animation';
import Div100vh from 'react-div-100vh'
import TechStack from '../data/techstack.json';
import 'animate.css'

export default function Home(){
    return(
        <>
        
        <div className='mb-10'>
            <div className="pt-36 mx-12 sm:mx-24 md:mx-32 lg:mx-40 text-gray-100">
                <div className='mb-16'>
                    <div className="text-2xl md:text-4xl font-medium mb-6 text-center">
                    <TypeAnimation
                    sequence={[
                        `Winter of Code 6.0`, 
                        3000,
                    ]}
                    wrapper="div"
                    className='font-sans tracking-wide uppercase text-4xl md:text-5xl lg:text-6xl font-bold'
                    cursor={true}
                    repeat={Infinity}
                    style={{ whiteSpace: 'pre-line'}} 
                    />
                    </div>
                    <div className="text-md">
                        <p className="mb-2">
                        An immersive month-long program designed to provide participants with a comprehensive learning experience in software development, starting from the ground up. 
                        </p>
                        <p className="mb-2">
                        During this engaging initiative, participants have the opportunity to build projects from scratch under the guidance of experienced student mentors. The program emphasizes hands-on learning, enabling participants to work on diverse technology stacks, thereby gaining practical exposure to various tools and frameworks.
                        </p>
                        <p className="mb-2">
                        Structured into well-defined phases, Winter of Code ensures a systematic and progressive approach to project development. Participants are encouraged to embrace the challenge of building real-world projects, regardless of their prior experience, as there are no prerequisites for diving into the world of development.
                        </p>
                        <p className="mb-2">
                        This inclusive approach aims to create a learning environment that accommodates participants with varying levels of expertise, fostering a sense of community and collaboration.
                        </p>
                        <p className="mb-2">
                        One of the distinguishing features of Winter of Code is the chance it offers participants to master a specific technology stack. Through active engagement and hands-on project work, participants gain valuable insights into the intricacies of their chosen tech stack, enhancing their skills and knowledge.
                        </p>
                        <p className="mb-2">
                        The program also introduces exciting incentives, including prizes and goodies for the winners, adding a competitive and rewarding element to the learning experience.
                        </p>
                        <p className="mb-2">
                        With multiple project categories to explore, participants can tailor their involvement based on their interests and aspirations. 
                        </p>
                    </div>
                </div>
                <div className='mb-16'>
                    <div className="text-2xl md:text-4xl font-medium mb-8 text-center">
                        Technologies You Can Work With
                    </div>
                    <div className='grid md:grid-cols-4 lg:grid-cols-5 gap-4 items-center'>
                    {TechStack.map((ts) => (
                        <div className='animate__animated animate__fadeIn bg-black/[.25] h-full px-8 p-4 md:px-6 rounded-xl'>
                            <div className='h-full flex items-center justify-center'>
                                <img loading="lazy" className='max-h-20' src={process.env.PUBLIC_URL + '/images/tech/' + ts.src} alt={ts.name}/>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div> 
        </div>         
      </>
    )
}
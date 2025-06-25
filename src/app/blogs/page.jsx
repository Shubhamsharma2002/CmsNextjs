import Image from "next/image";


const blogConfig = [
    {
        "title": "React vs NextJS",
        "excerpt": "Nextjs is the ultimate development framework...",
        "image": "/thumbnails/react-v-next.png",
        "url": '/demo-slug'    
    },
    {
        "title": "Dreams to be a Remote developer",
        "excerpt": "Get a job as remote developer...",
        "image": "/thumbnails/dreams.png"  ,
        "url": '/demo-slug'  
    },
    {
        "title": "Become a backend dev in no time",
        "excerpt": "how to becmoe a backend developer in 2025...",
        "image": "/thumbnails/become-backend-dev.png"    ,
        "url": '/demo-slug'
    },
]

export default function Blogs() {
    return(
       <section>
  {blogConfig.map((blog, index) => (
    <h1 key={index}>{blog.title}</h1>
  ))}
</section>
    )
}
import dateFormat from "@/utils/dateFormate";
import { Calendar } from "lucide-react";
import Image from "next/image";
const tempTags = "spacex, Nasa , Expolartion"
export default function SingleBlog(){
    return(
        <section>
           <div className="flex flex-col gap-4 items-center">
             <Image src = "/thumbnails/react-v-next.png" width={500} height={250} alt="image" className="rounded border  w-[90%] md:w-[700px]" />
             <div className="meta-of-a-blog space-y-2">
                <div className="flex gap-2 items-center">
                   <Calendar className="text-gray-400 size-4" />
                   <p className="text-gray-400 text-xs">Created on: {dateFormat(new Date())}</p>
                </div>
                <div className="text-xs flex items-center gap-2">
                    <p>Category:</p>
                     <p className="badge bg-gray-600/30 border border-gray-700 w-fit px-2 py-1 rounded">space expolatrion</p>
                </div>
                <div className="text-xs flex items-center gap-2">
                     <p>Tags:</p>
                     {tempTags.split(",").map((tag, index)=> <p key={`${tag}_${index}`} className="badge bg-gray-600/30 border border-gray-700 w-fit px-[4px] py-[2px] rounded">{tag}</p>)}
                </div>
                
             </div>
             <p className=" text-sm w-[90%] md:w-2/3 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui non nisi accusamus modi adipisci voluptatibus ea maiores rem ab doloremque incidunt, amet voluptates, itaque suscipit laudantium optio atque aliquid enim consequatur expedita? Eaque, dignissimos enim sit odit ad, porro dolore voluptas nesciunt sunt culpa laudantium reiciendis, atque magnam perspiciatis exercitationem adipisci? Voluptatem quos repellat, rem dolorem temporibus eveniet obcaecati corrupti iusto, labore, voluptatum numquam aliquid voluptatibus sed tempora cumque nisi non magnam in dolores. Dolor, ex architecto. Corporis ex odio eaque doloremque illum molestias, facere, commodi vitae perspiciatis adipisci quaerat minus ab eveniet praesentium dolorum magnam quibusdam aut iusto.</p>
           </div>
        </section>
    )
}
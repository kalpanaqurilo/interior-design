import Image from "next/image";

const LatestProject = () => {
    return (
        <section className="w-full bg-[#fffefa] py-44 px-10">
            <div className="max-w-[1300px] mx-auto text-center">
                {/* Title */}
                <div className="flex items-center justify-center mb-12">
                    <span className="w-16 h-[2px] bg-[#b88b4a] mr-4"></span>
                    <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-semibold">
                        Our Latest Projects
                    </h2>
                    <span className="w-16 h-[2px] bg-[#b88b4a] ml-4"></span>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            src: "/Images/project1.png",
                            alt: "Modern Living Room",
                            title: "Modern Loft Living",
                            comment:
                                "A stunning transformation of a lofty space into a contemporary and functional living area.",
                        },
                        {
                            src: "/Images/project2.png",
                            alt: "Dining Space Design",
                            title: "Rustic Chic Cottage",
                            comment: "A cozy cottage with rustic charm and chic accents.",
                        },
                        {
                            src: "/Images/project3.png",
                            alt: "Artful Interior",
                            title: "Zen Garden Retreat",
                            comment:
                                "A serene retreat combining minimalist design and natural elements.",
                        },
                        {
                            src: "/Images/project4.png",
                            alt: "Cozy Wooden Room",
                            title: "Modern Loft Renovation",
                            comment:
                                "A contemporary redesign enhancing both comfort and style.",
                        },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl"
                        >
                            <Image
                                src={card.src}
                                alt={card.alt}
                                width={400}
                                height={400}
                                className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Floating Comment Bubble */}
                            <div className="absolute top-6  left-1/2 -translate-x-1/2 mt-40 opacity-0 translate-y-2
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-300 z-10">
                                <div className="relative bg-white text-[#2d2d2d] text-sm font-medium px-4 py-3 rounded-lg shadow-lg w-64">
                                    <div className="font-semibold mb-1 text-[15px]">{card.title}</div>
                                    <div>{card.comment}</div>

                                    {/* Triangle Tail */}
                                    <div className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-0 h-0
                  border-l-[6px] border-l-transparent
                  border-r-[6px] border-r-transparent
                  border-t-[6px] border-t-white"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    );
}

export default LatestProject

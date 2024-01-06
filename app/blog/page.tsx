"use client";

import SingelBlog from "@/components/home/singelBlog";
import SectionTittle from "@/components/sectionTittle";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Pagehero";

interface BlogItem {
  img: string;
  date: string;
  title: string;
  description: string;
  author: string;
  id: string;
}

const Blogs: BlogItem[] = [
  {
    img: "/assets/bd.png",
    date: "12th May 2023",
    title: "Mapping Bangladesh's Political Crisis | Crisis Group",
    description:
      "Tortor neque sed tellus est eget dui id ante tristique tristique dolor.",
    author: "Admin",
    id: "1",
  },
  {
    img: "/assets/india.png",
    date: "21th Aug 2023",
    title: "The Changing Landscape of Indian Politics | South Asia Journal",
    description:
      "The noted Indian historian Ramchandra Guha, has recently suggested that the Nehru-Gandhi family members must leave the Indian National Congress (INC)",
    author: "Admin",
    id: "2",
  },
  {
    img: "/assets/africa.jpg",
    date: "01 Oct 2023",
    title: "The moral bankruptcy in African politics | This is Africa",
    description:
      "The ineptitude of African governments and regimes to provide their citizens basic and essential services i.e. public safety",
    author: "Admin",
    id: "3",
  },
];
const Blog: React.FC = () => {
  return (
    <div>
      <Navbar/>
        <Hero title="Blogs" subtext="Blogs"></Hero>
      <div className=" mt-[120px]">
        <SectionTittle
          title=" "
          description="All News"
          span=" "
        />
        <div className="px-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {Blogs.map((blog, index) => (
            <SingelBlog
              img={blog.img}
              date={blog.date}
              description={blog.description}
              title={blog.title}
              author={blog.author}
              id={blog.id}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

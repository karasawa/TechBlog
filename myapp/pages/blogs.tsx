import Link from "next/link";
import { client } from "../libs/client";
import { Header } from "../components/organisms/Header";
import { BlogCard } from "../components/molecures/BlogCard";

type Props = {
  blog: any;
};

const Posts: React.FC<Props> = ({ blog }) => {
  console.log(blog)
  return (
    <div className="font-mono">
      <Header />
      <ul>
        {blog.map((blog: any) => (
          <li key={blog.id} className="flex justify-center items-center">
            <BlogCard id={blog.id} title={blog.title} eyecatch={blog.eyecatch.url} category={blog.category.name}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

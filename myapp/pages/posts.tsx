import Link from "next/link";
import { client } from "../libs/client";

type Props = {
  blog: any;
};

const Posts: React.FC<Props> = ({ blog }) => {
    console.log(blog)
  return (
    <div>
      <ul>
        {blog.map((blog: any) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            <p  className='bg-green-400'>aaaa</p>
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

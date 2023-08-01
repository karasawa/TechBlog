import { Header } from "../../components/organisms/Header";
import { client } from "../../libs/client";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  blog: any;
};

const BlogId: React.FC<Props> = ({ blog }: any) => {
  console.log(blog)
  return (
    <div className="font-mono">
      <Header />
      <main className="m-8 text-xl">
        <div className="flex justify-end">
                    投稿日：              
                    {dayjs
                    .utc(blog.publishedAt)
                    .tz("Asia/Tokyo")
                    .format(
                      "YYYY" +
                        "年" +
                        "MM" +
                        "月" +
                        "DD" +
                        "日" +
                        "hh" +
                        ":" +
                        "mm"
                    )}
                    </div>
        <div className="flex justify-center text-3xl font-bold mt-8">{blog.title}</div>
        <div className="flex justify-end">
          <div className="p-1 bg-stone-400 rounded text-lg opacity-80 mt-5">#{blog.category.name}</div>
        </div>
        <div
          className="mt-10"
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
          />
      </main>
    </div>
  );
};

export default BlogId;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map(
    (content: { id: string }) => `/blogs/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

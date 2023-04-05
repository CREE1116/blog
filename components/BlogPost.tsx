import Link from "next/link";
import Image from "next/image";

const BlogPost = ({ date, title, des, slug, tags, imagesrc }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className="w-full my-7 hover:-translate-x-1.5 flex">
        <div className="flex-initial w-[70%]">
          <div className="font-medium text-xs text-gray-400">
            {date.split("T")[0]}
          </div>
          <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
          <div className={`font-medium text-gray-600 text-xl mt-1`}>{des}</div>
          {tags !== undefined
            ? tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className={`text-xs text-gray-400 font-light mt-1`}
                  >
                    #{tag}
                  </span>
                );
              })
            : null}
        </div>
        <div className="flex-initial w-[30%] relative -z-50">
          {imagesrc !== undefined ? (
            <Image
              src={imagesrc}
              alt={title}
              quality={80}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className={`absolute, rounded-2xl`}
            />
          ) : (
            <div className="absolute bg-gray-500 rounded-2xl w-full h-full text-center py-8 font-bold text-md text-white">
              {title}
            </div>
          )}
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;

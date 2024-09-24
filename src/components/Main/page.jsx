import Premium from "../../assets/premium.png";
import Dots from "../../assets/three-dots.svg";
import bookmark from "../../assets/bookmark.svg";
import Photo from "../../assets/Picture.svg";
import calendar from "../../assets/calendar.svg";
import news from "../../assets/news.svg";
import Carret from "../../assets/carret.svg";
import { UserAuth } from "../../context/AuthContext.jsx";
import feed from "../../assets/feed.png"
import Image from "../../assets/icons/image.svg"
import Contribute from "../../assets/icons/contribute.svg"
// import Post from "../assets/post"

const Body = () => {
  const { user } = UserAuth();

  const data = [
    {
      name: "Gloria Madubueze",
      post: "Are You Ready for Something HOOGE",
      occupation: "Southeast Zonal Coordinator @Nacossoutheast",
      time: "5h",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Jane Smith",
      post: "Excited to start a new project on AI!",
      occupation: "Data Scientist",
      time: "1 hour ago",
      image: "https://picsum.photos/200/300",
    },
  ];

  return (
    <div className="flex flex-row justify-between">
      <div className="basis-1/4 h-full w-full bg-white md:m-7 m-0 rounded-xl border border-gray-400 md:flex md:flex-col hidden">
        <div className="bg-slate-300 rounded-t-xl pt-6 mb-6 h-20">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="User Profile"
            className="w-12 h-12 mx-auto rounded-full"
          />

        </div>

        <h2 className="text-base text-center font-semibold">
          {user?.displayName || "Anonymous User"}
        </h2>

        <p className="text-center text-sm my-3 text-gray-600">
          ---
        </p>
        <hr />
        <div className="px-4 text-gray-600 text-sm">
          <div className="flex justify-between pt-4">
            <div >
              <span>Connections</span>
              <span className="block text-black ">Grow your network</span>
            </div>
            <span className="text-blue font-semibold">11</span>
          </div>
          <div className="flex justify-between py-4">
            <span>Invitation</span>
            <span className="text-blue font-semibold">1</span>
          </div>
        </div>

        <hr />
        <div className="p-4  items-center">
          <p className="text-xs text-gray-600">Grow your career with Premium</p>
          <div className="flex items-center gap-1 mt-1">
            <img src={Premium} alt="premium" className="h-4" />
            <span className="text-sm font-semibold">Don't miss:Premium for $0</span>
          </div>
        </div>
        <hr />
        <div className="flex gap-2 p-4">
          <img src={bookmark} alt="" />
          <span className="font-semibold text-sm">Saved Items</span>
        </div>
      </div>

      <div className="basis-2/4 h-full md:w-full w-3/4 flex flex-col mx-auto ">
        <PostForm user={user} />
        <div className="p-2 flex">
          <div className="basis-10/12 p-2">
            <hr className="border border-textcolor" />
          </div>
          <div className="basis-2/12 flex whitespace-nowrap gap-2 text-xs mt-0">
            Sort By: <span className="font-semibold">Top</span>
            <img src={Carret} alt="" className="w-3" />
          </div>
        </div>

        <FormArr posts={data} user={user} />
      </div>

      <div className="basis-[400px] h-full w-full bg-white p-3 m-7 rounded-xl border-gray-400 border md:flex md:flex-col hidden">
        <div>
          <h1 className="m-3">Add to your feed</h1>
          <div className="flex items-center gap-2 ">
            <img src={feed} alt="feed" className="h-14" />
            <div>
              <h1>U.S Department of Education</h1>
              <p className="text-gray-600 text-sm">Company Goverment Administration</p>
              {/* <button className="border-2 border-gray-600 rounded-[50%]">+ follow</button> */}
            </div>
          </div>
          <div className="flex items-center gap-2 my-5">
            <img src={feed} alt="feed" className="h-14" />
            <div>
              <h1>U.S Department of Education</h1>
              <p className="text-gray-600 text-sm">Company Goverment Administration</p>
              {/* <button className="border-2 border-gray-600 rounded-[50%]">+ follow</button> */}
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <img src={feed} alt="feed" className="h-14" />
            <div>
              <h1>U.S Department of Education</h1>
              <p className="text-gray-600 text-sm">Company Goverment Administration</p>
              {/* <button className="border-2 border-gray-600 rounded-[50%]">+ follow</button> */}
            </div>
          </div>
          <div className="flex items-center gap-2 my-5">
            <img src={feed} alt="feed" className="h-14" />
            <div>
              <h1>U.S Department of Education</h1>
              <p className="text-gray-600 text-sm">Company Goverment Administration</p>
              {/* <button className="border-2 border-gray-600 rounded-[50%]">+ follow</button> */}
            </div>
          </div>

        </div>
        <p className="text-gray-600">View all recommendations</p>

      </div>
    </div>
  );
};

export default Body;

function FormArr({ posts, user }) {
  return (
    <ul>
      {posts.map((post, index) => (
        <Post key={index} post={post} user={user} />
      ))}
    </ul>
  );
}

function PostForm({ user }) {
  return (
    <div className="h-full w-full  bg-white p-2 mt-7 rounded-xl border-gray-400 border">
      <div className="flex gap-3">
        {user && (
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt=""
            className="w-12 h-12 rounded-full"
          />
        )}
        <input
          type="text"
          placeholder="Start a post, Try writing with AI"
          //value={}
          //onChange={}
          className="border border-gray-400 rounded-full w-full h-12 p-3 placeholder:font-semibold placeholder:text-textcolor"
        />
      </div>
      <div className="pb-0 pt-4 mt-2 px-6 flex justify-between ">
        <div className="flex gap-2">
          <img src={Image} alt=""  />
          <span className="text-base font-semibold">Media</span>
        </div>
        <div className="flex gap-2">
          <img src={Contribute} alt="" className="w-5 h-5 text-blue" />
          <span className="text-base font-semibold">Event</span>
        </div>
        <div className="flex gap-2">
          <img src={news} alt="" className="w-6 h-6 text-blue" />
          <span className="text-base font-semibold">Write Articles</span>
        </div>
      </div>
    </div>
  );
}

function Post({ user, post }) {
  return (
    <div className="h-full w-full bg-white p-2 mt-1 rounded-xl border-gray-400 border">
      <div className="flex justify-end gap-2">
        <img src={Dots} alt="" className="w-5 mt-2" />
        <p className="text-2xl"> &times; </p>
      </div>

      <div className="flex flex-row gap-3 pl-3">
        <div>
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt=""
            className="w-12 rounded-full"
          />
        </div>
        <div>
          <h2 className="text-base font-semibold">{post.name}</h2>
          <p className="text-xs"> {post.occupation} </p>
          <p className="text-xs text-textcolor">{post.time}</p>
        </div>
      </div>

      <p className="mt-3 mb-4 ml-3">{post.post}</p>

      <div className="w-full h-full mt-3">
        <img src="https://picsum.photos/600/400" alt="Post" />
      </div>
    </div>
  );
}


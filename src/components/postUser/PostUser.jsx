import classes from "./postUser.module.css";
import Image from "next/image";
import smapleImg from '../../assets/pngs/noavatar.png'
// import { getSingleUserById } from "@/apis/apis";
import { getMongoUserById } from "@/apis/data";

const PostUser = async ({userId}) => {

  // const user = await getSingleUserById(userId)
  const user = await getMongoUserById(userId)

  return (
    <div className={classes.container}>
      <Image
        className={classes.avatar}
        // src={user.img ? user.img : "/noavatar.png"}
        src={smapleImg}
        alt=""
        width={50}
        height={50}
      />
      <div className={classes.texts}>
        <span className={classes.title}>{user?.name}</span>
        <span className={classes.username}>{user?.username}</span>
        <span className={classes.email}>{user?.email}</span>
      </div>
    </div>
  );
};

export default PostUser;
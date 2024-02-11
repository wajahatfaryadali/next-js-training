import classes from "./postUser.module.css";
import Image from "next/image";
import smapleImg from '../../assets/pngs/noavatar.png'

const PostUser = async ({ userId }) => {

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
        <span className={classes.title}>Author</span>
        {/* <span className={classes.username}>{user.username}</span> */}
        <span className={classes.username}>UserName </span>
      </div>
    </div>
  );
};

export default PostUser;
import Link from "next/link";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

export default function PaginatedFooter({ post }) {
  const { previousPost, nextPost } = post;
  return (
    <>
      <footer>
        {previousPost ? (
          <div className={cx("paginatedlink")}>
            <Link href={`${previousPost.slug}`}>
              <a>👈 {previousPost.title}</a>
            </Link>
          </div>
        ) : null}
        {nextPost ? (
          <div className={cx("paginatedlink")}>
            <Link href={`${nextPost.slug}`}>
              <a>{nextPost.title} 👉</a>
            </Link>
          </div>
        ) : null}
      </footer>
    </>
  );
}

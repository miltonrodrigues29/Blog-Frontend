import Header from "../../components/header/Header";
import "./home.css";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  console.log(search);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header></Header>
      <div className="home">
        <Posts posts={posts}></Posts>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

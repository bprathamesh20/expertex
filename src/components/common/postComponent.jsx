import React, { useEffect, useState } from 'react';
import { getPosts, getCurrentUser, getSingleUser } from '../../api/firestoreAPI';
export default function PostComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getPosts();
      console.log(response);

      // loop through each post and get the user name
      const updatedPosts = await Promise.all(response.map(async (post) => {
        const userName = await getCurrentUser(post.userEmail);
        return { ...post, userName };
      }));

      setPosts(updatedPosts);
    }

    fetchData();
  }, []);

  console.log(posts)


  return (
    <div>
      <div className='p-10 lg:ml-10 lg:w-3/5 '>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <div className="card w-96 bg-base-200 shadow-xl mt-5 lg:w-auto">
                <div className="card-body">
                  <p>Posted by {post.userName}</p>
                  <h2 className="card-title text-white">{post.tags}</h2>
                  <p>{post.query}</p>

                  <div className="card-actions justify-end">
                    <a className="btn btn-primary  btn-sm" href={`mailto:${post.userEmail}`}>Connect</a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { getPosts } from '../../api/firestoreAPI';
export default function PostComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getPosts();
      console.log(response)
      setPosts(response);
    }

    fetchData();
  }, []);

  


  return (
    <div>
      <div className='p-10 lg:ml-10 lg:w-3/5 '>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div className="card w-96 bg-base-200 shadow-xl mt-5 lg:w-auto">
              <div className="card-body">
                <h2 className="card-title text-white">{post.tags}</h2>
                <p>{post.query}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary  btn-sm">Connect</button>
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
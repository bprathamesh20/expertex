import React, { useEffect, useState } from 'react';
import { getPosts, getCurrentUser, getSingleUser } from '../../api/firestoreAPI';

export default function PostComponent() {
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [postCounter, setPostCounter] = useState(4);

  useEffect(() => {
    async function fetchData() {
      const response = await getPosts();
      console.log(response);

      // loop through each post and get the user name
      const updatedPosts = await Promise.all(response.map(async (post) => {
        const userName = await getSingleUser(post.userEmail);
        return { ...post, userName };
      }));

      setPosts(updatedPosts);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const postsToDisplay = posts.slice(0, postCounter);
    setDisplayedPosts(postsToDisplay);
  }, [posts, postCounter]);

  function handleLoadMore() {
    setPostCounter(postCounter + 4);
  }

  return (
    <div>
      <div className='p-10 lg:ml-10 lg:w-3/5 '>
        <ul>
          {displayedPosts.map((post) => (
            <li key={post.id}>
              <div className="card w-80 bg-base-200 shadow-xl mt-5 lg:w-auto">
                <div className="card-body">
                  <p>Posted by {post.userName}</p>
                  <h2 className="card-title text-white">{post.title}</h2>
                  <div>
                    {post.tagArray && post.tagArray.map((tag) => (
                      <span key={tag} className="badge badge-primary mx-1">{tag}</span>
                    ))}
                  </div>
                  <p>{post.query}</p>

                  <div className="card-actions justify-end">
                    <a className="btn btn-primary  btn-sm" href={`mailto:${post.userEmail}`}>Connect</a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {displayedPosts.length < posts.length && (
          <button className="btn btn-primary mt-8 " onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

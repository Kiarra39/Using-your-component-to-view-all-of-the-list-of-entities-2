import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => (
  <div >
    <img
      src={post.profileImage}
      alt={`${post.username}'s profile`}
      style={{ width: '50px', borderRadius: '50%' }}
    />
    <h3>{post.username}</h3>
    <p>{post.content}</p>
    <LikeButton />
  </div>
);

export default PostCard;

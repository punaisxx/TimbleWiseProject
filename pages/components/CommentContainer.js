import React, { useState } from 'react';

const CommentContainer = ({ items, handleComment }) => {

  const isAuthen = false
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      handleComment({ name: 'You', description: newComment.trim() });
      setNewComment('');
    }
  };

  return (
    <div className='w-full flex flex-col gap-3 pt-10 pb-48'>

      <div className="text-2xl font-semibold">
        Comment
      </div>

      <div className='relative w-2/3'>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder={ isAuthen ? "Add a comment..." : "Add a comment..."}
          rows={6}
          className="w-full p-4 pr-36 border border-slate-600 rounded-lg"
        />
        <div className='absolute right-4 bottom-4'>
          <button 
            onClick={handleAddComment}
            className="px-10 py-2 bg-green-600 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>

      <div className='w-2/3 flex flex-col gap-4'>

        {items.map((comment, index) => (
          <div 
            key={index}
            className='w-full flex flex-col gap-2 border-b border-black pb-4'
          >
            <div className='font-semibold'>{comment.name}: </div>
            <div>{comment.description}</div>
          </div>
        ))}

      </div>
        
    </div>
  );
};

export default CommentContainer;

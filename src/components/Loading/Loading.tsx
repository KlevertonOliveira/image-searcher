import React from 'react';

function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="spinner-border animate-spin inline-block w-20 h-20 border-4 rounded-full" role="status">
      </div>
    </div>
  );
}

export default Loading;
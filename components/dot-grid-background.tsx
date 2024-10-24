import React from 'react';

const DotGridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.4]" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, #6b7280 1px, transparent 0)`,
               backgroundSize: '24px 24px'
             }}>
        </div>
      </div>
    </div>
  );
};

export default DotGridBackground;
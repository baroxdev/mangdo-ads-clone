import React from 'react';
import clsx from 'clsx';

const Container = ({className, ...props}) => {
  return (
    <div className={clsx('mx-auto max-w-5xl px-4 mt-24 mb-40 sm:px-6 lg:px-8', className)} {...props} />
  );
};

export default Container

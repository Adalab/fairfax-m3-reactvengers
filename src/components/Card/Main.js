import React from 'react';
import PreviewCard from './PreviewCard/PreviewCard';
import Form from './Form';

const Main = () => {
  return(
   <main className="page__main-card">
    <div className="wrapper">
      <PreviewCard />
      <Form />
    </div>
  </main>
  )
}

export default Main;
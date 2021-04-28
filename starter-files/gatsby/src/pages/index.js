import React from 'react';
import useLatestData from '../utils/useLatestData';

function CurrentlySlicing() {
  return (
    <div>
      <p>CurrentlySlicing</p>
    </div>
  );
}

function HotSlices() {
  return (
    <div>
      <p>HotSlices</p>
    </div>
  );
}

export default function HomePage() {
  const result = useLatestData();
  console.log(result);
  return (
    <div className="center">
      <h1>The Best Pizza in Berlin</h1>
      <p>Open 24/7</p>
      <div>
        <CurrentlySlicing />
        <HotSlices />
      </div>
    </div>

  );
}

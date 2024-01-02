import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <main>
      <div>About Me</div>
      <br />
      <br />
      <div>
        <Image
          width={200}
          height={300}
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/margot-robbie-s-harley-quinn-and-poison-ivy.jpg"
          alt="Image"
        />
      </div>
      <Link href="/">
        Back to Home
        <br />
      </Link>
    </main>
  );
}

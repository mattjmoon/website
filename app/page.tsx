import "./globals.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Matt Moon</title>
        <meta name="description" content="Matt Moon's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen">
        <main className="container mx-auto px-4 max-w-screen-md align-middle text-center">
          <header className="py-6">
            <h1 className="text-4xl font-bold">Matt Moon</h1>
            <p className="text-xl">Software Engineer</p>
          </header>

          <section className="my-12">
            <div className="flex justify-center">
              <Image
                src="/images/self.png"
                alt="photo of Matt Moon"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
          </section>

          <section className="my-12 text-left w-1/2 mx-auto">
            <div className="h-full w-full bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
              {/* <h2 className="text-2xl font-semibold">About Me</h2> */}
              <p className="text-large px-8 py-8">
                Hello! I'm Matt, a software engineer.
                <br />
                <br />
                In 2021, I graduated from UC Berkeley with a degree in Computer
                Science.
                <br />
                After graduation, I co-founded an NFT Marketing Platform Startup
                with two colleagues, which was acquired by Line Friends in 2021.
                <br />
                Following the required vesting period, I returned to the United
                States, where I found more exciting opportunities.
                <br />
                <br />
                Pleasure to meet you :&#41;
              </p>
            </div>
          </section>

          <div className="flex justify-center">
            <div className="flex space-x-16">
              <div className="relative w-16 h-16">
                <Link
                  href="https://linkedin.com/in/matthewjoonhomoon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/linkedin.png"
                    alt="Linkedin"
                    layout="fill"
                    objectFit="cover"
                  />
                </Link>
              </div>

              <Link
                href="/files/Joonho_Moon_SoftwareEngineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-16 h-16">
                  <Image
                    src="/icons/cv.png"
                    alt="resume"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>

              <Link
                // href="mailto:mattjmoon21@gmail.com"
                href="mailto:mattjmoon21@gmail.com?subject=Hello%20World&body=This%20is%20the%20email%20body."
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-16 h-16">
                  <Image
                    src="/icons/email.png"
                    alt="email"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>

      <footer className="py-6 text-center">
        &copy; {new Date().getFullYear()} @mattjmoon. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;

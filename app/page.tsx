import "./globals.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="text-black">
      <Head>
        <title>Matt Moon</title>
        <meta name="description" content="Matt Moon's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen">
        <main className="container mx-auto px-4 max-w-screen-md align-middle text-center text-[#003366] font-mono">
          <header className="pt-6">
            <h1 className="text-4xl font-bold">Matt Moon</h1>
            {/* <p className="text-xl">Software Engineer</p> */}
          </header>

          <section className="my-12">
            {/* <div className="h-full w-1/2 mx-auto bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0"> */}
            <div className="w-52 mx-auto border-solid border-4 border-[#D8D8D8] rounded-full hover:border-[#003366]">
              <div className="flex justify-center">
                <Image
                  src="/images/self.png"
                  alt="a photo of Matt Moon"
                  width={210}
                  height={210}
                  className="rounded-full"
                />
              </div>
            </div>
          </section>

          <section className="my-12 text-left sm:w-11/12 md:w-3/5 mx-auto">
            <div className="h-full w-full bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 px-8 py-8">
              {/* <h2 className="text-2xl font-semibold">About Me</h2> */}
              <p className="text-large">
                Hello! I&apos;m Matt, a software engineer.
                <br />
                I enjoy building products.
                <br />
                <br />
                In 2021, I graduated from UC Berkeley with a degree in Computer
                Science.
                <br />
                <br />
                After graduation, I co-founded an NFT Marketing Platform Startup
                with two friends, which was acquired by Line Friends in 2021.
                <br />
                <br />
                Following the required vesting period, I returned to the States,
                where I found more exciting opportunities.
                <br />
                <br />
                In my free time, I enjoy traveling, attending exhibitions and
                concerts, watching movies, and participating in sports.
                <br />
                <br />
                Pleasure to meet you :&#41;!
              </p>
            </div>
          </section>

          <section className="my-12 text-left sm:w-11/12 md:w-3/5 mx-auto">
            <div className="h-full w-full bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 px-8 py-8">
              <h2 className="text-2xl font-semibold">Techstacks</h2>
              <h2 className="text-lg font-semibold">Languages</h2>
              <p className="text-base">
                Go, Python, Typescript, Java, C++, SQL
              </p>
              <br />
              <h2 className="text-lg font-semibold">Frameworks</h2>
              <p className="text-base">
                gRPC, Gin, Echo, FastAPI, Flask, Express, Next.js, React
              </p>
              <br />
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

      <footer className="pt-40 pb-6 text-center text-[#003366] font-mono">
        &copy; {new Date().getFullYear()} @mattjmoon. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;

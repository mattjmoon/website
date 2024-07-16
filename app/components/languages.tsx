import Image from "next/image";

const Languages = () => {
  <div>
    <h2 className="text-2xl font-semibold">Languages</h2>
    <div className="flex justify-center">
      <div className="flex space-x-16">
        <div className="relative w-16 h-16">
          <Image src="/icons/go.png" alt="Go" layout="fill" objectFit="cover" />
        </div>

        <div className="relative w-16 h-16">
          <Image
            src="/icons/python.png"
            alt="Python"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative w-16 h-16">
          <Image
            src="/icons/typescript.png"
            alt="typescript"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative w-16 h-16">
          <Image
            src="/icons/java.png"
            alt="java"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  </div>;
};

export default Languages;

import image from '../computer-black-keys-hero-image.jpg';

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt='computer keys'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-gray-100 font-bold cursive leading-none lg:leading-snug home-name'>
          Aloha!
        </h1>
      </section>
    </main>
  );
};

export default Home;

import IDetail from "../interfaces/IDetail";

const yearsExperience = new Date().getFullYear() - new Date('2014').getFullYear() + (new Date().getMonth() > 6 ? 0 : -1);

const introDetail: IDetail = {
    flipPhotos: [
        '../assets/flipPhotos/1.JPG',
        '../assets/flipPhotos/2.JPG',
        '../assets/flipPhotos/3.JPG',
        '../assets/flipPhotos/4.JPG'
    ],
    flipPhotosBackground: '../assets/flipPhotos/head.JPG',
    flipPhotosBottom: '../assets/flipPhotos/body.JPG',
    description: [
        `Hi there! I am a full stack software engineer with ${yearsExperience}+ years work experience strongly concentrated on building Web applications using JavaScript, TypeScript and Java. 
Currently I work more on the front-end! 
`,

        `In general, I like to spend my free time learning and trying out
      whatever seems reasonable.  I would even say, that learning is my
      passion. I like to watch tutorials, do small home projects, create
      responsive web apps and even I used to built gadgets with Arduino boards. When
      I look back in time, I see a pattern behind me. I prefer simple and
      clean solutions and the usefulness of the product is always my number
      one priority.`,

        `Among my personality traits, there is one, that I consider very special.
      It is a passion, or let me say some ability to ignite myself for a good
      idea. It is that one which truly pushes me forward. I believe that
      everything is learnable and possible, but it will never be awesome
      without one's spark.`,

        `I consider myself as a very happy and active person. I love life,
      people, and especially my family and I absolutely admire honesty.`,
    ],
};
export default introDetail;

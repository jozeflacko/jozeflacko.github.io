export interface INavigation {
  name:string;
  url:string;
  title:string;
  priority?:string,
  type?:string
}

export const Navigations: Array<INavigation> = [
  {
    name:'Search',
    url:'',
    title:'Look below to get to know me better',
  },
  {
    name:'Go to Resume',
    // view only link to drive
    url:'https://docs.google.com/document/d/1n76Eb8ocz5AdyZA1EnHKNgNhJAgirVoE-PKmUheCQ7s/edit?usp=sharing',
    title:'Download Resume as PDF'
  },
];

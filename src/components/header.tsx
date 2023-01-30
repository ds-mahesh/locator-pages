import * as React from "react";
import Cta from "../components/cta";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Digital",
    url: "/",
  },
  {
    label: "Engineering",
    url: "/turtlehead-tacos",
  },
  {
    label: "Cloud",
    url: "/turtlehead-tacos",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <div className="bg-gray-50">
      <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <div className="flex gap-x-4 items-center">
            <img
              src="https://th.bing.com/th/id/R.23c5ce6fc41823b159a29838d2e91117?rik=j5k3EllemPHGrg&riu=http%3a%2f%2fwww.tridatindia.com%2fclients%2fimages%2fbiglogo23.jpg&ehk=t8OAuUQFrl6Jjc7ZkwiEJDQngnQMPCt65Sx5EeZFzsE%3d&risl=&pid=ImgRaw&r=0"
              width="100"
              height="50"
            ></img>
            <div className="flex gap-x-4 text-sm font-semibold text-body">
              {linkDoms}
            </div>
          </div>
          <div className="space-x-5"></div>
          <div className="flex gap-x-4 ">
            <div className=" h-12 pt-4 flex flex-row-reverse space-x-4 space-x-reverse ">
             <a href="">Services</a>
             <a href="">Industries</a>
             <a href="">About Us</a>
             <a href="">Insights</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

import Banner from '../components/Banner';
import Card from '../components/Card';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/* Banner component at the top of the page */}
      <Banner />

      {/* Card component placed below the banner */}
      <div className="flex flex-row justify-around">
        <Card venueName='The Bloom Pavilion' imgSrc='bloom.jpg' />
        <Card venueName='Spark Space' imgSrc='sparkspace.jpg' />
        <Card venueName='The Grand Table' imgSrc='grandtable.jpg' />
      </div>
    </main>
  );
}

import React from 'react';
import './Strijders.scss';
import { Link } from "react-router-dom";

export default function Strijders() {
  return (
    <div id="strijders">
      <section>
        <aside className="title-aside"><h2>eigen projecten</h2></aside>
        <article className="article">
          <div className="content">
            <Link to="/projects/workshop" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-1.png" alt="Workshops" />
              Workshops
            </Link>
            <Link to="/projects/eccosentials" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-4.png" alt="Eccosentials" />
              Eccosentials
            </Link>
            <Link to="/projects/clean-ups" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-7.png" alt="Clean Ups" />
              Clean Ups
            </Link>
          </div>

          <div className="content">
            <Link to="/projects/gepakt-en-gezakt" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-2.png" alt="Gepakt en Gezakt" />
              Gepakt en Gezakt
            </Link>
            <Link to="/projects/to-be-antwerp" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-5.png" alt="To Be Antwerp" />
              To Be Antwerp
            </Link>
            <Link to="/projects/wachten-op-n-oplossing" className="project-wrapper">
              <img className="project-thumb missing" src="/plasticterin/projects/MISSING" alt="wachten op ‘n oplossing" />
              wachten op ‘n oplossing
            </Link>
          </div>

          <div className="content">
            <Link to="/projects/trashwerp" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-3.png" alt="Trashwerp" />
              Trashwerp
            </Link>
            <Link to="/projects/mei-plastic-vrij" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-6.png" alt="Mei plastic vrij" />
              Mei plastic vrij
            </Link>
            <Link to="/projects/ik-hoop-dat-ge-goed-slaapt-vannacht" className="project-wrapper">
              <img className="project-thumb missing" src="/plasticterin/projects/MISSING" alt="ikhoopdatgegoedslaaptvannacht" />
              ikhoopdatgegoedslaaptvannacht
            </Link>
          </div>
        </article>
      </section>

      <section>
        <aside className="title-aside second"><h2>strijders</h2></aside>
        <article className="article">
          <div className="content">
            <a href="https://www.schaliegasvrij.be/actie/ineos-will-fall.html" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-8.png" alt="Ineos will fall" />
              Ineos will fall
            </a>
            <a href="https://info.meiplasticvrij.be/" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-11.png" alt="Mei plastic vrij" />
              Mei plastic vrij
            </a>
            <a href="https://www.extinctionrebellion.be/nl/" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-14.png" alt="Flagbag" />
              Flagbag
            </a>
            <a href="https://www.plasticsoupfoundation.org/" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-17.png" alt="Plastic soup foundation" />
              Plastic soup foundation
            </a>
            <a href="https://enecocleanbeachcup.be/nl" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-20.png" alt="eneco clean beach" />
              eneco clean beach
            </a>
            <a href="https://www.wryuma.com/" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-23.png" alt="W.r. yuma" />
              W.r. yuma
            </a>
            <a href="https://www.freitag.ch/en" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-26.png" alt="Freitag" />
              Freitag
            </a>
            <a href="https://zeroplasticrivers.com/" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-29.png" alt="Zero plastic rivers" />
              Zero plastic rivers
            </a>
            <a href="https://www.fairandsquare.be/shop" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-32.png" alt="fair and square" />
              fair and square
            </a>
            <a href="https://dopper.com/nl" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-35.png" alt="Dopper" />
              Dopper
            </a>
            <a href="https://preciousplastic.com/" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-38.png" alt="precious plastic" />
              precious plastic
            </a>
            <a href="https://www.instagram.com/lowimpactmovement/?hl=nl" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-41.png" alt="Low impact movement" />
              Low impact movement
            </a>
          </div>

          <div className="content">
            <a href="https://alejandroduran.com/statement" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-9.png" alt="Washed up" />
              Washed up
            </a>
            <a href="https://www.stormkop.be/" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-12.png" alt="oplossing" />
              Stormkop
            </a>
            <a href="https://plasticattack.co.uk/what-is-a-plastic-attack/" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-15.png" alt="oplossing" />
              Plastic attack
            </a>
            <a href="https://theoceancleanup.com" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-18.png" alt="oplossing" />
              The ocean clean up
            </a>
            <a href="https://ecossentials.eu" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-21.png" alt="oplossing" />
              Ecossentials
            </a>
            <a href="https://www.minimalantwerp.be" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-24.png" alt="oplossing" />
              Minimal
            </a>
            <a href="https://got-bag.com" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-27.png" alt="oplossing" />
              Got bag
            </a>
            <a href="https://saudadesdeportugal.nl/plasticus-maritimus" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-30.png" alt="oplossing" />
              Plastic Maritimus
            </a>
            <a href="/http://www.maartenvandeneynde.com/?rd_project=183&lang=en" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-33.png" alt="oplossing" />
              Plastic Reef
            </a>
            <a href="http://www.jenfedrizzi.com/our-sophisticated-denial" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-36.png" alt="oplossing" />
              wasted reality
            </a>
            <a href="https://z-w-c.com/" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-39.png" alt="oplossing" />
              Zero waste club
            </a>
            <a href="https://www.stormkop.be/weef-wijven" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-42.png" alt="oplossing" />
              Weefwijven
            </a>
          </div>

          <div className="content">
            <a href="https://readymag.com/u477014252/twominutesofearth" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-10.png" alt="two minutes of earth" />
              two minutes of earth
            </a>
            <a href="https://www.extinctionrebellion.be/nl" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-13.png" alt="Extinction rebellion" />
              Extinction rebellion
            </a>
            <a href="https://plasticavengers.org" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-16.png" alt="Plastic Avengers" />
              Plastic Avengers
            </a>
            <a href="https://plasticfischer.com" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-19.png" alt="Plastic fisher" />
              Plastic fisher
            </a>
            <a href="https://www.laurafromthedesert.com" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-22.png" alt="Laura from the dessert" />
              Laura from the dessert
            </a>
            <a href="https://www.fairphone.com/nl" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-25.png" alt="Fairphone" />
              Fairphone
            </a>
            <a href="https://www.river-cleanup.org/nl/world" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-28.png" alt="River Cleanup" />
              River Cleanup
            </a>
            <a href="https://www.instagram.com/trashworksdesign/?hl=nl" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-31.png" alt="Trashworksdesign" />
              Trashworksdesign
            </a>
            <a href="https://beobottle.com/" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-34.png" alt="Beo bottle" />
              Beo bottle
            </a>
            <a href="http://www.chrisjordan.com/gallery/rtn/#silent-spring" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-37.png" alt="Running the numbers" />
              Running the numbers
            </a>
            <a href="https://www.instagram.com/thamesplastic" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-40.png" alt="Maria Arceo" />
              Maria Arceo
            </a>
            <a href="https://www.projectvortex.org/dianna-cohen" target="_blank" rel="noopener noreferrer" className="project-wrapper">
              <img className="project-thumb" src="/plasticterin/projects/strijders-43.png" alt="Dianna Cohen" />
              Dianna Cohen
            </a>
          </div>
        </article>
      </section>
    </div>
  )
}

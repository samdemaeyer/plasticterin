import React from 'react';
import './Waanzin.scss';

function toggleExpand(e, id) {
  e.preventDefault();
  const element = document.getElementById(id);
  element.classList.contains('show') ? element.classList.remove('show') : element.classList.add('show');
}

export default function Waanzin() {
  return (
    <div id="waanzin">
      <div className="facts">
        <div className="fact">
          <h3>4,994,936.8</h3>
          <h5>Ton plastic afval gedumpt in oceanen</h5>
          <p>In de wereld</p>
          <div className="link-wrapper">
            <a
              href="https://www.theworldcounts.com/challenges/planet-earth/waste/global-waste-problem"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              De wereld telt
            </a>
          </div>
        </div>
        <div className="fact">
          <h3>873,938,521</h3>
          <h5>Tons of wast dumped</h5>
          <p>Globally, this year</p>
          <div className="link-wrapper">
            <a
              href="https://www.theworldcounts.com/challenges/planet-earth/waste/plastic-bags-used-per-year"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              The World Counts
            </a>
          </div>
        </div>
        <div className="fact">
          <h3>1,985,743.772</h3>
          <h5>Greate Pacific Garbage Patch</h5>
          <p>Size in square kilometers, right now</p>
          <div className="link-wrapper">
            <a
              href="https://www.theworldcounts.com/challenges/planet-earth/waste/great-pacific-garbage-patch-size"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              The World Counts
            </a>
          </div>
        </div>
        <div className="fact">
          <h3>2,061,095,743,256</h3>
          <h5>Number of plastic bags produced</h5>
          <p>Worldwide, this year</p>
          <div className="link-wrapper">
            <a
              href="https://www.theworldcounts.com/challenges/planet-earth/oceans/plastic-in-the-ocean"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              The World Counts
            </a>
          </div>
        </div>
      </div>
      <section>
        <aside className="title-aside">
          <h2>waanzin</h2>
        </aside>
        <article>
          <div className="content">
            <h4>Plastic</h4>
            <ul className="expandable-list">
              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-1')} className="expandable-link">
                  Scientists blown away by waste data
                </a>
                <div className="expandable-content" id="expandable-1">
                  Plastic wasn’t invented until the late 1800s and the production of plastic didn’t take off until
                  around 1950. But then it really took off. The world has produced over 9 billion tons of plastic since
                  then and TWO THIRDS have ended up in the environment - including our oceans. That’s about 6.3 billion
                  tons.
                </div>
              </li>
              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-2')} className="expandable-link">
                  The Earth coated in plastic
                </a>
                <div className="expandable-content" id="expandable-2">
                  Humans have made enough plastic since the second World War to coat the Earth entirely in clingfilm
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-3')} className="expandable-link">
                  100 plastic bags filled with plastic. For every foot of coastline. In the world.
                </a>
                <div className="expandable-content" id="expandable-3">
                  Between 60-80% of marine trash is plastic - 80% of which comes from land-based debris. Five grocery
                  bags stuffed with plastic are added every year for every foot of coastline. By 2025, there will be a
                  mindblowing 100 bags of plastic per foot of coastline in the world!
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-4')} className="expandable-link">
                  A killer on a massive scale
                </a>
                <div className="expandable-content" id="expandable-4">
                  Ocean plastic kills millions of 700 different marine animals every year. Including several endangered
                  species.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-5')} className="expandable-link">
                  Will ocean plastic degenerate?
                </a>
                <div className="expandable-content" id="expandable-5">
                  Do you know how long it will take for the plastic in oceans to biodegrade completely? Estimates range
                  from 450 years to never.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-6')} className="expandable-link">
                  Very disturbing effects
                </a>
                <div className="expandable-content" id="expandable-6">
                  Organic chemical compounds used in plastic are known endocrine disruptors (meaning they mess with our
                  hormones and reproductive systems). These include phthalates, bisphenol A and polybrominated diphenyl
                  ethers.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-7')} className="expandable-link">
                  The weight of the world population in plastic
                </a>
                <div className="expandable-content" id="expandable-7">
                  The annual production of plastic of 450 million tons is close to the weight of the entire human
                  population of the planet. The total amount of plastic produced could reach a staggering 30 billion
                  tons by the end of the century.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-8')} className="expandable-link">
                  Your weight in plastic - 40 times over
                </a>
                <div className="expandable-content" id="expandable-8">
                  30 billion tons of plastic by the year 2100 would be over 40 times the weight of the entire human
                  population that at this time will be more than 11 billion.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-9')} className="expandable-link">
                  The weight of 800 billion plastic bottles
                </a>
                <div className="expandable-content" id="expandable-9">
                  The plastic ending up in oceans every year is equivalent to the weight of 800 billion plastic bottles.
                  Put on top of each other these bottles would reach further than the sun. But they are not going to the
                  sun. They are in our oceans and will stay there.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-10')} className="expandable-link">
                  Plastic soup
                </a>
                <div className="expandable-content" id="expandable-10">
                  Ocean currents have created several gigantic “plastic soups” around the world. No-one knows the size
                  of these, but they could cover up to 16 million km2, or the combined size of Europe, India and Mexico!
                  The plastic waste has also created several “plastic soups” in the world's oceans.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-11')} className="expandable-link">
                  It could go completely wrong
                </a>
                <div className="expandable-content" id="expandable-11">
                  The plastic soup has been growing 10 times in size every decade since the 1950s. If nothing is done
                  now, this problem will spin completely out of control. In the North Pacific Gyre, marine samples show
                  plastics outweigh plankton by 6:1.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-12')} className="expandable-link">
                  The chemicals build up
                </a>
                <div className="expandable-content" id="expandable-12">
                  Fish and shellfish contain toxic chemicals at concentrations as high as nine million times (!) those
                  found in the water in which they swim.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-13')} className="expandable-link">
                  What can we do?
                </a>
                <div className="expandable-content" id="expandable-13">
                  Notice all the plastic around you, the plastic bags you use, and change to biodegradable alternatives.
                  They exist! Currently, only about 9 percent of the 450 million tons of plastic produced every year is
                  recycled. We can do better.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-14')} className="expandable-link">
                  2,120,000,000 Tons of waste dumped on the planet
                </a>
                <div className="expandable-content" id="expandable-14">
                  Every year we dump a massive 2.12 billion tons of waste on the planet. If all this waste was put on
                  trucks they would go around the world 24 times.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-15')} className="expandable-link">
                  2050 More plastic than fish in world’s oceans
                </a>
                <div className="expandable-content" id="expandable-15">
                  One garbage truck of plastic is dumped into our oceans every single minute. By 2030, it will be two
                  trucks per minute and by 2050, four. At this point, there could be more plastic than fish in the
                  world’s oceans
                </div>
              </li>
            </ul>
          </div>
          <div className="content">
            <ul className="expandable-list">
              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-16')} className="expandable-link">
                  The Plastic Era: Plastic defining a new human epoch
                </a>
                <div className="expandable-content" id="expandable-16">
                  The amount of plastic is so staggering that some scientists consider it a marker for a new epoch: the
                  Anthropocene (or the human age). Consider that for a moment: Our pollution of the Earth with plastic
                  is defining our relationship with the planet. We can do better.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-17')} className="expandable-link">
                  Reverse logic
                </a>
                <div className="expandable-content" id="expandable-17">
                  The rich countries exporting their waste actually have the technology and resources to process the
                  waste safely. While the countries importing the waste most often do not have such resources meaning
                  that toxic waste is handled by people with no protection or knowledge about how to handle it.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-18')} className="expandable-link">
                  51,000,000,000,000 Pieces of plastic in world’s oceans
                </a>
                <div className="expandable-content" id="expandable-18">
                  The UN estimates that 51 trillion microplastic particles are present in oceans. That’s 500 times more
                  than the total number of stars in our galaxy.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-19')} className="expandable-link">
                  More plastic produced in the last decade than in all remaining history
                </a>
                <div className="expandable-content" id="expandable-19">
                  Global plastic production has now reached over 320 million tons a year. Without intervention, the
                  amount of plastic in the world's oceans will triple within a decade.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-20')} className="expandable-link">
                  Scientists agree
                </a>
                <div className="expandable-content" id="expandable-20">
                  “If the oceans die, we die”: Life on Earth depends on the oceans ecosystems - including humans.
                </div>
              </li>

              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-21')} className="expandable-link">
                  Any good news?
                </a>
                <div className="expandable-content" id="expandable-21">
                  Plastic normally takes thousands of years to decompose. But 16-year-old Daniel Burd made it happen in
                  just three months by isolating a microbe that lunches on plastic bags. Bags made from, for example,
                  potato peel are also available.
                </div>
              </li>
            </ul>
            <h4>Plastic bags</h4>
            <ul className="expandable-list">
              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-22')} className="expandable-link">
                  How many plastic bags are used each year?
                </a>
                <div className="expandable-content" id="expandable-22">
                  We use 5 trillion plastic bags… per year! That’s 160,000 a second! And over 700 a year for every
                  single person on the planet. We can do better than that.
                </div>
              </li>
              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-23')} className="expandable-link">
                  160,000 plastic bags a second
                </a>
                <div className="expandable-content" id="expandable-23">
                  This year 5 trillion plastic bags will be consumed. That’s 160,000 a second! Put one after another
                  they would go around the world 7 times every hour and cover an area twice the size of France.
                </div>
              </li>
              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-24')} className="expandable-link">
                  Most bags are simply thrown out
                </a>
                <div className="expandable-content" id="expandable-24">
                  Less than 1 percent are recycled. They are most often made from Polyethylene that takes centuries to
                  degrade. Each ton of recycled plastic bags saves the energy equivalent of 11 barrels of oil.
                </div>
              </li>
              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-25')} className="expandable-link">
                  12 minutes of use, 1000 years of pollution
                </a>
                <div className="expandable-content" id="expandable-25">
                  It takes up to 1,000 years for a plastic bag to break down. On average, a plastic shopping bag is used
                  for just 12 minutes.
                </div>
              </li>
              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-26')} className="expandable-link">
                  What happens to the plastic bags?
                </a>
                <div className="expandable-content" id="expandable-26">
                  In total, we use 100 million tons of plastic every year. Some 10 percent of this plastic end up in the
                  oceans. An estimated 300 million plastic bags every year end up in the Atlantic Ocean alone. All that
                  plastic ending up in oceans is not without consequences.
                </div>
              </li>
            </ul>
            <h4>Waste</h4>
            <ul className="expandable-list">
              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-27')} className="expandable-link">
                  What waste is dumped?
                </a>
                <div className="expandable-content" id="expandable-27">
                  The waste is dumped on land-based dumpsites or in the oceans and include:
                  <ul className="normal-list">
                    <li>Construction waste</li>
                    <li>Industrial waste</li>
                    <li>Household waste</li>
                    <li>Plastic waste</li>
                    <li>Electronic waste</li>
                    <li>Radioactive waste</li>
                    <li>Sewage</li>
                    <li>
                      Run-off waste (fertilizers, pesticides, and oil from for example farms running off into
                      groundwater, rivers, oceans).
                    </li>
                  </ul>
                  Waste dumping has become a way to "solve" the world's enormous waste problem. We need to come up with
                  better ideas pretty quickly or it will spin completely out of control. This stunning amount of waste
                  is partly because 99 percent of the stuff we buy is trashed within 6 months.
                </div>
              </li>
              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-28')} className="expandable-link">
                  Effects of waste dumping
                </a>
                <div className="expandable-content" id="expandable-28">
                  Naturally, simply dumping waste on the planet has consequences. The effects of waste dumping and
                  improper waste management include
                  <ul>
                    <li>
                      Pollution of soil: Waste can leak hazardous chemicals into the soil and from their into our food.
                    </li>
                    <li>
                      Air pollution: The burning of waste at landfills release toxic substances into the air, including
                      extremely poisoning dioxin.
                    </li>
                    <li>
                      Pollution of oceans: 13 million tonnes of plastic end up in the world’s oceans each year. If we
                      keep dumping plastic in the oceans, by 2050 there will be more plastic than fish in the sea.
                    </li>
                    <li>
                      Pollution of groundwater: 280 billion tons of groundwater is being polluted every year - that’s
                      9000 tons every second.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-29')} className="expandable-link">
                  Earth cannot sustain our waste
                </a>
                <div className="expandable-content" id="expandable-29">
                  The Global Footprint Network has created a measure for how much we are pushing the Earth in terms of
                  resource use and waste generation. We already push 75 percent above what the Earth can sustain in the
                  long run with regard to resource extraction and absorption of waste. And the number keeps going up.
                </div>
              </li>
              <li className="list-item">
                <a href="#" onClick={(e) => toggleExpand(e, 'expandable-30')} className="expandable-link">
                  World waste production is going up
                </a>
                <div className="expandable-content" id="expandable-30">
                  To add to the challenge, global annual waste generation is projected to increase by 70 percent between
                  2018 and 2050 unless major changes take place.
                </div>
              </li>
            </ul>
          </div>
        </article>
        <aside className="resource-link">
          <a href="https://www.theworldcounts.com" target="_blank" rel="noopener noreferrer" className="link">
            www.theworldcounts.com
          </a>
        </aside>
      </section>
    </div>
  );
}

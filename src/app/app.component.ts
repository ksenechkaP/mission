import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data = [
   {
     agent: '007',
     country: 'Brazil',
     address: 'Avenida Vieira Souto 168 Ipanema, Rio de Janeiro',
     date: 'Dec 17, 1995, 9:45:17 PM'
   },
   {agent: '005', country: 'Poland',
        address: 'Rynek Glowny 12, Krakow',
        date: 'Apr 5, 2011, 5:05:12 PM'
   },
   {agent: '007', country: 'Morocco',
        address: '27 Derb Lferrane, Marrakech',
        date: 'Jan 1, 2001, 12:00:00 AM'
   },
   {agent: '005', country: 'Brazil',
        address: 'Rua Roberto Simonsen 122, Sao Paulo',
        date: 'May 5, 1986, 8:40:23 AM'
   },
   {agent: '011', country: 'Poland',
        address: 'swietego Tomasza 35, Krakow',
        date: 'Sep 7, 1997, 7:12:53 PM'
   },
   {agent: '003', country: 'Morocco',
        address: 'Rue Al-Aidi Ali Al-Maaroufi, Casablanca',
        date: 'Aug 29, 2012, 10:17:05 AM'
   },
   {agent: '008', country: 'Brazil',
        address: 'Rua tamoana 418, tefe',
        date: 'Nov 10, 2005, 1:25:13 PM'
   },
   {agent: '013', country: 'Poland',
        address: 'Zlota 9, Lublin',
        date: 'Oct 17, 2002, 10:52:19 AM'
   },
   {agent: '002', country: 'Morocco',
        address: 'Riad Sultan 19, Tangier',
        date: 'Jan 1, 2017, 5:00:00 PM'
   },
   {agent: '009', country: 'Morocco',
        address: 'atlas marina beach, agadir',
        date: 'Dec 1, 2016, 9:21:21 PM'
   }
];

sortedAgents;
isolatedCountry;

  getMostIsolated(data) {
    //list of not uniq agents
  const seen = new Set();
  const hasDuplicates = data.filter(currentObject => {
      return seen.size === seen.add(currentObject.agent).size;
  }).map(item => item.agent);

  //remove all not uniq agents from list
  const uniqAgents = data.filter(currentObject => {
    return hasDuplicates.indexOf(currentObject.agent) < 0;
  });

  //get list of countries names
  const countries = [...new Set(uniqAgents.map(agent => agent.country))];

  //get most repeated country
  let counter = 0;


  countries.forEach( country => {
    const currentCountry = uniqAgents.filter(agent => {
      return agent.country === country;
    });

    if (currentCountry.length > counter) {
      counter = currentCountry.length;
      this.isolatedCountry = country;
      return country;
    }
  });
  }

  sortData() {
    this.sortedAgents = this.data.sort((a: any, b: any) =>
       new Date(a.date).getTime() - new Date(b.date).getTime()
   );
  }

  ngOnInit()  {
    this.sortData();
    this.getMostIsolated(this.data);
  }
}

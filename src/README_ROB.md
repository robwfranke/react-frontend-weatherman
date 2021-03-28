1.    npm install
2.    npm install react-hook-form --save
3.    npm install react-router-dom --save 
4.    npm install axios --save
      daarna import axios from 'axios'; in app.js
      
5.    Voeg aan .gitignore /.idea toe
6.    zet in filesettings Editor inspections goed
7.    Zet volgende index.js

Router element index.js ipv in app. Deze zijn (wanneer dit in app.js blijft) alleen beschikbaar in de
<Router></Router>
en dan kun je usehistory e.d. niet gebruiken, deze staat buiten router element. Dus dan in index.js,
dit is 1 niveau hoger.

import {BrowserRouter as Router} from 'react-router-dom';

in de ReactDom.render (zie hieronder<>)

<Router>
          <App/>
</Router>

Daarmee zet je het router element om je hele applicatie!!!




7.   runnen met npm start
8.  bij problemen wil nog wel eens helpen: File invalidate caches

Maak repository aan!!

- git init
  maak in github nieuwe repository aan.

- git remote remove origin
- git remote add origin https://github.com/robwfranke/new_clone.git
- git add .
- git status
- git branch -a (local+remote)
- git commit -m "Start project"
- git push origin master
- check github
- git checkout -b branchname

- git branch --show-current

- git status
- git add .
- git commit -m "stap 1"
- git push origin branchname
- zie Stappenplan_GIT_Clonen en branchen.docx
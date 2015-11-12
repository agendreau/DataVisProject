data = {
   "defaultWords":
   [
      {
         "name": "QuestionWords",
         "data": ["How do", "How many", "How much", "When", "Value of"]
      },
      {
         "name": "Prepositions",
         "data": ["over", "under", "for"]
      },
      {
         "name": "Relations",
         "data": ["map","effect", "time"]
      },
      {
         "name": "DataWords",
         "data": []
      },
   ],

   "dataSets":
   [
      {
         "name"         : "Data Set 1",
         "DataWords"    : ["time","bike","workday","season","wind","temp"],
         "combinations" : [
            /*{
               "name"     : "Task 1",
               "question" : "How can we characterize the diffusion of images on Twitter in the aftermath of the Nepal earthquake?",
               "query"    : ["How do", "items", "map", "over", "time"],
               "img"      : [{
                                "src" : "nepalDiffusionMap.jpg",
                                "alt" : "Spread of Tweets through Asia after the Nepal Earthquake"
                            }]
            }*/
               {
               "name"       : "Task 1",
               "question"   : "How does season and workday effect bike travel",
               "query"      : ["How do","season","workday","effect","bike"],
               "img"        : [{
                                 "src" : "treeWorkday.png",
                                 "alt" : "The numbers of bikers per season split by week/weekend",
                              }]
               },
               {
               "name"       : "Task 1",
               "question"   : "How does the windspeed effect bike travel",
               "query"      : ["How do","wind","effect","bike"],
               "img"        : [{
                                 "src" : "treeWind.png",
                                 "alt" : "The number of bikers shown by windspeed"
                              },
                              { // Just an example of how to match multiple images.
                                //  Feel free to delete this and uncomment the next combination
                                 "src" : "bubbleTemp.png",
                                 "alt" : "The number of bikers shown by windspeed"
                              }]
               },
               // {
               // "name"       : "Task 1",
               // "question"   : "How does the temperature effect bike travel",
               // "query"      : ["How do","temp","effect","bike"],
               // "img"        : [{
               //                   "src" : "bubbleTemp.png",
               //                   "alt" : "The number of bikers shown by temperature"
               //                }]
               // },
               {
               "name"       : "Task 1",
               "question"   : "How does the time of day effect bike travel",
               "query"      : ["How do","time","effect","bike"],
               "img"        : [{
                                 "src" : "lineHour.png",
                                 "alt" : "The number of bikers shown over time of day"
                              }]
               }
            //, ...
         ]
      },
      {
         "name"       : "Data Set 2",
         "DataWords"  : ["statistical", "distribution", "country", "income per capita", "life expectancy", "population"],
         "combinations" : [
            {
               "name"      : "Task 2",
               "question"  : "For each country, plot the value of income per capita, value of life exptectancy, and change in population over time",
               "query"     : ["for", "country", "Value of", "income per capita", "life expectancy", "population", "over", "time"],
               "img"       : [{
                                 "src" : "bubblechart.jpg", //"3Dbarchart.jpg", "bulletchart.png",
                                 "alt" : "Bubble chart showing income per capita, life expectancy, and population over time by country",
                             }]
            },
            {
               "name"      : "Task 2",
               "question"  : "What is the statistical distribution of income per capita over time",
               "query"     : ["statistical","distribution","income per capita","over","time"],
               "img"       : [{
                                 "src" : "boxplot.png",
                                 "alt" : "Box and whisker plot showing income per capita over time",
                             }]
            },
            {
               "name"      : "Task 2",
               "question"  : "Life expectancy for United States, Canada, Mexico over time",
               "query"     : ["life expectancy", "country", "over", "time"],
               "img"       : [{
                                 "src" : "linechart.png",
                                 "alt" : "Line chart depicting life expectancy for United States, Canada, Mexico over time",
                             }]
            }

            //, ...
         ]
      }
   ]
};

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
         "data": ["map","affect", "time"]
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
               "question"   : "How does season and workday affect bike travel",
               "query"      : ["How do","season","workday","affect","bike"],
               "img"        : [{
                                 "src" : "treeWorkday.png",
                                 "alt" : "The numbers of bikers per season split by week/weekend"
                              },
                               {
                                 "src" : "barWorkday.png",
                                 "alt" : "The numbers of bikers per season split by week/weekend"
                               },
                               {
                                 "src" : "heatWorkday.png",
                                 "alt" : "The numbers of bikers per season split by week/weekend"
                               }]
               },
               {
               "name"       : "Task 1",
               "question"   : "How does the windspeed affect bike travel",
               "query"      : ["How do","wind","affect","bike"],
               "img"        : [{
                                 "src" : "treeWind.png",
                                 "alt" : "The number of bikers shown by windspeed"
                              }]
               },
                {
                "name"       : "Task 1",
                "question"   : "How does the temperature affect bike travel",
                "query"      : ["How do","temp","affect","bike"],
                "img"        : [{
                                  "src" : "bubbleTemp.png",
                                  "alt" : "The number of bikers shown by temperature"
                               },
                                {
                                  "src" : "treeTemperature.png",
                                  "alt" : "The number of bikers shown by temperature"
                                }]
                },
               {
               "name"       : "Task 1",
               "question"   : "How does the time of day affect bike travel",
               "query"      : ["How do","time","affect","bike"],
               "img"        : [{
                                 "src" : "lineHour.png",
                                 "alt" : "The number of bikers shown over time of day"
                              },
                               {
                                 "src" : "treeHour.png",
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
               "img"       : [
                                {
                                    "src" : "bubblechart.jpg", //"3Dbarchart.jpg", "bulletchart.png",
                                    "alt" : "Bubble chart showing income per capita, life expectancy, and population over time by country",
                                },
                                {
                                    "src" : "3Dbarchart.png",
                                    "alt" : "3D bar chart showing income per capita, life expectancy, and population over time by country",
                                },
                                {
                                    "src" : "bulletchart.png",
                                    "alt" : "Bullet chart showing income per capita, life expectancy, and population over time by country",
                                }
                             ]
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

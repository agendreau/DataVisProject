data = {
   "defaultWords":
   [
      {
         "name": "Question Words",
         "data": ["How do/does", "Value of", "What is"]
      },
      {
         "name": "Data Driven Words",
         "data": []
      },
      {
         "name": "Relations",
         "data": ["affect", "time"]
      },
      {
         "name": "Grammatical Elements",
         "data": ["over", "under", "for", "and", "or", "the", "a"]
      },
   ],
   "preloadWords" : [], // ["for", "country", "Value of", "income per capita", "life expectancy", "population", "over", "time"], // debug only, set to [] before committing
   "dataSets":
   [
      {
         "name"              : "Data Set 1",
         "title"             : "IBM Watson Bike Data",
         "desc"              : "This is an example data set about bike riding used in Watson Analytics.\
                                It provides information about the number of riders as well as season, \
                                time of day, day of week, and weather. ",
         "questions"         : [ "How do season and workday affect bike travel?",
                                 "How does the wind affect bike travel?",
                                 "How does the temperature affect bike travel?",
                                 "How does the time of day affect bike travel?"
                                 ],
         "Data Driven Words" : ["bike travel","workday","season","wind","temp"],
         "combinations"      : [
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
               "question"   : "How do season and workday affect bike travel?",
               "query"      : ["How do/does","season","and","workday","affect","bike travel"],
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
               "question"   : "How does the wind affect bike travel?",
               "query"      : ["How do/does","wind","affect","bike travel"],
               "img"        : [{
                                 "src" : "treeWind.png",
                                 "alt" : "The number of bikers shown by windspeed"
                              }]
               },
                {
                "name"       : "Task 1",
                "question"   : "How does the temperature affect bike travel?",
                "query"      : ["How do/does","temp","affect","bike travel"],
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
               "question"   : "How does the time of day affect bike travel?",
               "query"      : ["How do/does","time","affect","bike travel"],
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
         "name"              : "Data Set 2",
         "title"             : "Life Expectancy Data",
         "desc"              : "This data set contains census data related to Hans Rosling's 2006 TED Talk. \
                                The data set contains income per capita, population, and life expectancy for \
                                several countries since 1850. ",
         "questions"         : [ "What is the life expectancy for a country over time?",
                                 "What is the statistical distribution of income per capita over time?",
                                 "For each country, plot the value of income per capita, value of life \
                                  expectancy, and change in population over time.",
                                 ],
         "Data Driven Words" : ["statistical", "distribution", "country", "income per capita", "life expectancy", "population"],
         "combinations"      : [
            {
               "name"      : "Task 2",
               "question"  : "For each country, plot the value of income per capita, value of life expectancy, and change in population over time?",
               "query"     : ["country", "Value of", "income per capita", "life expectancy", "population", "over", "time"],
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
               "question"  : "What is the life expectancy for United States, Canada, Mexico over time",
               "query"     : ["life expectancy", "country", "over", "time"],
               "img"       : [{
                                 "src" : "linechart.png",
                                 "alt" : "Line chart depicting life expectancy for United States, Canada, Mexico over time?",
                             }]
            }

            //, ...
         ]
      }
   ]
};

data = {
   "defaultWords":
   [
      {
         "name": "QuestionWords",
         "data": ["How do", "How many", "How much", "When"]
      },
      {
         "name": "Prepositions",
         "data": ["over", "under"]
      },
      {
         "name": "Relations",
         "data": ["map"]
      },
      {
         "name": "DataWords",
         "data": ["items"]
      },
   ],

   "dataSets":
   [
      {
         "name"         : "Data Set 1",
         "DataWords"    : ["time"],
         "combinations" : [
            {
               "name"     : "Task 1",
               "question" : "How can we characterize the diffusion of images on Twitter in the aftermath of the Nepal earthquake?",
               "query"    : ["How do", "items", "map", "over", "time"],
               "img"      : {
                                "src" : "nepalDiffusionMap.jpg",
                                "alt" : "Spread of Tweets through Asia after the Nepal Earthquake"
                            }
            }
            //, ...
         ]
      },
      {
         "name"       : "Data Set 2",
         "DataWords"  : [],
         "combinations" : [/*fill this in*/]
      }
   ]
};

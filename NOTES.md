
### Option 1
* App: (videos[], input, playing) 

### Option 2
* Main: s: (videos[])
* SearchResults: s: (videos[]) // filtered
> If we use a filter for search:
    * Filter while rendering   

### Option 3
* App: (playing, input, videos)
> Because the videos come back from the server async, 
we will need to keep them in state